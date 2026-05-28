// LUMERIA — Product catalog data
//
// Each product needs a unique `slug` (used in the URL).
// Images are auto-discovered at request time from:
//   /public/images/<folder>/      (if `folder` is set)
//   /public/images/<slug>/        (otherwise)
//
// Drop one or more images into that folder and they'll appear in the
// catalogue card and product detail gallery. If no images are present,
// a generated SVG placeholder is used (set `shape` to one of:
// "pendant" | "table" | "floor" | "wall" | "chandelier" | "sphere").

const products = [
  // ─────────────────────────────────────────────────────────────────────
  // Real PDF-sourced products
  // ─────────────────────────────────────────────────────────────────────

  {
    slug: "atlas",
    folder: "05",
    name: "Atlas",
    designer: "Studio Vinci",
    type: "Pendant",
    price: 3480,
    description:
      "A long horizontal pendant bar in patinated bronze, carrying two articulated cone-shade heads. Designed for kitchen islands and long tables.",
    specs: {
      dimensions: "L 180 cm × H adjustable to 90 cm",
      materials: "Patinated bronze, brushed aluminium shades",
      bulb: "2 × integrated LED, 14 W each, 2700 K",
      cable: "Two-point suspension, dimmable"
    }
  },

  {
    slug: "meridian",
    folder: "06",
    name: "Meridian",
    designer: "Marco Linde",
    type: "Pendant",
    price: 2980,
    description:
      "An architectural track suspension in matte black, carrying five precisely angled spots. Reads as a single drawn line across the room.",
    specs: {
      dimensions: "L 200 cm × H adjustable to 120 cm",
      materials: "Powder-coated steel, anodised aluminium spots",
      bulb: "5 × integrated LED, 6 W each, 3000 K",
      cable: "Three-point suspension"
    }
  },

  {
    slug: "prism",
    folder: "08",
    name: "Prism",
    designer: "Atelier Mori",
    type: "Pendant",
    price: 690,
    description:
      "A small stepped-glass cone on a slim metal cap. Available in brushed brass with a rigid stem or in matte black on a fine textile cable.",
    specs: {
      dimensions: "Ø 16 cm × H 18 cm (shade)",
      materials: "Optical glass, brushed brass or matte black",
      bulb: "1 × G9 LED, max 5 W",
      cable: "1.5 m black, or 30 cm brass stem"
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  // Placeholder products (SVG illustrations until real photos are added)
  // To add a real photo: create /public/images/<slug>/ and drop image(s) in.
  // ─────────────────────────────────────────────────────────────────────

  { slug: "aria", name: "Aria", designer: "Studio Vinci", type: "Pendant", price: 1290, shape: "pendant",
    description: "A slender brass stem cradles a hand-blown opal globe, casting a warm diffused light.",
    specs: { dimensions: "Ø 22 cm × H 38 cm", materials: "Brushed brass, opal glass", bulb: "1 × E27 LED, max 12 W", cable: "2 m black braided" } },

  { slug: "noctis", name: "Noctis", designer: "Marco Linde", type: "Floor lamp", price: 2150, shape: "floor",
    description: "Architectural floor lamp with a cantilevered marble counterweight and linear LED arm.",
    specs: { dimensions: "W 90 cm × H 165 cm", materials: "Carrara marble, powder-coated steel", bulb: "Integrated LED, 18 W, 2700 K", cable: "3 m, foot dimmer" } },

  { slug: "halo", name: "Halo", designer: "Atelier Mori", type: "Pendant", price: 1680, shape: "chandelier",
    description: "A perfect ring of brushed aluminium, suspended on three hairline cables. Downward bias.",
    specs: { dimensions: "Ø 80 cm × H 4 cm", materials: "Anodised aluminium", bulb: "Integrated LED, 32 W, 3000 K", cable: "1.5 m, ceiling rose" } },

  { slug: "lumen", name: "Lumen", designer: "Studio Vinci", type: "Table lamp", price: 740, shape: "table",
    description: "A small ceramic dome on a turned oak base. Quiet on a bedside or a desk.",
    specs: { dimensions: "Ø 18 cm × H 32 cm", materials: "Matte ceramic, oak", bulb: "1 × E14, max 40 W", cable: "1.8 m linen-wrapped" } },

  { slug: "monolith", name: "Monolith", designer: "Henrik Vos", type: "Floor lamp", price: 3290, shape: "floor",
    description: "Single slab of cast aluminium, slotted to release a soft vertical strip of light.",
    specs: { dimensions: "W 28 cm × D 12 cm × H 180 cm", materials: "Sand-cast aluminium", bulb: "Integrated LED, 24 W, 2700 K", cable: "3 m, in-line switch" } },

  { slug: "petal", name: "Petal", designer: "Atelier Mori", type: "Wall sconce", price: 560, shape: "wall",
    description: "A folded sheet of unlacquered brass, hand-formed and patinating over time.",
    specs: { dimensions: "W 22 cm × H 14 cm × D 8 cm", materials: "Unlacquered brass", bulb: "1 × G9, max 25 W", cable: "Hardwired" } },

  { slug: "orbit", name: "Orbit", designer: "Marco Linde", type: "Chandelier", price: 4850, shape: "chandelier",
    description: "Twelve opal spheres held in a fine bronze armature. Reads as a quiet constellation.",
    specs: { dimensions: "Ø 110 cm × H 60 cm", materials: "Patinated bronze, opal glass", bulb: "12 × G9 LED, 3 W each", cable: "1.5 m, adjustable" } },

  { slug: "fold", name: "Fold", designer: "Henrik Vos", type: "Table lamp", price: 920, shape: "table",
    description: "A single sheet of steel, folded once. The light hides in the crease.",
    specs: { dimensions: "W 26 cm × D 18 cm × H 28 cm", materials: "Powder-coated steel, matte black", bulb: "Integrated LED, 8 W, 2700 K", cable: "1.8 m, touch dimmer" } },

  { slug: "column", name: "Column", designer: "Studio Vinci", type: "Floor lamp", price: 1850, shape: "floor",
    description: "A continuous travertine column. Light leaks from a single hand-cut aperture.",
    specs: { dimensions: "Ø 18 cm × H 150 cm", materials: "Travertine, brass detail", bulb: "Integrated LED, 12 W, 2200 K", cable: "3 m, dimmable" } },

  { slug: "drift", name: "Drift", designer: "Atelier Mori", type: "Pendant", price: 1480, shape: "pendant",
    description: "A pleated washi paper drum on a fine steel stem. Folds catch the light like water.",
    specs: { dimensions: "Ø 40 cm × H 32 cm", materials: "Washi paper, steel", bulb: "1 × E27 LED, max 15 W", cable: "2 m black" } },

  { slug: "spire", name: "Spire", designer: "Henrik Vos", type: "Wall sconce", price: 690, shape: "wall",
    description: "Tapered brass cone projecting from the wall. A precise wash, up or down.",
    specs: { dimensions: "W 6 cm × H 22 cm × D 14 cm", materials: "Solid brass, brushed", bulb: "1 × GU10, max 7 W LED", cable: "Hardwired" } },

  { slug: "vessel", name: "Vessel", designer: "Marco Linde", type: "Table lamp", price: 1120, shape: "sphere",
    description: "A hand-thrown stoneware base supports a pleated linen drum. Studio quiet.",
    specs: { dimensions: "Ø 28 cm × H 46 cm", materials: "Stoneware, natural linen", bulb: "1 × E27, max 60 W", cable: "2 m beige fabric" } },

  { slug: "thread", name: "Thread", designer: "Studio Vinci", type: "Pendant", price: 2240, shape: "pendant",
    description: "Twelve LED filaments suspended at varying heights. Reads as falling rain at dusk.",
    specs: { dimensions: "W 60 cm × H 90 cm (adjustable)", materials: "Blackened steel canopy", bulb: "12 × integrated LED, 1.5 W each", cable: "Individually adjustable" } },

  { slug: "still", name: "Still", designer: "Atelier Mori", type: "Table lamp", price: 880, shape: "sphere",
    description: "A frosted glass sphere resting on a brushed steel ring. Touch-activated.",
    specs: { dimensions: "Ø 20 cm × H 22 cm", materials: "Frosted glass, brushed steel", bulb: "Integrated LED, 6 W, dimmable", cable: "1.8 m, USB-C" } },

  { slug: "plane", name: "Plane", designer: "Henrik Vos", type: "Wall sconce", price: 780, shape: "wall",
    description: "A flush square of brushed aluminium. The wall itself becomes the source.",
    specs: { dimensions: "W 24 cm × H 24 cm × D 3 cm", materials: "Brushed aluminium", bulb: "Integrated LED, 10 W, 3000 K", cable: "Hardwired" } },

  { slug: "stem", name: "Stem", designer: "Marco Linde", type: "Floor lamp", price: 1640, shape: "floor",
    description: "An impossibly thin brass stem with an articulated head. Reads as a single line.",
    specs: { dimensions: "W 30 cm × H 145 cm", materials: "Solid brass, marble base", bulb: "1 × E14 LED, max 6 W", cable: "3 m, foot switch" } },

  { slug: "rise", name: "Rise", designer: "Studio Vinci", type: "Pendant", price: 1990, shape: "pendant",
    description: "A vertical cluster of three opal cylinders, set off-axis. Designed for stairwells.",
    specs: { dimensions: "Ø 25 cm × H 110 cm", materials: "Opal glass, blackened brass", bulb: "3 × G9 LED, 4 W each", cable: "2 m, adjustable" } },

  { slug: "cairn", name: "Cairn", designer: "Henrik Vos", type: "Table lamp", price: 1340, shape: "table",
    description: "Three stacked travertine discs. The light source hides between them.",
    specs: { dimensions: "Ø 22 cm × H 30 cm", materials: "Travertine, brass spine", bulb: "Integrated LED, 5 W, 2200 K", cable: "1.8 m, in-line dimmer" } },

  { slug: "veil", name: "Veil", designer: "Atelier Mori", type: "Pendant", price: 2480, shape: "chandelier",
    description: "A pleated bronze mesh draped on a fine ring. Casts a freckled shadow.",
    specs: { dimensions: "Ø 70 cm × H 45 cm", materials: "Woven bronze mesh", bulb: "1 × E27 LED, max 18 W", cable: "1.5 m black" } },

  { slug: "pebble", name: "Pebble", designer: "Marco Linde", type: "Table lamp", price: 620, shape: "sphere",
    description: "A rounded basalt form, hollowed to release a soft horizontal glow.",
    specs: { dimensions: "W 24 cm × D 16 cm × H 10 cm", materials: "Honed basalt", bulb: "Integrated LED, 4 W, rechargeable", cable: "USB-C charging" } },

  { slug: "perch", name: "Perch", designer: "Studio Vinci", type: "Wall sconce", price: 1050, shape: "wall",
    description: "An articulated brass arm with a pleated shade. Swings to where the page is.",
    specs: { dimensions: "Reach 60 cm, shade Ø 18 cm", materials: "Polished brass, linen shade", bulb: "1 × E14, max 25 W", cable: "Hardwired or plug-in" } },

  { slug: "echo", name: "Echo", designer: "Henrik Vos", type: "Pendant", price: 1380, shape: "pendant",
    description: "Two concentric aluminium cones, one inside the other. Light bounces twice.",
    specs: { dimensions: "Ø 32 cm × H 28 cm", materials: "Spun aluminium, white interior", bulb: "1 × E27 LED, max 14 W", cable: "2 m white" } },

  { slug: "quill", name: "Quill", designer: "Atelier Mori", type: "Floor lamp", price: 2780, shape: "floor",
    description: "A single arc of carbon-black steel, weighted by a hand-cut granite base.",
    specs: { dimensions: "Reach 130 cm, H 195 cm", materials: "Steel, granite", bulb: "Integrated LED, 16 W, dimmable", cable: "3 m, foot switch" } },

  { slug: "lattice", name: "Lattice", designer: "Marco Linde", type: "Chandelier", price: 5980, shape: "chandelier",
    description: "Architectural lattice in patinated brass, suspended on four steel cables.",
    specs: { dimensions: "W 140 cm × D 60 cm × H 30 cm", materials: "Patinated brass, steel", bulb: "8 × E14 LED, 4 W each", cable: "Adjustable, ceiling rose" } },

  { slug: "ember", name: "Ember", designer: "Studio Vinci", type: "Table lamp", price: 980, shape: "sphere",
    description: "A hand-blown amber glass sphere on a turned walnut base. Warm at any hour.",
    specs: { dimensions: "Ø 22 cm × H 26 cm", materials: "Amber glass, walnut", bulb: "1 × E27, max 40 W", cable: "1.8 m brown fabric" } },

  { slug: "linea", name: "Linea", designer: "Henrik Vos", type: "Pendant", price: 1720, shape: "pendant",
    description: "A horizontal line of light: 120 cm of integrated LED in an anodised channel.",
    specs: { dimensions: "L 120 cm × H 3 cm", materials: "Anodised aluminium", bulb: "Integrated LED, 28 W, 3000 K", cable: "Two-point suspension" } },

  { slug: "bowl", name: "Bowl", designer: "Atelier Mori", type: "Pendant", price: 1240, shape: "pendant",
    description: "An upturned plaster bowl that washes the ceiling. Architectural, ambient.",
    specs: { dimensions: "Ø 48 cm × H 16 cm", materials: "White plaster, brass fitting", bulb: "1 × E27 LED, max 20 W", cable: "1.5 m white" } },

  { slug: "twig", name: "Twig", designer: "Marco Linde", type: "Wall sconce", price: 480, shape: "wall",
    description: "A single bent brass rod with a tiny opal bulb at its tip. Reading-light minimal.",
    specs: { dimensions: "Reach 35 cm, H 18 cm", materials: "Solid brass", bulb: "1 × G9 LED, 3 W", cable: "Hardwired" } },

  { slug: "tide", name: "Tide", designer: "Studio Vinci", type: "Floor lamp", price: 1980, shape: "floor",
    description: "A wide, low arc of bleached oak that ends in a hand-blown glass droplet.",
    specs: { dimensions: "Reach 110 cm, H 140 cm", materials: "Bleached oak, clear glass", bulb: "1 × E27 LED, max 12 W", cable: "3 m, in-line switch" } },

  { slug: "void", name: "Void", designer: "Henrik Vos", type: "Pendant", price: 2640, shape: "pendant",
    description: "A black ceramic ring with no visible source. Pure indirect light.",
    specs: { dimensions: "Ø 60 cm × H 8 cm", materials: "Matte black ceramic", bulb: "Integrated LED, 22 W, 2700 K", cable: "1.5 m black" } },

  // 31–50

  { slug: "shell", name: "Shell", designer: "Atelier Mori", type: "Wall sconce", price: 540, shape: "wall",
    description: "A small bone-china half-shell that throws an upward arc of light.",
    specs: { dimensions: "W 18 cm × H 10 cm × D 6 cm", materials: "Bone china, brass back-plate", bulb: "1 × G9 LED, 3 W", cable: "Hardwired" } },

  { slug: "swing", name: "Swing", designer: "Studio Vinci", type: "Wall sconce", price: 1180, shape: "wall",
    description: "A long brass arm hinged at the wall. Counterweighted with a turned walnut ball.",
    specs: { dimensions: "Reach 75 cm, H 20 cm", materials: "Solid brass, walnut", bulb: "1 × E14, max 25 W", cable: "Plug-in, in-line switch" } },

  { slug: "crest", name: "Crest", designer: "Marco Linde", type: "Pendant", price: 2360, shape: "pendant",
    description: "Two opal half-discs floating face-to-face. Light pools between them.",
    specs: { dimensions: "Ø 50 cm × H 18 cm", materials: "Opal glass, brushed steel", bulb: "Integrated LED, 18 W, 2700 K", cable: "1.5 m white" } },

  { slug: "needle", name: "Needle", designer: "Henrik Vos", type: "Floor lamp", price: 1480, shape: "floor",
    description: "A graphite-finished steel pole, 2 m tall, with a single downward-facing spot.",
    specs: { dimensions: "Ø 4 cm × H 200 cm", materials: "Graphite-finished steel", bulb: "Integrated LED, 8 W, 3000 K", cable: "3 m, foot switch" } },

  { slug: "lune", name: "Lune", designer: "Studio Vinci", type: "Table lamp", price: 690, shape: "sphere",
    description: "A pale alabaster crescent on a slim brass base. Soft, lunar light.",
    specs: { dimensions: "W 22 cm × H 16 cm", materials: "Alabaster, polished brass", bulb: "Integrated LED, 4 W, 2700 K", cable: "1.8 m, USB-C" } },

  { slug: "pier", name: "Pier", designer: "Atelier Mori", type: "Floor lamp", price: 2640, shape: "floor",
    description: "A monolithic concrete base supporting a tall slender stem and adjustable head.",
    specs: { dimensions: "W 22 cm × H 175 cm", materials: "Polished concrete, blackened steel", bulb: "1 × E27 LED, max 14 W", cable: "3 m, dimmable" } },

  { slug: "knot", name: "Knot", designer: "Marco Linde", type: "Pendant", price: 1820, shape: "pendant",
    description: "A single length of woven cord, knotted around an opal globe. Hand-tied.",
    specs: { dimensions: "Ø 28 cm × H 38 cm", materials: "Cotton cord, opal glass", bulb: "1 × E27 LED, max 12 W", cable: "1.5 m black" } },

  { slug: "ridge", name: "Ridge", designer: "Henrik Vos", type: "Wall sconce", price: 820, shape: "wall",
    description: "A folded blackened-steel strip mounted vertically. Sheds light up and down.",
    specs: { dimensions: "W 6 cm × H 36 cm × D 8 cm", materials: "Blackened steel", bulb: "Integrated LED, 8 W, 2700 K", cable: "Hardwired" } },

  { slug: "halt", name: "Halt", designer: "Studio Vinci", type: "Table lamp", price: 1240, shape: "table",
    description: "A tilted aluminium disc on a turned-brass shaft. The shade rotates 180°.",
    specs: { dimensions: "Ø 24 cm × H 38 cm", materials: "Brushed aluminium, brass", bulb: "1 × G9 LED, max 5 W", cable: "1.8 m, foot dimmer" } },

  { slug: "ash", name: "Ash", designer: "Atelier Mori", type: "Pendant", price: 1380, shape: "pendant",
    description: "A turned ash-wood dome on a fine cord. Warm grain reads as a freckle on the ceiling.",
    specs: { dimensions: "Ø 36 cm × H 22 cm", materials: "Solid ash, brass interior", bulb: "1 × E27 LED, max 14 W", cable: "2 m natural" } },

  { slug: "loop", name: "Loop", designer: "Marco Linde", type: "Pendant", price: 2980, shape: "chandelier",
    description: "An oval ring of brushed brass, tilted on its axis. Dramatic over a long table.",
    specs: { dimensions: "W 110 cm × D 50 cm × H 8 cm", materials: "Brushed brass", bulb: "Integrated LED, 30 W, 3000 K", cable: "Two-point suspension" } },

  { slug: "sentry", name: "Sentry", designer: "Henrik Vos", type: "Floor lamp", price: 1980, shape: "floor",
    description: "A short, wide travertine plinth supporting a single tall vertical strip of LED.",
    specs: { dimensions: "W 28 cm × H 165 cm", materials: "Travertine, anodised aluminium", bulb: "Integrated LED, 16 W, 2700 K", cable: "3 m, in-line switch" } },

  { slug: "ledge", name: "Ledge", designer: "Studio Vinci", type: "Wall sconce", price: 720, shape: "wall",
    description: "A brushed-brass shelf with a downward LED strip. Lights a small object as well as the room.",
    specs: { dimensions: "W 30 cm × D 12 cm × H 6 cm", materials: "Brushed brass", bulb: "Integrated LED, 6 W, 2700 K", cable: "Hardwired" } },

  { slug: "dune", name: "Dune", designer: "Atelier Mori", type: "Table lamp", price: 980, shape: "sphere",
    description: "A hand-thrown ochre stoneware base under a tapered linen shade.",
    specs: { dimensions: "Ø 24 cm × H 44 cm", materials: "Ochre stoneware, linen", bulb: "1 × E27, max 40 W", cable: "1.8 m beige" } },

  { slug: "facet", name: "Facet", designer: "Marco Linde", type: "Pendant", price: 1640, shape: "pendant",
    description: "A faceted cast-glass prism on a hairline cable. Caustic patterns on the wall.",
    specs: { dimensions: "Ø 18 cm × H 24 cm", materials: "Cast crystal glass, steel", bulb: "1 × G9 LED, 5 W", cable: "1.5 m black" } },

  { slug: "haven", name: "Haven", designer: "Henrik Vos", type: "Chandelier", price: 4380, shape: "chandelier",
    description: "A cluster of nine slim opal cylinders, each at a different length. Reads as a constellation.",
    specs: { dimensions: "Ø 80 cm × H 60 cm", materials: "Blackened brass, opal glass", bulb: "9 × G9 LED, 3 W each", cable: "Adjustable, ceiling rose" } },

  { slug: "sable", name: "Sable", designer: "Studio Vinci", type: "Floor lamp", price: 2240, shape: "floor",
    description: "A matte black tripod base with a tall fluted black shade. Reading-room calm.",
    specs: { dimensions: "Ø 40 cm × H 170 cm", materials: "Powder-coated steel, fluted shade", bulb: "1 × E27 LED, max 15 W", cable: "3 m, in-line switch" } },

  { slug: "mira", name: "Mira", designer: "Atelier Mori", type: "Table lamp", price: 880, shape: "table",
    description: "A polished aluminium tube on a marble plinth. Tilts 360° with magnetic friction.",
    specs: { dimensions: "Ø 8 cm × H 40 cm", materials: "Polished aluminium, marble", bulb: "Integrated LED, 6 W, 2700 K", cable: "1.8 m, touch dimmer" } },

  { slug: "veld", name: "Veld", designer: "Marco Linde", type: "Pendant", price: 1480, shape: "pendant",
    description: "A wide bell of brushed aluminium, deep enough to fully shade the source.",
    specs: { dimensions: "Ø 44 cm × H 20 cm", materials: "Brushed aluminium, white interior", bulb: "1 × E27 LED, max 18 W", cable: "1.5 m white" } },

  { slug: "crane", name: "Crane", designer: "Henrik Vos", type: "Floor lamp", price: 2480, shape: "floor",
    description: "A long counter-weighted arm that arcs over a chair or sofa. Reach forever.",
    specs: { dimensions: "Reach 150 cm, H 185 cm", materials: "Blackened brass, marble base", bulb: "1 × E27 LED, max 12 W", cable: "3 m, in-line dimmer" } }
];

module.exports = products;
