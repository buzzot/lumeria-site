// LUMERIA — minimal Express server
// Serves a static catalog and renders product detail pages from data/products.js.
// Compatible with Hostinger Node.js hosting (set start command: `node server.js`).

const path = require("path");
const fs = require("fs");
const express = require("express");

const products = require("./data/products");

const app = express();
const PORT = process.env.PORT || 3000;

// Static assets (CSS, JS, images, favicon)
app.use(express.static(path.join(__dirname, "public"), {
  extensions: ["html"],
  maxAge: process.env.NODE_ENV === "production" ? "7d" : 0
}));

// Expose product data to client JS
app.get("/data/products.json", (req, res) => {
  res.json(products);
});

// Product detail route — renders /public/product.html and lets client-side JS load the slug
app.get("/product/:slug", (req, res, next) => {
  const product = products.find(p => p.slug === req.params.slug);
  if (!product) return next();

  const tmplPath = path.join(__dirname, "public", "product.html");
  fs.readFile(tmplPath, "utf8", (err, html) => {
    if (err) return next(err);

    const filled = html
      .replace(/{{NAME}}/g, escapeHtml(product.name))
      .replace(/{{DESIGNER}}/g, escapeHtml(product.designer))
      .replace(/{{TYPE}}/g, escapeHtml(product.type))
      .replace(/{{DESCRIPTION}}/g, escapeHtml(product.description))
      .replace(/{{SLUG}}/g, escapeHtml(product.slug));

    res.set("Content-Type", "text/html; charset=utf-8");
    res.send(filled);
  });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"), err => {
    if (err) res.type("text/plain").send("404 — Not found");
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Lumeria running at http://localhost:${PORT}`);
});

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
