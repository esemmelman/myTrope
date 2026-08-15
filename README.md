# My Trope

Current version: **1.1.1**

A small browser-based Hebrew trope practice app. Each of the three extracted patterns can be selected and recorded independently.

Recordings stay private in the browser's IndexedDB storage and are not uploaded anywhere.

## Run locally

Serve the directory over HTTP (microphone access requires a secure context or localhost), for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.
