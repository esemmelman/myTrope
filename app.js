const lines = [
  ["מֵרְכָא", "טִפְּחָא", "מֵרְכָא", "סוֹף־פָּסוּק"],
  [null, "טִפְּחָא", "מֵרְכָא", "סוֹף־פָּסוּק"],
  ["מֵרְכָא", "טִפְּחָא", null, "סוֹף־פָּסוּק"]
];

const DB_NAME = "my-trope-recordings";
const STORE_NAME = "recordings";
const list = document.querySelector("#line-list");
const template = document.querySelector("#line-template");
const supportMessage = document.querySelector("#support-message");
let activeRecording = null;

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeRecording(index, blob) {
  const db = await openDatabase();
  await new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).put(blob, index);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
}

async function getRecording(index) {
  const db = await openDatabase();
  const blob = await new Promise((resolve, reject) => {
    const request = db.transaction(STORE_NAME).objectStore(STORE_NAME).get(index);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return blob;
}

async function deleteRecording(index) {
  const db = await openDatabase();
  await new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    transaction.objectStore(STORE_NAME).delete(index);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
}

function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function setSelected(card) {
  document.querySelectorAll(".line-card").forEach(item => item.setAttribute("aria-selected", String(item === card)));
}

function attachAudio(card, blob) {
  const audio = card.querySelector(".audio-player");
  const oldUrl = audio.dataset.url;
  if (oldUrl) URL.revokeObjectURL(oldUrl);
  const url = URL.createObjectURL(blob);
  audio.src = url;
  audio.dataset.url = url;
  audio.hidden = false;
  card.querySelector(".play-button").disabled = false;
  card.querySelector(".delete-button").disabled = false;
  const status = card.querySelector(".recording-status");
  status.textContent = "Recording saved on this device";
  status.className = "recording-status saved";
}

async function startRecording(card, index) {
  if (activeRecording) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    const button = card.querySelector(".record-button");
    const label = card.querySelector(".record-label");
    const status = card.querySelector(".recording-status");
    const timer = card.querySelector(".timer");
    let seconds = 0;

    recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
    recorder.onstop = async () => {
      clearInterval(activeRecording?.interval);
      stream.getTracks().forEach(track => track.stop());
      const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
      await storeRecording(index, blob);
      attachAudio(card, blob);
      button.classList.remove("recording");
      label.textContent = "Record again";
      activeRecording = null;
    };

    recorder.start();
    button.classList.add("recording");
    label.textContent = "Stop";
    status.textContent = "Recording…";
    status.className = "recording-status active";
    timer.textContent = "0:00";
    const interval = setInterval(() => { seconds += 1; timer.textContent = formatTime(seconds); }, 1000);
    activeRecording = { recorder, card, interval };
  } catch (error) {
    const status = card.querySelector(".recording-status");
    status.textContent = error.name === "NotAllowedError" ? "Microphone permission was not granted" : "Could not start the microphone";
    status.className = "recording-status active";
  }
}

lines.forEach((words, index) => {
  const card = template.content.firstElementChild.cloneNode(true);
  card.dataset.index = index;
  card.querySelector(".line-number").textContent = index + 1;
  const hebrewLine = card.querySelector(".hebrew-line");
  words.forEach(word => {
    const element = document.createElement("span");
    element.className = word ? "hebrew-word" : "hebrew-gap";
    if (word) element.textContent = word;
    else element.setAttribute("aria-label", "blank");
    hebrewLine.append(element);
  });
  card.setAttribute("aria-label", `Line ${index + 1}: ${words.filter(Boolean).join(" ")}`);
  card.addEventListener("click", () => setSelected(card));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelected(card); }
  });
  card.querySelector(".record-button").addEventListener("click", () => {
    setSelected(card);
    if (activeRecording?.card === card) activeRecording.recorder.stop();
    else startRecording(card, index);
  });
  card.querySelector(".play-button").addEventListener("click", () => {
    const audio = card.querySelector("audio");
    if (audio.paused) { audio.play(); card.querySelector(".play-button").textContent = "Pause"; }
    else { audio.pause(); card.querySelector(".play-button").textContent = "Play"; }
  });
  card.querySelector("audio").addEventListener("ended", () => card.querySelector(".play-button").textContent = "Play");
  card.querySelector(".delete-button").addEventListener("click", async () => {
    await deleteRecording(index);
    const audio = card.querySelector("audio");
    if (audio.dataset.url) URL.revokeObjectURL(audio.dataset.url);
    audio.removeAttribute("src");
    audio.hidden = true;
    card.querySelector(".play-button").disabled = true;
    card.querySelector(".delete-button").disabled = true;
    card.querySelector(".record-label").textContent = "Record";
    card.querySelector(".timer").textContent = "0:00";
    const status = card.querySelector(".recording-status");
    status.textContent = "Ready to record";
    status.className = "recording-status";
  });
  list.append(card);
  getRecording(index).then(blob => { if (blob) attachAudio(card, blob); }).catch(() => {});
});

if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder || !window.indexedDB) {
  supportMessage.hidden = false;
  supportMessage.textContent = "Recording requires a current browser with microphone access.";
  document.querySelectorAll(".record-button").forEach(button => { button.disabled = true; });
}
