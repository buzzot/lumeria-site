// LUMERIA — generated SVG placeholder illustrations.
// Pure black-line drawings used when a product has no `image`.
// Each shape returns SVG markup as a string. All use viewBox 0 0 200 250.

window.LumeriaShapes = (function () {
  const STROKE = "#0a0a0a";
  const W = 1.2;

  function frame(inner) {
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" fill="none" stroke="${STROKE}" stroke-width="${W}" stroke-linecap="round" stroke-linejoin="round">` +
      inner +
      `</svg>`
    );
  }

  const shapes = {
    pendant: () => frame(`
      <line x1="100" y1="0" x2="100" y2="90"/>
      <path d="M60 90 Q100 80 140 90 L130 170 Q100 190 70 170 Z"/>
      <line x1="70" y1="170" x2="130" y2="170"/>
      <line x1="84" y1="186" x2="116" y2="186" opacity="0.35"/>
    `),

    table: () => frame(`
      <path d="M60 60 Q100 50 140 60 L130 140 L70 140 Z"/>
      <line x1="70" y1="140" x2="130" y2="140"/>
      <line x1="100" y1="140" x2="100" y2="200"/>
      <ellipse cx="100" cy="208" rx="40" ry="6"/>
    `),

    floor: () => frame(`
      <path d="M70 28 Q100 18 130 28 L122 90 L78 90 Z"/>
      <line x1="78" y1="90" x2="122" y2="90"/>
      <line x1="100" y1="90" x2="100" y2="220"/>
      <ellipse cx="100" cy="226" rx="36" ry="6"/>
      <circle cx="100" cy="226" r="14" opacity="0.3"/>
    `),

    wall: () => frame(`
      <line x1="20" y1="20" x2="20" y2="230"/>
      <line x1="20" y1="125" x2="120" y2="125"/>
      <circle cx="140" cy="125" r="22"/>
      <line x1="120" y1="125" x2="118" y2="125"/>
      <path d="M150 110 L170 100" opacity="0.3"/>
      <path d="M150 140 L170 150" opacity="0.3"/>
    `),

    chandelier: () => frame(`
      <line x1="100" y1="0" x2="100" y2="50"/>
      <ellipse cx="100" cy="120" rx="80" ry="14"/>
      <line x1="60" y1="118" x2="60" y2="150"/>
      <line x1="100" y1="120" x2="100" y2="160"/>
      <line x1="140" y1="118" x2="140" y2="150"/>
      <line x1="80" y1="119" x2="80" y2="140"/>
      <line x1="120" y1="119" x2="120" y2="140"/>
      <circle cx="60" cy="160" r="9"/>
      <circle cx="100" cy="170" r="9"/>
      <circle cx="140" cy="160" r="9"/>
      <circle cx="80" cy="148" r="6"/>
      <circle cx="120" cy="148" r="6"/>
    `),

    sphere: () => frame(`
      <circle cx="100" cy="120" r="60"/>
      <path d="M50 130 Q100 160 150 130" opacity="0.3"/>
      <line x1="80" y1="180" x2="120" y2="180"/>
      <line x1="80" y1="180" x2="80" y2="210"/>
      <line x1="120" y1="180" x2="120" y2="210"/>
      <ellipse cx="100" cy="215" rx="32" ry="5"/>
    `)
  };

  return {
    get(shape) {
      const fn = shapes[shape] || shapes.pendant;
      return fn();
    }
  };
})();
