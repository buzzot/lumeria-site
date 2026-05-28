// LUMERIA — catalog page interactions
(function () {
  const grid = document.getElementById("product-grid");
  const filters = document.querySelectorAll(".filter");
  let products = [];
  let activeFilter = "all";

  function fmtPrice(n) {
    return "$" + Number(n).toLocaleString("en-US");
  }

  function renderImage(p) {
    if (p.image) {
      return `<img src="/images/${p.image}" alt="${p.name}" loading="lazy" />`;
    }
    return window.LumeriaShapes.get(p.shape || "pendant");
  }

  function render() {
    const list = activeFilter === "all"
      ? products
      : products.filter(p => p.type === activeFilter);

    grid.innerHTML = list.map(p => `
      <li>
        <a class="card" href="/product/${p.slug}">
          <div class="card-image">${renderImage(p)}</div>
          <div class="card-meta">
            <span class="card-name">${p.name}</span>
            <span class="card-type">${p.type}</span>
          </div>
          <p class="card-designer">${p.designer}</p>
          <p class="card-desc">${p.description}</p>
        </a>
      </li>
    `).join("");
  }

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  fetch("/data/products.json")
    .then(r => r.json())
    .then(data => {
      products = data;
      render();
    })
    .catch(() => {
      grid.innerHTML = `<li style="grid-column:1/-1;color:#8a8a8a;">Catalogue could not be loaded.</li>`;
    });
})();
