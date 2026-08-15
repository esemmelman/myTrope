# My Trope

Current version: **1.9.0**

A small browser-based Hebrew trope practice app. Each extracted pattern can be selected and recorded independently.

Recordings stay private in the browser's IndexedDB storage and are not uploaded anywhere. The recorder requests unprocessed 48 kHz input and uses the best supported browser codec at 256 kbps.

## Run locally

Serve the directory over HTTP (microphone access requires a secure context or localhost), for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.
