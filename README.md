# My Trope

Current version: **1.15.2**

A small browser-based Hebrew trope practice app. Each extracted pattern can be selected and recorded independently.

New recordings are stored online in the `bnaimitzvah` Supabase project using the app-specific `mytrope_recordings_v1` table and `mytrope-recordings-v1` bucket. Existing browser IndexedDB recordings are not migrated, read, changed, or removed. The recorder requests unprocessed 48 kHz mono input and uses the best supported browser codec at up to 320 kbps. Recording metadata is loaded in one database request, and every replacement uses a new immutable Storage path to prevent stale browser or CDN playback.

The Quick Play listbox shows all lines in numerical order. Selecting a line with an existing cloud recording plays it from the beginning.
Its English search accepts trope names, common alternate spellings, or multiple names and ranks the ten closest matching lines. Pressing Enter plays the closest result.

## Run locally

Serve the directory over HTTP (microphone access requires a secure context or localhost), for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.
