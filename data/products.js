// LUMERIA — Product catalog data
// To swap in your real catalog: edit this file. The site auto-rebuilds from it.
// Each product needs a unique `slug` (used in URLs). The `image` field can be:
//   - a relative path under /public/images/ (e.g. "aria.jpg"), or
//   - left blank to use a generated SVG placeholder of the given `shape`.
// Available shapes: "pendant", "table", "floor", "wall", "chandelier", "sphere".

const products = [
  {
    slug: "aria",
    name: "Aria",
    designer: "Studio Vinci",
    type: "Pendant",
    price: 1290,
    image: "",
    shape: "pendant",
    description:
      "A slender brass stem cradles a hand-blown opal globe, casting a warm diffused light.",
    specs: {
      dimensions: "Ø 22 cm × H 38 cm",
      materials: "Brushed brass, opal glass",
      bulb: "1 × E27 LED, max 12 W",
      cable: "2 m black braided"
    }
  },
  {
    slug: "noctis",
    name: "Noctis",
    designer: "Marco Linde",
    type: "Floor lamp",
    price: 2150,
    image: "",
    shape: "floor",
    description:
      "Architectural floor lamp with a cantilevered marble counterweight and linear LED arm.",
    specs: {
      dimensions: "W 90 cm × H 165 cm",
      materials: "Carrara marble, powder-coated steel",
      bulb: "Integrated LED, 18 W, 2700 K",
      cable: "3 m, foot dimmer"
    }
  },
  {
    slug: "halo",
    name: "Halo",
    designer: "Atelier Mori",
    type: "Pendant",
    price: 1680,
    image: "",
    shape: "chandelier",
    description:
      "A perfect ring of brushed aluminium, suspended on three hairline cables. Downward bias.",
    specs: {
      dimensions: "Ø 80 cm × H 4 cm",
      materials: "Anodised aluminium",
      bulb: "Integrated LED, 32 W, 3000 K",
      cable: "1.5 m, ceiling rose"
    }
  },
  {
    slug: "lumen",
    name: "Lumen",
    designer: "Studio Vinci",
    type: "Table lamp",
    price: 740,
    image: "",
    shape: "table",
    description:
      "A small ceramic dome on a turned oak base. Quiet on a bedside or a desk.",
    specs: {
      dimensions: "Ø 18 cm × H 32 cm",
      materials: "Matte ceramic, oak",
      bulb: "1 × E14, max 40 W",
      cable: "1.8 m linen-wrapped"
    }
  },
  {
    slug: "monolith",
    name: "Monolith",
    designer: "Henrik Vos",
    type: "Floor lamp",
    price: 3290,
    image: "",
    shape: "floor",
    description:
      "Single slab of cast aluminium, slotted to release a soft vertical strip of light.",
    specs: {
      dimensions: "W 28 cm × D 12 cm × H 180 cm",
      materials: "Sand-cast aluminium",
      bulb: "Integrated LED, 24 W, 2700 K",
      cable: "3 m, in-line switch"
    }
  },
  {
    slug: "petal",
    name: "Petal",
    designer: "Atelier Mori",
    type: "Wall sconce",
    price: 560,
    image: "",
    shape: "wall",
    description:
      "A folded sheet of unlacquered brass, hand-formed and patinating over time.",
    specs: {
      dimensions: "W 22 cm × H 14 cm × D 8 cm",
      materials: "Unlacquered brass",
      bulb: "1 × G9, max 25 W",
      cable: "Hardwired"
    }
  },
  {
    slug: "orbit",
    name: "Orbit",
    designer: "Marco Linde",
    type: "Chandelier",
    price: 4850,
    image: "",
    shape: "chandelier",
    description:
      "Twelve opal spheres held in a fine bronze armature. Reads as a quiet constellation.",
    specs: {
      dimensions: "Ø 110 cm × H 60 cm",
      materials: "Patinated bronze, opal glass",
      bulb: "12 × G9 LED, 3 W each",
      cable: "1.5 m, adjustable"
    }
  },
  {
    slug: "fold",
    name: "Fold",
    designer: "Henrik Vos",
    type: "Table lamp",
    price: 920,
    image: "",
    shape: "table",
    description:
      "A single sheet of steel, folded once. The light hides in the crease.",
    specs: {
      dimensions: "W 26 cm × D 18 cm × H 28 cm",
      materials: "Powder-coated steel, matte black",
      bulb: "Integrated LED, 8 W, 2700 K",
      cable: "1.8 m, touch dimmer"
    }
  },
  {
    slug: "column",
    name: "Column",
    designer: "Studio Vinci",
    type: "Floor lamp",
    price: 1850,
    image: "",
    shape: "floor",
    description:
      "A continuous travertine column. Light leaks from a single hand-cut aperture.",
    specs: {
      dimensions: "Ø 18 cm × H 150 cm",
      materials: "Travertine, brass detail",
      bulb: "Integrated LED, 12 W, 2200 K",
      cable: "3 m, dimmable"
    }
  },
  {
    slug: "drift",
    name: "Drift",
    designer: "Atelier Mori",
    type: "Pendant",
    price: 1480,
    image: "",
    shape: "pendant",
    description:
      "A pleated washi paper drum on a fine steel stem. Folds catch the light like water.",
    specs: {
      dimensions: "Ø 40 cm × H 32 cm",
      materials: "Washi paper, steel",
      bulb: "1 × E27 LED, max 15 W",
      cable: "2 m black"
    }
  },
  {
    slug: "spire",
    name: "Spire",
    designer: "Henrik Vos",
    type: "Wall sconce",
    price: 690,
    image: "",
    shape: "wall",
    description:
      "Tapered brass cone projecting from the wall. A precise wash, up or down.",
    specs: {
      dimensions: "W 6 cm × H 22 cm × D 14 cm",
      materials: "Solid brass, brushed",
      bulb: "1 × GU10, max 7 W LED",
      cable: "Hardwired"
    }
  },
  {
    slug: "vessel",
    name: "Vessel",
    designer: "Marco Linde",
    type: "Table lamp",
    price: 1120,
    image: "",
    shape: "sphere",
    description:
      "A hand-thrown stoneware base supports a pleated linen drum. Studio quiet.",
    specs: {
      dimensions: "Ø 28 cm × H 46 cm",
      materials: "Stoneware, natural linen",
      bulb: "1 × E27, max 60 W",
      cable: "2 m beige fabric"
    }
  },
  {
    slug: "thread",
    name: "Thread",
    designer: "Studio Vinci",
    type: "Pendant",
    price: 2240,
    image: "",
    shape: "pendant",
    description:
      "Twelve LED filaments suspended at varying heights. Reads as falling rain at dusk.",
    specs: {
      dimensions: "W 60 cm × H 90 cm (adjustable)",
      materials: "Blackened steel canopy",
      bulb: "12 × integrated LED, 1.5 W each",
      cable: "Individually adjustable"
    }
  },
  {
    slug: "still",
    name: "Still",
    designer: "Atelier Mori",
    type: "Table lamp",
    price: 880,
    image: "",
    shape: "sphere",
    description:
      "A frosted glass sphere resting on a brushed steel ring. Touch-activated.",
    specs: {
      dimensions: "Ø 20 cm × H 22 cm",
      materials: "Frosted glass, brushed steel",
      bulb: "Integrated LED, 6 W, dimmable",
      cable: "1.8 m, USB-C"
    }
  },
  {
    slug: "plane",
    name: "Plane",
    designer: "Henrik Vos",
    type: "Wall sconce",
    price: 780,
    image: "",
    shape: "wall",
    description:
      "A flush square of brushed aluminium. The wall itself becomes the source.",
    specs: {
      dimensions: "W 24 cm × H 24 cm × D 3 cm",
      materials: "Brushed aluminium",
      bulb: "Integrated LED, 10 W, 3000 K",
      cable: "Hardwired"
    }
  },
  {
    slug: "stem",
    name: "Stem",
    designer: "Marco Linde",
    type: "Floor lamp",
    price: 1640,
    image: "",
    shape: "floor",
    description:
      "An impossibly thin brass stem with an articulated head. Reads as a single line.",
    specs: {
      dimensions: "W 30 cm × H 145 cm",
      materials: "Solid brass, marble base",
      bulb: "1 × E14 LED, max 6 W",
      cable: "3 m, foot switch"
    }
  },
  {
    slug: "rise",
    name: "Rise",
    designer: "Studio Vinci",
    type: "Pendant",
    price: 1990,
    image: "",
    shape: "pendant",
    description:
      "A vertical cluster of three opal cylinders, set off-axis. Designed for stairwells.",
    specs: {
      dimensions: "Ø 25 cm × H 110 cm",
      materials: "Opal glass, blackened brass",
      bulb: "3 × G9 LED, 4 W each",
      cable: "2 m, adjustable"
    }
  },
  {
    slug: "cairn",
    name: "Cairn",
    designer: "Henrik Vos",
    type: "Table lamp",
    price: 1340,
    image: "",
    shape: "table",
    description:
      "Three stacked travertine discs. The light source hides between them.",
    specs: {
      dimensions: "Ø 22 cm × H 30 cm",
      materials: "Travertine, brass spine",
      bulb: "Integrated LED, 5 W, 2200 K",
      cable: "1.8 m, in-line dimmer"
    }
  },
  {
    slug: "veil",
    name: "Veil",
    designer: "Atelier Mori",
    type: "Pendant",
    price: 2480,
    image: "",
    shape: "chandelier",
    description:
      "A pleated bronze mesh draped on a fine ring. Casts a freckled shadow.",
    specs: {
      dimensions: "Ø 70 cm × H 45 cm",
      materials: "Woven bronze mesh",
      bulb: "1 × E27 LED, max 18 W",
      cable: "1.5 m black"
    }
  },
  {
    slug: "pebble",
    name: "Pebble",
    designer: "Marco Linde",
    type: "Table lamp",
    price: 620,
    image: "",
    shape: "sphere",
    description:
      "A rounded basalt form, hollowed to release a soft horizontal glow.",
    specs: {
      dimensions: "W 24 cm × D 16 cm × H 10 cm",
      materials: "Honed basalt",
      bulb: "Integrated LED, 4 W, rechargeable",
      cable: "USB-C charging"
    }
  },
  {
    slug: "perch",
    name: "Perch",
    designer: "Studio Vinci",
    type: "Wall sconce",
    price: 1050,
    image: "",
    shape: "wall",
    description:
      "An articulated brass arm with a pleated shade. Swings to where the page is.",
    specs: {
      dimensions: "Reach 60 cm, shade Ø 18 cm",
      materials: "Polished brass, linen shade",
      bulb: "1 × E14, max 25 W",
      cable: "Hardwired or plug-in"
    }
  },
  {
    slug: "echo",
    name: "Echo",
    designer: "Henrik Vos",
    type: "Pendant",
    price: 1380,
    image: "",
    shape: "pendant",
    description:
      "Two concentric aluminium cones, one inside the other. Light bounces twice.",
    specs: {
      dimensions: "Ø 32 cm × H 28 cm",
      materials: "Spun aluminium, white interior",
      bulb: "1 × E27 LED, max 14 W",
      cable: "2 m white"
    }
  },
  {
    slug: "quill",
    name: "Quill",
    designer: "Atelier Mori",
    type: "Floor lamp",
    price: 2780,
    image: "",
    shape: "floor",
    description:
      "A single arc of carbon-black steel, weighted by a hand-cut granite base.",
    specs: {
      dimensions: "Reach 130 cm, H 195 cm",
      materials: "Steel, granite",
      bulb: "Integrated LED, 16 W, dimmable",
      cable: "3 m, foot switch"
    }
  },
  {
    slug: "lattice",
    name: "Lattice",
    designer: "Marco Linde",
    type: "Chandelier",
    price: 5980,
    image: "",
    shape: "chandelier",
    description:
      "Architectural lattice in patinated brass, suspended on four steel cables.",
    specs: {
      dimensions: "W 140 cm × D 60 cm × H 30 cm",
      materials: "Patinated brass, steel",
      bulb: "8 × E14 LED, 4 W each",
      cable: "Adjustable, ceiling rose"
    }
  },
  {
    slug: "ember",
    name: "Ember",
    designer: "Studio Vinci",
    type: "Table lamp",
    price: 980,
    image: "",
    shape: "sphere",
    description:
      "A hand-blown amber glass sphere on a turned walnut base. Warm at any hour.",
    specs: {
      dimensions: "Ø 22 cm × H 26 cm",
      materials: "Amber glass, walnut",
      bulb: "1 × E27, max 40 W",
      cable: "1.8 m brown fabric"
    }
  },
  {
    slug: "linea",
    name: "Linea",
    designer: "Henrik Vos",
    type: "Pendant",
    price: 1720,
    image: "",
    shape: "pendant",
    description:
      "A horizontal line of light: 120 cm of integrated LED in an anodised channel.",
    specs: {
      dimensions: "L 120 cm × H 3 cm",
      materials: "Anodised aluminium",
      bulb: "Integrated LED, 28 W, 3000 K",
      cable: "Two-point suspension"
    }
  },
  {
    slug: "bowl",
    name: "Bowl",
    designer: "Atelier Mori",
    type: "Pendant",
    price: 1240,
    image: "",
    shape: "pendant",
    description:
      "An upturned plaster bowl that washes the ceiling. Architectural, ambient.",
    specs: {
      dimensions: "Ø 48 cm × H 16 cm",
      materials: "White plaster, brass fitting",
      bulb: "1 × E27 LED, max 20 W",
      cable: "1.5 m white"
    }
  },
  {
    slug: "twig",
    name: "Twig",
    designer: "Marco Linde",
    type: "Wall sconce",
    price: 480,
    image: "",
    shape: "wall",
    description:
      "A single bent brass rod with a tiny opal bulb at its tip. Reading-light minimal.",
    specs: {
      dimensions: "Reach 35 cm, H 18 cm",
      materials: "Solid brass",
      bulb: "1 × G9 LED, 3 W",
      cable: "Hardwired"
    }
  },
  {
    slug: "tide",
    name: "Tide",
    designer: "Studio Vinci",
    type: "Floor lamp",
    price: 1980,
    image: "",
    shape: "floor",
    description:
      "A wide, low arc of bleached oak that ends in a hand-blown glass droplet.",
    specs: {
      dimensions: "Reach 110 cm, H 140 cm",
      materials: "Bleached oak, clear glass",
      bulb: "1 × E27 LED, max 12 W",
      cable: "3 m, in-line switch"
    }
  },
  {
    slug: "void",
    name: "Void",
    designer: "Henrik Vos",
    type: "Pendant",
    price: 2640,
    image: "",
    shape: "pendant",
    description:
      "A black ceramic ring with no visible source. Pure indirect light.",
    specs: {
      dimensions: "Ø 60 cm × H 8 cm",
      materials: "Matte black ceramic",
      bulb: "Integrated LED, 22 W, 2700 K",
      cable: "1.5 m black"
    }
  }
];

module.exports = products;
