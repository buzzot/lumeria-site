# Lumeria

A minimal designer-lighting catalogue, served by Node.js + Express.

- 30 products driven by a single data file: `data/products.js`
- Catalog grid + dedicated product detail page per item
- Static assets in `public/` — no build step
- Hairline, white/black aesthetic with Inter + Cormorant Garamond
- Generated SVG placeholder illustrations until real product photos are added

---

## Run locally

```bash
npm install
npm start
# open http://localhost:3000
```

---

## Replace the placeholder catalogue with your real products

The site auto-discovers images from per-product folders, so adding a real product
is two steps.

**1. Create the folder and drop images in.**

```
public/images/<folder-name>/      ← drop one or more .png/.jpg/.webp files here
```

The folder name is arbitrary (e.g. `05`, `06`, `prism`). Files are shown in
filename order; rename them `01.jpg`, `02.jpg`… if you want a specific order.

**2. Add one entry to `data/products.js`.**

```js
{
  slug: "prism",        // URL: /product/prism
  folder: "08",         // matches the folder name in public/images/
  name: "Prism",
  designer: "Atelier Mori",
  type: "Pendant",      // must match a filter button: Pendant | Floor lamp | Table lamp | Wall sconce | Chandelier
  price: 690,
  description: "…",
  specs: { dimensions: "…", materials: "…", bulb: "…", cable: "…" }
}
```

If you omit `folder`, the server looks in `public/images/<slug>/` instead.
If the folder has no images, the catalogue falls back to a generated SVG —
set `shape` to one of `"pendant" | "table" | "floor" | "wall" | "chandelier" | "sphere"`.

Restart the server after editing `products.js`. Adding photos to an existing
folder is picked up immediately on next page load.

---

## Push to GitHub

Repo: `git@github.com:buzzot/lumeria-site.git`

```bash
cd "/Users/marsel/Documents/Claude/Projects/WEB SITES/lumeria"
git init
git add .
git commit -m "Initial commit — Lumeria catalogue"
git branch -M main
git remote add origin git@github.com:buzzot/lumeria-site.git
git push -u origin main
```

If the SSH push asks for a passphrase or fails with "Permission denied (publickey)",
either add your SSH key to GitHub (Settings → SSH and GPG keys) or use HTTPS instead:

```bash
git remote set-url origin https://github.com/buzzot/lumeria-site.git
git push -u origin main
```

---

## Deploy to Hostinger (Node.js hosting)

Hostinger's Node.js hosting supports a "Deploy from GitHub" flow inside hPanel. Steps:

1. **Buy/activate a Node.js plan** on Hostinger and pick your domain.
2. In **hPanel → Advanced → Node.js**, click **Create application**.
   - Node.js version: **20.x** (matches `.nvmrc`)
   - Application mode: **Production**
   - Application root: `lumeria` (or wherever you place the repo)
   - Application URL: your domain or subdomain
   - Application startup file: `server.js`
3. **Connect GitHub** in hPanel → **Website → Git**. Repository URL: `https://github.com/buzzot/lumeria-site.git` (use HTTPS form here — Hostinger's Git integration expects HTTPS). Branch: `main`. Deploy path: the same folder as the application root.
4. Pull the repo (hPanel offers a "Manual Deploy" button) so the files land on the server.
5. Back in **Node.js → Manage**, hit **Run npm install** (or use the in-panel terminal):
   ```bash
   npm install --production
   ```
6. Click **Restart App**.

Hostinger handles the reverse proxy. The site is now served at your domain.

### Auto-redeploy on push (optional)

Hostinger supports a webhook URL under **Git → Auto-deploy**:

1. Copy the webhook URL Hostinger shows you.
2. In GitHub → repo → **Settings → Webhooks → Add webhook**, paste the URL, content type `application/json`, push events only.
3. From now on, every `git push` to `main` triggers `git pull` on the server. You will still want to **Restart App** in hPanel after deploys that change `package.json` or `server.js`.

### If you need a custom port

Hostinger sets `process.env.PORT` automatically — `server.js` already respects it.

---

## File layout

```
lumeria/
├── data/
│   └── products.js          # ← edit this to swap in your real catalogue
├── public/
│   ├── index.html           # catalogue page
│   ├── product.html         # product detail template
│   ├── 404.html
│   ├── css/styles.css
│   ├── js/
│   │   ├── catalog.js
│   │   ├── product.js
│   │   └── svg-shapes.js
│   └── images/              # ← drop product photos here (optional)
├── server.js                # Express server
├── package.json
├── .gitignore
├── .nvmrc
└── README.md
```

---

## Notes on the placeholder catalogue

Because the original PDF could not be parsed in this session, the 30 listed pieces are
plausible designer-lighting examples written in the voice of a minimalist catalogue.
Names, designers, prices, and specs are illustrative. Replace them by editing
`data/products.js`. Nothing else needs to change.
