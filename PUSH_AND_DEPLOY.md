# Quick deploy — copy/paste commands

## 1. Push to GitHub (run in your Mac Terminal)

```bash
cd "/Users/marsel/Documents/Claude/Projects/WEB SITES/lumeria"

# Initialize git, commit everything, push to your repo
git init
git add .
git commit -m "Initial commit — Lumeria catalogue"
git branch -M main
git remote add origin git@github.com:buzzot/lumeria-site.git
git push -u origin main
```

### If the SSH push fails

Switch to HTTPS (you'll be prompted for your GitHub username + a personal access token):

```bash
git remote set-url origin https://github.com/buzzot/lumeria-site.git
git push -u origin main
```

> A Personal Access Token can be created at github.com → Settings → Developer settings → Personal access tokens → Tokens (classic). Give it `repo` scope.

---

## 2. Deploy on Hostinger

### a. Create the Node.js app

In hPanel → **Advanced → Node.js → Create application**:

| Field                  | Value                                   |
|------------------------|-----------------------------------------|
| Node.js version        | 20.x                                    |
| Application mode       | Production                              |
| Application root       | `lumeria-site` (or whatever you prefer) |
| Application URL        | your domain or a subdomain              |
| Application startup file | `server.js`                           |

### b. Pull the code from GitHub

In hPanel → **Website → Git**:

| Field                  | Value                                                       |
|------------------------|-------------------------------------------------------------|
| Repository URL         | `https://github.com/buzzot/lumeria-site.git`                |
| Branch                 | `main`                                                       |
| Install path           | the same folder as the Node app's "Application root"         |

Click **Create** / **Deploy** to pull the files in.

### c. Install dependencies + start

Back in **Node.js → Manage** for the app:

1. Click **Run npm install** (or use the in-panel terminal):
   ```bash
   npm install --production
   ```
2. Click **Restart App**.

Your site is now live at the URL you set in step (a).

### d. (Optional) Auto-deploy on push

In hPanel → **Git → Auto-deploy**: copy the webhook URL it shows you.
In GitHub → repo **Settings → Webhooks → Add webhook**: paste it, content type `application/json`, "Just the push event."

After every `git push` to `main`, Hostinger will `git pull`. If you change `package.json`
or `server.js`, click **Restart App** afterwards.

---

## 3. Iterate locally

```bash
cd "/Users/marsel/Documents/Claude/Projects/WEB SITES/lumeria"
npm install
npm start
# open http://localhost:3000
```

Edit `data/products.js` to swap in your real catalogue. Commit + push to redeploy.
