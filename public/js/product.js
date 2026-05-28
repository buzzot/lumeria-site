// LUMERIA — product detail page enhancements
(function () {
  const slug = document.querySelector('meta[name="lumeria-slug"]').content;

  function fmtPrice(n) { return "$" + Number(n).toLocaleString("en-US"); }
  function esc(s) { return String(s).replace(/"/g, "&quot;"); }

  fetch("/data/products.json")
    .then(r => r.json())
    .then(products => {
      const p = products.find(x => x.slug === slug);
      if (!p) return;

      // Image / gallery
      const imageEl = document.getElementById("product-image");
      const imgs = Array.isArray(p.images) ? p.images : [];

      if (imgs.length > 0) {
        imageEl.classList.add("product-image--photo");
        imageEl.innerHTML = `
          <div class="gallery-main">
            <img id="gallery-main-img" src="${imgs[0]}" alt="${esc(p.name)}" />
          </div>
          ${imgs.length > 1 ? `
            <div class="gallery-thumbs">
              ${imgs.map((src, i) => `
                <button class="thumb${i === 0 ? " is-active" : ""}" data-src="${src}" aria-label="View image ${i + 1}">
                  <img src="${src}" alt="" loading="lazy" />
                </button>
              `).join("")}
            </div>` : ""}
        `;

        // Thumbnail swap
        if (imgs.length > 1) {
          const mainImg = document.getElementById("gallery-main-img");
          imageEl.querySelectorAll(".thumb").forEach(btn => {
            btn.addEventListener("click", () => {
              mainImg.src = btn.dataset.src;
              imageEl.querySelectorAll(".thumb").forEach(b => b.classList.remove("is-active"));
              btn.classList.add("is-active");
            });
          });
        }
      } else {
        imageEl.innerHTML = window.LumeriaShapes.get(p.shape || "pendant");
      }

      // Specs
      const specs = p.specs || {};
      const specsEl = document.getElementById("product-specs");
      const labels = {
        dimensions: "Dimensions",
        materials: "Materials",
        bulb: "Bulb",
        cable: "Cable"
      };
      specsEl.innerHTML = Object.keys(labels)
        .filter(k => specs[k])
        .map(k => `<dt>${labels[k]}</dt><dd>${specs[k]}</dd>`)
        .join("");

      // Price
      if (typeof p.price === "number") {
        document.getElementById("product-price").textContent = fmtPrice(p.price);
      }

      document.title = `${p.name} — Lumeria`;
    });
})();
