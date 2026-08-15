const lines = [
  [
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "סוֹף־פָּ", letter: "ס", after: "וּק", note: "ֽ" }
  ],
  [
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "סוֹף־פָּ", letter: "ס", after: "וּק", note: "ֽ" }
  ],
  [
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "סוֹף־פָּ", letter: "ס", after: "וּק", note: "ֽ" }
  ],
  [
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "סוֹף־פָּ", letter: "ס", after: "וּק", note: "ֽ" }
  ],
  [
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "סוֹף־פָּ", letter: "ס", after: "וּק", note: "ֽ" }
  ],
  [
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "אֶתְנַחְ", letter: "תָּ", after: "א", note: "֑" }
  ],
  [
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "אֶתְנַחְ", letter: "תָּ", after: "א", note: "֑" }
  ],
  [
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "אֶתְנַחְ", letter: "תָּ", after: "א", note: "֑" }
  ],
  [
    { before: "טִפְּ", letter: "חָ", after: "א", note: "֖" },
    { before: "אֶתְנַחְ", letter: "תָּ", after: "א", note: "֑" }
  ],
  [
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "מַהְ", letter: "פַּ", after: "ךְ", note: "֤" },
    { before: "פַּשְׁטָ", letter: "א", after: "", note: "֙" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "מַהְ", letter: "פַּ", after: "ךְ", note: "֤" },
    { before: "פַּשְׁטָ", letter: "א", after: "", note: "֙" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "מַהְ", letter: "פַּ", after: "ךְ", note: "֤" },
    { before: "פַּשְׁטָ", letter: "א", after: "", note: "֙" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "מַהְ", letter: "פַּ", after: "ךְ", note: "֤" },
    { before: "פַּשְׁטָ", letter: "א", after: "", note: "֙" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "פַּשְׁטָ", letter: "א", after: "", note: "֙" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "פַּשְׁטָ", letter: "א", after: "", note: "֙" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "", letter: "יְ", after: "תִיב", note: "֚" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "", letter: "יְ", after: "תִיב", note: "֚" },
    { before: "קָ", letter: "טֹ", after: "ן", note: "֔" }
  ],
  [
    { before: "קַדְ", letter: "מָ", after: "א", note: "֨" },
    { before: "דַּרְ", letter: "גָ", after: "א", note: "֧" },
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "דַּרְ", letter: "גָ", after: "א", note: "֧" },
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "דַּרְ", letter: "גָ", after: "א", note: "֧" },
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "קַדְ", letter: "מָ", after: "א", note: "֨" },
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "מֵרְ", letter: "כָ", after: "א", note: "֥" },
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "תְּבִ", letter: "י", after: "ר", note: "֛" }
  ],
  [
    { before: "גֵּרְ", letter: "שַׁ", after: "יִם", note: "֞" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "רְ", letter: "בִ", after: "יעַ", note: "֗" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "רְ", letter: "בִ", after: "יעַ", note: "֗" }
  ],
  [
    { before: "רְ", letter: "בִ", after: "יעַ", note: "֗" }
  ],
  [
    { before: "קַדְ", letter: "מָ", after: "א", note: "֨" },
    { before: "וְאַזְ", letter: "לָ", after: "א", note: "֜" }
  ],
  [
    { before: "גֵּ", letter: "רֵ", after: "שׁ", note: "֜" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "זַרְ", letter: "קָ", after: "א", note: "֘" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "סְ", letter: "גֹ", after: "ול", note: "֒" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "זַרְ", letter: "קָ", after: "א", note: "֘" },
    { before: "סְ", letter: "גֹ", after: "ול", note: "֒" }
  ],
  [
    { before: "זַרְ", letter: "קָ", after: "א", note: "֘" },
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "סְ", letter: "גֹ", after: "ול", note: "֒" }
  ]
];

const tropePaths = {
  "֥": "M-170-341Q-69-341-2-283Q70-222 70-121Q70-70 66-52H166Q170-76 170-92Q170-441-170-441Z",
  "֖": "M170-441Q-170-441-170-92Q-170-76-166-52H-66Q-70-70-70-121Q-70-222 2-283Q69-341 170-341Z",
  "ֽ": "M-50-52H50V-441H-50Z",
  "֣": "M-160-332H80V-52H160V-412H-160Z",
  "֑": "M-34-52H34V-248L154-380L88-441L0-342L-88-441L-154-380L-34-248Z",
  "֤": "M156-68L-30-246L156-424L92-448L-158-246L92-44Z",
  "֙": "M-170-341Q-69-341-2-283Q70-222 70-121Q70-70 66-52H166Q170-76 170-92Q170-441-170-441Z",
  "֔": "M-58-52H58V-168H-58ZM-58-286H58V-402H-58Z",
  "֚": "M156-68L-30-246L156-424L92-448L-158-246L92-44Z",
  "֨": "M-170-341Q-69-341-2-283Q70-222 70-121Q70-70 66-52H166Q170-76 170-92Q170-441-170-441Z",
  "֧": "M120-58L-70-142L48-224L-118-312L42-428",
  "֛": "M108-64C108-238 34-352-118-352",
  "֞": "M-118-408C-118-282-80-166-28-62M24-408C24-282 64-166 116-62",
  "֗": "M0-48L154-246L0-444L-154-246Z",
  "֜": "M-118-408C-118-248-42-102 112-62",
  "֘": "M-170-300C-110-420-32-420 18-314C68-208 120-208 170-326",
  "֒": "M-52-64A48 48 0 1 0 44-64A48 48 0 1 0-52-64ZM-142-304A48 48 0 1 0-46-304A48 48 0 1 0-142-304ZM46-304A48 48 0 1 0 142-304A48 48 0 1 0 46-304Z"
};

const DB_NAME = "my-trope-recordings";
const STORE_NAME = "recordings";
const list = document.querySelector("#line-list");
const template = document.querySelector("#line-template");
const supportMessage = document.querySelector("#support-message");
let activeRecording = null;

function preferredRecorderOptions() {
  const mimeTypes = [
    "audio/webm;codecs=opus",
    "audio/ogg;codecs=opus",
    "audio/mp4;codecs=mp4a.40.2",
    "audio/mp4"
  ];
  const mimeType = mimeTypes.find(type => MediaRecorder.isTypeSupported(type));
  return {
    ...(mimeType ? { mimeType } : {}),
    audioBitsPerSecond: 256000
  };
}

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
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        sampleRate: { ideal: 48000 },
        sampleSize: { ideal: 24 },
        channelCount: { ideal: 1 },
        echoCancellation: { ideal: false },
        noiseSuppression: { ideal: false },
        autoGainControl: { ideal: false }
      }
    });
    const recorder = new MediaRecorder(stream, preferredRecorderOptions());
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
      status.textContent = "Recording in high quality…";
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
  const lineLabel = index < 29 ? index + 1 : index === 29 ? "29a" : index;
  card.querySelector(".line-number").textContent = lineLabel;
  const hebrewLine = card.querySelector(".hebrew-line");
  words.forEach(word => {
    const name = document.createElement("span");
    name.className = "hebrew-word";
    name.append(document.createTextNode(word.before));
    const anchor = document.createElement("span");
    anchor.className = "trope-anchor";
    anchor.textContent = `${word.letter}${word.note}`;
    const note = document.createElement("span");
    note.className = "trope-note";
    if (word.note === "֙" || word.note === "֨") note.classList.add("pashta-note");
    if (word.note === "֧" || word.note === "֛" || word.note === "֞" || word.note === "֜" || word.note === "֘") note.classList.add("stroke-note");
    note.setAttribute("aria-hidden", "true");
    const noteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    noteSvg.setAttribute("viewBox", "-190 40 380 420");
    noteSvg.setAttribute("focusable", "false");
    const notePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    notePath.setAttribute("d", tropePaths[word.note]);
    notePath.setAttribute("transform", "scale(1 -1)");
    noteSvg.append(notePath);
    if (word.note === "֛") {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("class", "note-dot");
      dot.setAttribute("cx", "-70");
      dot.setAttribute("cy", "-76");
      dot.setAttribute("r", "34");
      dot.setAttribute("transform", "scale(1 -1)");
      noteSvg.append(dot);
    }
    note.append(noteSvg);
    anchor.append(note);
    name.append(anchor, document.createTextNode(word.after));
    hebrewLine.append(name);
  });
  card.setAttribute("aria-label", `Line ${lineLabel}: ${words.map(word => word.before + word.letter + word.after).join(" ")}`);
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
