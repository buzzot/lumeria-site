// LUMERIA — product detail page enhancements
(function () {
  const slug = document.querySelector('meta[name="lumeria-slug"]').content;

  function fmtPrice(n) {
    return "$" + Number(n).toLocaleString("en-US");
  }

  fetch("/data/products.json")
    .then(r => r.json())
    .then(products => {
      const p = products.find(x => x.slug === slug);
      if (!p) return;

      // Image
      const imageEl = document.getElementById("product-image");
      if (p.image) {
        imageEl.innerHTML = `<img src="/images/${p.image}" alt="${p.name}" />`;
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

      // Title
      document.title = `${p.name} — Lumeria`;
    });
})();
