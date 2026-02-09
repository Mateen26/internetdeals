# Deploy to Hostinger

## 1. Build the site (on your computer)

```bash
npm run build
```

Or use the shortcut:

```bash
npm run deploy
```

This creates (or updates) the **`dist`** folder with the production files.

## 2. Upload to Hostinger

**Option A: Zip then unzip (easiest)**

1. On your PC, open the **`dist`** folder.
2. Select **all files and folders inside** `dist` (i.e. `index.html` and the `assets` folder). Right‑click → **Compress** / **Send to → Compressed folder** to create a zip. The zip should contain `index.html` and `assets` at the top level (no `dist` folder inside the zip).
3. Log in to **Hostinger** → **File Manager** → go to **`public_html`**.
4. **Upload** the zip file.
5. In File Manager, right‑click the zip → **Extract** / **Unzip** (into `public_html`).
6. Delete the zip from `public_html` if you want to keep it tidy.

**Option B: Upload files directly**

1. Log in to **Hostinger** (hPanel) → **File Manager**.
2. Go to **`public_html`**.
3. Upload **everything inside** your local `dist` folder: drag and drop `index.html` and the `assets` folder into `public_html`.

**Result:** `public_html` should look like:

```
public_html/
  index.html
  assets/
    index-xxxxx.css
    index-xxxxx.js
```

## 3. If the site is in a subfolder

If your site is at `yourdomain.com/something/` instead of `yourdomain.com/`, tell me and we can set the build to use a base path so links and assets work correctly.

## Notes

- Do **not** upload `node_modules` or the `dist` folder itself—only the **contents** of `dist`.
- After changing the site, run `npm run build` (or `npm run deploy`) again, then re-upload the contents of `dist`.
