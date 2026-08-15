const SUPABASE_URL = "https://fgomaujsdblpzxhnnqrg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_JOUqLZDnfGu_yCa6k6FVDQ_AYwpr72i";
const RECORDINGS_TABLE = "mytrope_recordings_v1";
const RECORDINGS_BUCKET = "mytrope-recordings-v1";
const cloud = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

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
  ],
  [
    { before: "זַרְ", letter: "קָ", after: "א", note: "֘" },
    { before: "סְ", letter: "גֹ", after: "ול", note: "֒" }
  ],
  [
    { before: "דַּרְ", letter: "גָ", after: "א", note: "֧" },
    { before: "מֵרְכָא־כְּפוּ", letter: "לָ", after: "ה", note: "֦" }
  ],
  [
    { before: "זָקֵף ", letter: "גָּ", after: "דוֹל", note: "֕" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "", letter: "תְּ", after: "לִישָׁא גְּדוֹלָה", note: "֠" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "תְּלִישָׁא קְטַנָּ", letter: "ה", after: "", note: "֩" }
  ],
  [
    { before: "מֻ", letter: "נַּ", after: "ח", note: "֣" },
    { before: "פָּ", letter: "זֵ", after: "ר", note: "֡" }
  ],
  [
    { before: "שַׁלְ", letter: "שֶׁ", after: "לֶת", note: "֓" }
  ],
  [
    { before: "יֶרַח בֶּן־", letter: "י", after: "וֹמוֹ", note: "֪" },
    { before: "קַרְ", letter: "נֵ", after: "י פָרָה", note: "֟" }
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
  "֒": "M-52-64A48 48 0 1 0 44-64A48 48 0 1 0-52-64ZM-142-304A48 48 0 1 0-46-304A48 48 0 1 0-142-304ZM46-304A48 48 0 1 0 142-304A48 48 0 1 0 46-304Z",
  "֦": "M-156-62C-156-234-104-356-28-392M18-62C18-234 74-356 154-392",
  "֕": "M-142-52H-62V-430H-142ZM52-98A42 42 0 1 0 136-98A42 42 0 1 0 52-98ZM52-310A42 42 0 1 0 136-310A42 42 0 1 0 52-310Z",
  "֠": "M-76-354L40-184",
  "֩": "M76-354L-40-184",
  "֡": "M38-372L38-176C38-100-42-82-96-130L-96-238",
  "֓": "M-62-404L66-344L-62-284L66-224L-62-164L62-92",
  "֪": "M-108-248C-108-102 108-102 108-248M0-116L0-70",
  "֟": "M-54-354L-142-184M54-354L142-184"
};

const list = document.querySelector("#line-list");
const template = document.querySelector("#line-template");
const supportMessage = document.querySelector("#support-message");
const recordingList = document.querySelector("#recording-list");
const playbackStatus = document.querySelector("#playback-status");
const lineSearchInput = document.querySelector("#line-search-input");
const clearLineSearch = document.querySelector("#clear-line-search");
let activeRecording = null;
let activePlayback = null;

const tropeSearchNames = {
  "֥": ["Mercha", "merkha"], "֖": ["Tipcha", "tifcha"],
  "ֽ": ["Sof Pasuk", "sof passuk sof pasuq"], "֣": ["Munach", "munah"],
  "֑": ["Etnachta", "etnahta etnachta"], "֤": ["Mahapach", "mahapakh mehuppach"],
  "֙": ["Pashta", "pashtah"], "֔": ["Zakef Katan", "zaqef qatan zakef katon"],
  "֚": ["Yetiv", "yetib"], "֨": ["Kadma", "qadma"],
  "֧": ["Darga", "dargah"], "֛": ["Tevir", "tvir"],
  "֞": ["Gershayim", "gershaim"], "֗": ["Revia", "revii revia mugrash"],
  "֘": ["Zarqa", "zarka tsinor"], "֒": ["Segol", "segolta"],
  "֦": ["Mercha Kefula", "merkha kefulah double mercha"],
  "֕": ["Zakef Gadol", "zaqef gadol"], "֠": ["Telisha Gedola", "telisha gedolah"],
  "֩": ["Telisha Ketana", "telisha qetana ketanah"], "֡": ["Pazer", "pazer qatan"],
  "֓": ["Shalshelet", "shalshalet"], "֪": ["Yerach Ben Yomo", "yerah ben yomo galgal"],
  "֟": ["Karnei Farah", "qarney para karne parah pazer gadol"]
};

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
    audioBitsPerSecond: 320000
  };
}

function lineLabel(index) {
  return index < 29 ? String(index + 1) : index === 29 ? "29a" : String(index);
}

async function storeRecording(index, blob) {
  const extension = blob.type.includes("ogg") ? "ogg" : blob.type.includes("mp4") ? "m4a" : blob.type.includes("mpeg") ? "mp3" : "webm";
  const uniqueId = crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const objectPath = `line-${lineLabel(index)}/${uniqueId}.${extension}`;
  const { data: existing } = await cloud.from(RECORDINGS_TABLE)
    .select("object_path")
    .eq("line_index", index)
    .maybeSingle();
  const { error: uploadError } = await cloud.storage.from(RECORDINGS_BUCKET)
    .upload(objectPath, blob, { contentType: blob.type, upsert: false, cacheControl: "31536000" });
  if (uploadError) throw uploadError;
  const { error: rowError } = await cloud.from(RECORDINGS_TABLE).upsert({
    line_index: index,
    line_label: lineLabel(index),
    object_path: objectPath,
    mime_type: blob.type || "audio/webm",
    byte_size: blob.size,
    updated_at: new Date().toISOString()
  });
  if (rowError) {
    await cloud.storage.from(RECORDINGS_BUCKET).remove([objectPath]);
    throw rowError;
  }
  if (existing?.object_path && existing.object_path !== objectPath) {
    const { error: cleanupError } = await cloud.storage.from(RECORDINGS_BUCKET).remove([existing.object_path]);
    if (cleanupError) console.warn("Old recording cleanup failed", cleanupError);
  }
}

async function loadRecordings() {
  const { data, error } = await cloud.from(RECORDINGS_TABLE).select("line_index, object_path");
  if (error) throw error;
  data.forEach(recording => {
    const card = list.querySelector(`[data-index="${recording.line_index}"]`);
    if (!card) return;
    const publicUrl = cloud.storage.from(RECORDINGS_BUCKET).getPublicUrl(recording.object_path).data.publicUrl;
    attachAudio(card, publicUrl);
  });
}

async function deleteRecording(index) {
  const { data, error: readError } = await cloud.from(RECORDINGS_TABLE)
    .select("object_path")
    .eq("line_index", index)
    .maybeSingle();
  if (readError) throw readError;
  if (data?.object_path) {
    const { error: storageError } = await cloud.storage.from(RECORDINGS_BUCKET).remove([data.object_path]);
    if (storageError) throw storageError;
  }
  const { error } = await cloud.from(RECORDINGS_TABLE).delete().eq("line_index", index);
  if (error) throw error;
}

function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function setSelected(card) {
  document.querySelectorAll(".line-card").forEach(item => item.setAttribute("aria-selected", String(item === card)));
}

function lineText(words) {
  return words.map(word => word.before + word.letter + word.after).join(" ");
}

function tropeName(word) {
  if (word.note === "֜") return lineText([word]).includes("אַזְ") ? ["Azla", "azlah"] : ["Geresh", "geresh muqdam"];
  return tropeSearchNames[word.note] || ["Trope", ""];
}

function englishLine(words) {
  return words.map(word => tropeName(word)[0]).join(" · ");
}

function normalizeSearch(value) {
  return value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();
}

function editDistance(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const above = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = above;
    }
  }
  return row[b.length];
}

function matchScore(query, candidate) {
  if (candidate.includes(query)) return candidate.indexOf(query) / 1000;
  const candidateWords = candidate.split(" ");
  return query.split(" ").reduce((total, queryWord) => {
    const closest = Math.min(...candidateWords.map(word => editDistance(queryWord, word) / Math.max(queryWord.length, word.length)));
    return total + closest;
  }, 0) / query.split(" ").length;
}

function filterPlaybackList() {
  const query = normalizeSearch(lineSearchInput.value);
  clearLineSearch.hidden = !query;
  const options = [...recordingList.querySelectorAll(".recording-option")];
  if (!query) {
    options.forEach((option, index) => { option.hidden = false; option.style.order = index; });
    playbackStatus.textContent = "Select a recorded line to play it";
    return;
  }
  const matches = options
    .map(option => ({ option, score: matchScore(query, option.dataset.search) }))
    .sort((a, b) => a.score - b.score || Number(a.option.dataset.lineIndex) - Number(b.option.dataset.lineIndex));
  matches.forEach(({ option }, rank) => {
    option.hidden = rank >= 10;
    option.style.order = rank;
  });
  playbackStatus.textContent = `Closest matches for “${lineSearchInput.value.trim()}”`;
}

function setPlaybackAvailability(index, available) {
  const option = recordingList.querySelector(`[data-line-index="${index}"]`);
  if (!option) return;
  option.classList.toggle("has-recording", available);
  option.querySelector(".playback-state").textContent = available ? "Play" : "Not recorded";
}

function resetPlaybackSelection() {
  recordingList.querySelectorAll(".recording-option").forEach(option => {
    option.classList.remove("selected", "playing");
    option.setAttribute("aria-selected", "false");
    if (option.classList.contains("has-recording")) option.querySelector(".playback-state").textContent = "Play";
  });
}

async function playLineFromList(index) {
  const card = list.querySelector(`[data-index="${index}"]`);
  const audio = card?.querySelector(".audio-player");
  const option = recordingList.querySelector(`[data-line-index="${index}"]`);
  resetPlaybackSelection();
  option.classList.add("selected");
  option.setAttribute("aria-selected", "true");
  if (card) {
    setSelected(card);
    const playbackBrowser = document.querySelector(".playback-browser");
    const targetTop = window.scrollY + card.getBoundingClientRect().top - playbackBrowser.offsetHeight;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }
  if (!audio?.src) {
    playbackStatus.textContent = `Line ${lineLabel(index)} has not been recorded yet`;
    return;
  }
  if (activePlayback && activePlayback !== audio) {
    activePlayback.pause();
    activePlayback.currentTime = 0;
  }
  activePlayback = audio;
  audio.currentTime = 0;
  try {
    await audio.play();
    option.classList.add("playing");
    option.querySelector(".playback-state").textContent = "Playing";
    playbackStatus.textContent = `Playing line ${lineLabel(index)}`;
  } catch (error) {
    console.error(error);
    playbackStatus.textContent = `Line ${lineLabel(index)} could not be played`;
  }
}

function renderPlaybackList() {
  lines.forEach((words, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "recording-option";
    option.dataset.lineIndex = index;
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", "false");
    const english = englishLine(words);
    option.dataset.search = normalizeSearch(`${english} ${words.flatMap(word => tropeName(word)).join(" ")} line ${lineLabel(index)}`);
    option.innerHTML = `
      <span class="playback-number">${lineLabel(index)}</span>
      <span class="playback-text">
        <span class="playback-hebrew" dir="rtl" lang="he">${lineText(words)}</span>
        <span class="playback-english">${english}</span>
      </span>
      <span class="playback-state">Not recorded</span>`;
    option.addEventListener("click", () => playLineFromList(index));
    recordingList.append(option);
  });
}

function attachAudio(card, source) {
  const audio = card.querySelector(".audio-player");
  const oldUrl = audio.dataset.url;
  if (oldUrl?.startsWith("blob:")) URL.revokeObjectURL(oldUrl);
  const url = source instanceof Blob ? URL.createObjectURL(source) : source;
  audio.src = url;
  audio.dataset.url = url;
  audio.hidden = false;
  card.querySelector(".play-button").disabled = false;
  card.querySelector(".delete-button").disabled = false;
  const status = card.querySelector(".recording-status");
  status.textContent = "Recording saved online";
  status.className = "recording-status saved";
  setPlaybackAvailability(Number(card.dataset.index), true);
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
      try {
        status.textContent = "Saving recording online…";
        await storeRecording(index, blob);
        attachAudio(card, blob);
      } catch (error) {
        console.error(error);
        status.textContent = "Could not save recording online";
        status.className = "recording-status active";
      }
      button.classList.remove("recording");
      label.textContent = "Record again";
      activeRecording = null;
    };

    recorder.start(1000);
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
  const displayLineLabel = lineLabel(index);
  card.querySelector(".line-number").textContent = displayLineLabel;
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
    if (word.note === "֧" || word.note === "֛" || word.note === "֞" || word.note === "֜" || word.note === "֘" || word.note === "֠" || word.note === "֩" || word.note === "֡" || word.note === "֓" || word.note === "֪" || word.note === "֟") note.classList.add("stroke-note");
    if (word.note === "֦" || word.note === "֟") note.classList.add("wide-note");
    if (word.note === "֪") note.classList.add("vertical-flip-note");
    note.setAttribute("aria-hidden", "true");
    const noteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    noteSvg.setAttribute("viewBox", "-190 40 380 420");
    noteSvg.setAttribute("focusable", "false");
    const notePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (word.note === "֦") {
      notePath.setAttribute("d", tropePaths["֥"]);
      notePath.setAttribute("transform", "matrix(.52 0 0 -1 -85 0)");
      const secondHook = notePath.cloneNode();
      secondHook.setAttribute("transform", "matrix(.52 0 0 -1 85 0)");
      noteSvg.append(notePath, secondHook);
    } else {
      notePath.setAttribute("d", tropePaths[word.note]);
      notePath.setAttribute("transform", "scale(1 -1)");
      noteSvg.append(notePath);
    }
    if (word.note === "֛") {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("class", "note-dot");
      dot.setAttribute("cx", "-70");
      dot.setAttribute("cy", "-76");
      dot.setAttribute("r", "34");
      dot.setAttribute("transform", "scale(1 -1)");
      noteSvg.append(dot);
    }
    if (word.note === "֠") {
      const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      ring.setAttribute("cx", "92");
      ring.setAttribute("cy", "-116");
      ring.setAttribute("r", "70");
      ring.setAttribute("transform", "scale(1 -1)");
      noteSvg.append(ring);
    }
    if (word.note === "֩") {
      const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      ring.setAttribute("cx", "-92");
      ring.setAttribute("cy", "-116");
      ring.setAttribute("r", "70");
      ring.setAttribute("transform", "scale(1 -1)");
      noteSvg.append(ring);
    }
    if (word.note === "֟") {
      [[-102, -116], [102, -116]].forEach(([cx, cy]) => {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("cx", String(cx));
        ring.setAttribute("cy", String(cy));
        ring.setAttribute("r", "66");
        ring.setAttribute("transform", "scale(1 -1)");
        noteSvg.append(ring);
      });
    }
    note.append(noteSvg);
    if (word.note === "֡") {
      note.classList.add("font-match-note");
      const fontNote = document.createElement("span");
      fontNote.className = "font-match-note-source";
      fontNote.textContent = ` ${word.note}`;
      note.append(fontNote);
    }
    anchor.append(note);
    name.append(anchor, document.createTextNode(word.after));
    hebrewLine.append(name);
  });
  card.setAttribute("aria-label", `Line ${displayLineLabel}: ${lineText(words)}`);
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
  card.querySelector("audio").addEventListener("ended", () => {
    card.querySelector(".play-button").textContent = "Play";
    if (activePlayback === card.querySelector("audio")) {
      activePlayback = null;
      resetPlaybackSelection();
      playbackStatus.textContent = "Select a recorded line to play it";
    }
  });
  card.querySelector(".delete-button").addEventListener("click", async () => {
    try {
      await deleteRecording(index);
    } catch (error) {
      console.error(error);
      const status = card.querySelector(".recording-status");
      status.textContent = "Could not delete online recording";
      status.className = "recording-status active";
      return;
    }
    const audio = card.querySelector("audio");
    if (activePlayback === audio) {
      audio.pause();
      activePlayback = null;
      resetPlaybackSelection();
      playbackStatus.textContent = "Select a recorded line to play it";
    }
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
    setPlaybackAvailability(index, false);
  });
  list.append(card);
});

renderPlaybackList();
lineSearchInput.addEventListener("input", filterPlaybackList);
lineSearchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    lineSearchInput.value = "";
    filterPlaybackList();
  }
  if (event.key === "Enter") {
    const firstMatch = [...recordingList.querySelectorAll(".recording-option")].find(option => !option.hidden);
    if (firstMatch) { event.preventDefault(); firstMatch.click(); }
  }
});
clearLineSearch.addEventListener("click", () => {
  lineSearchInput.value = "";
  filterPlaybackList();
  lineSearchInput.focus();
});
loadRecordings().catch(error => {
  console.error(error);
  supportMessage.hidden = false;
  supportMessage.textContent = "Saved recordings could not be loaded. New recording is still available.";
});

if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
  supportMessage.hidden = false;
  supportMessage.textContent = "Recording requires a current browser with microphone access.";
  document.querySelectorAll(".record-button").forEach(button => { button.disabled = true; });
}
