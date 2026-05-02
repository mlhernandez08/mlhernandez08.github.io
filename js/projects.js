/* ================================================================
   js/projects.js
   ================================================================
   ADD YOUR PROJECTS HERE.

   HOW TO ADD A NEW PROJECT:
   1. Copy one of the existing objects below (from { to the closing },)
   2. Paste it at the top of the array (newest first is recommended)
   3. Fill in all the fields — see the comments for guidance
   4. Run the site locally or push to GitHub Pages

   TAGS must match the filter buttons in index.html.
   Current tags: "game-dev"  "tech-art"  "app-dev"  "tools"
   You can add new tag values — just also add a matching
   <button> in the .filter-row in index.html.

   IMAGES:
   - Put project screenshots in  assets/img/projects/
   - Reference them as           "assets/img/projects/your-image.jpg"
   - Use null to show the placeholder pattern instead of a real image
   ================================================================ */

const PROJECTS = [

     {
    thumb:         "assets/img/projects/simpleMask.gif",
    thumbAlt:      "HLSL Material",
    eyebrow:       "Unreal Engine 5 · Tech Art · HLSL",
    title:         "Unreal HLSL Materials",
    summary:       "This repository contains a collection of HLSL-based material experiments and tech art studies created in Unreal Engine 5. The goal is to explore real-time shader techniques, material authoring, and procedural effects.",
    tags:          ["tech-art", "tools"],
    modalEyebrow:  "Tech Art · 2026",
    modalMeta:     "nreal Engine 5 · Ongoing... · Technical Art",
    body:          ["This repository contains a collection of HLSL-based material experiments and tech art studies created in Unreal Engine 5.",
                  "The goal is to explore real-time shader techniques, material authoring, and procedural effects using Unreal’s Custom HLSL nodes."],
    techHeader:    "Latest Material Study",
    techPoints:    ["This study focuses on a simple animated masking effect driven by UV manipulation and time-based animation.",],
    images:        [{ src: "assets/img/projects/simpleMask.gif", alt: "Animated Mask Material", full: false },],
    links:         [{ label: "View on GitHub →",  href: "https://github.com/mlhernandez08/Unreal-HLSL-Materials", type: "github" }],
  },

  /* ── EXAMPLE PROJECT (keep this as a reference, then fill it in) ── */
  {
    /* Shown in the card thumbnail area.
       Use null if you don't have a screenshot yet. */
    thumb: "assets/img/projects/GhostLights.png",
    thumbAlt: "GhostLights",

    /* Short category label shown above the title (e.g. "Game Dev · UE5") */
    eyebrow: "Unreal Engine 5 · Game · Prototype",

    /* Project title */
    title: "GhostLights",

    /* One or two sentences shown on the card preview */
    summary: "Ghost Lights is a solo-developed gameplay prototype created to explore core systems for a 2D multiplayer action-platformer. Players use colored light-based abilities to interact with enemies and environments.",

    /* Tags for the filter — must match filter button values in index.html */
    tags: ["game", "prototype"],

    /* ── MODAL CONTENT ──────────────────────────────────────────────
       Everything below appears in the scrollable detail modal.
       ──────────────────────────────────────────────────────────── */

    /* Label shown above the modal title (e.g. "Game Dev · 2025") */
    modalEyebrow: "Game Dev · 2025",

    /* Small metadata line under the title */
    modalMeta: "Solo Project · Unreal Engine 5 · 6 months",

    /* Full writeup — each string in the array becomes a <p> tag.
       Suggestions:
       - What was the goal or challenge?
       - What systems did you build or contribute to?
       - What was technically interesting or novel?
       - What did you learn?
       - What was the outcome?                               */
    body: [
      "GhostLights is a multiplayer gameplay prototype where the players must work together using different colors of light in order to defeat enemies and solve puzzles.",
      "Developed in Unreal Engine 5 with the PaperZD plugin. Diversion was used for version control and online multiplayer was testing via Steam"
    ],

    /* Optional section headers inside the modal.
       Set to null to skip a section entirely.      */
    techHeader:   "Technical Highlights",
    techPoints: [
      "Designed and implemented the color-interaction mechanic: enemies respond differently to player light color.",
      "Players are able to mix their light colors in order to generate the required color to defeat enemies.",
      "Accessibility was taken into account by creating color options for different types of color blindness"
    ],

    /* Screenshots shown inside the modal.
       Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
       Set full: true to make the image span the full width.
       Use an empty array [] if you have no screenshots yet.   */
    images: [
       { src: "assets/img/projects/GhostLights.png", alt: "Gameplay screenshot", full: false },
      // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
      // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
    ],

    /* External links. Set to null to hide the links section entirely.
       type options: "github" | "demo" | "video" | "artstation" | "itch"  */
    links: [
      { label: "View on GitHub →",  href: "https://github.com/mlhernandez08/GhostLights", type: "github" },
      // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
      // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
    ],
  },

  /* ── PASTE ADDITIONAL PROJECTS BELOW THIS LINE ───────────────── */
  /*
  {
    thumb:         null,
    thumbAlt:      "",
    eyebrow:       "Tech Art · Unity",
    title:         "Second Project",
    summary:       "Short summary...",
    tags:          ["tech-art", "tools"],
    modalEyebrow:  "Tech Art · 2024",
    modalMeta:     "Team of 2 · Unity · 3 months",
    body:          ["First paragraph...", "Second paragraph..."],
    techHeader:    "Technical Highlights",
    techPoints:    ["Point one", "Point two"],
    images:        [],
    links:         [{ label: "GitHub →", href: "#", type: "github" }],
  },
  */
 {
    /* Shown in the card thumbnail area.
       Use null if you don't have a screenshot yet. */
    thumb: "assets/img/projects/BaseMaterial.png",
    thumbAlt: "UnrealMaterials",

    /* Short category label shown above the title (e.g. "Game Dev · UE5") */
    eyebrow: "Unreal Engine 5 · Tech Art",

    /* Project title */
    title: "Unreal Base Material",

    /* One or two sentences shown on the card preview */
    summary: "A resuable material designed to support a wide range of looks through material instances. It is intended to reflect real-world production workflows, where artists iterate through exposed parameters.",

    /* Tags for the filter — must match filter button values in index.html */
    tags: ["tech-art", "tools"],

    /* ── MODAL CONTENT ──────────────────────────────────────────────
       Everything below appears in the scrollable detail modal.
       ──────────────────────────────────────────────────────────── */

    /* Label shown above the modal title (e.g. "Game Dev · 2025") */
    modalEyebrow: "Game Dev · 2025",

    /* Small metadata line under the title */
    modalMeta: "Unreal Engine 5 · Ongoing... · Technical Art",

    /* Full writeup — each string in the array becomes a <p> tag.
       Suggestions:
       - What was the goal or challenge?
       - What systems did you build or contribute to?
       - What was technically interesting or novel?
       - What did you learn?
       - What was the outcome?                               */
    body: [
      "This project was an exploration of how materials work in Unreal Engine. This led to the development of a base/master material and material instances.",
      "The material exposes several inputs and controls to the artists such as base color, normal map, brightness, contrast, saturation. It also offers postional control through tiling, offset, and rotation",
      "The material is regularly updated as I learn more about how materials work in Unreal Engine."
    ],

    /* Optional section headers inside the modal.
       Set to null to skip a section entirely.      */
    techHeader:   "Technical Highlights",
    techPoints: [
      "Create a scalable, artist-friendly base material",
      "Reduce material duplication through parameterization",
      "Support rapid iteration through material instances"
    ],

    /* Screenshots shown inside the modal.
       Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
       Set full: true to make the image span the full width.
       Use an empty array [] if you have no screenshots yet.   */
    images: [
      { src: "assets/img/projects/BaseMaterialInstance.png", alt: "Material Instance", full: false },
      // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
      // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
    ],

    /* External links. Set to null to hide the links section entirely.
       type options: "github" | "demo" | "video" | "artstation" | "itch"  */
    links: [
      { label: "View on GitHub →",  href: "https://github.com/mlhernandez08/UEBaseMaterial", type: "github" },
      // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
      // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
    ],
  },

  {
    /* Shown in the card thumbnail area.
       Use null if you don't have a screenshot yet. */
    thumb: "assets/img/projects/nightmare.png",
    thumbAlt: "Nightmare Concept Art",

    /* Short category label shown above the title (e.g. "Game Dev · UE5") */
    eyebrow: "Game Jam · GameMaker 2",

    /* Project title */
    title: "Nightmare Breakout",

    /* One or two sentences shown on the card preview */
    summary: "Nightmare Breakout is a sidescrolling platforming game developed in Gamemaker Studio 2 for a school hosted Game Jam. The theme of the jam was Expect the Unexpected was implemented through a rogue lite game.",

    /* Tags for the filter — must match filter button values in index.html */
    tags: ["game", "jam"],

    /* ── MODAL CONTENT ──────────────────────────────────────────────
       Everything below appears in the scrollable detail modal.
       ──────────────────────────────────────────────────────────── */

    /* Label shown above the modal title (e.g. "Game Dev · 2025") */
    modalEyebrow: "Game Jam · 2021",

    /* Small metadata line under the title */
    modalMeta: "Solo Project · Gamemaker Studio 2 · 3 months",

    /* Full writeup — each string in the array becomes a <p> tag.
       Suggestions:
       - What was the goal or challenge?
       - What systems did you build or contribute to?
       - What was technically interesting or novel?
       - What did you learn?
       - What was the outcome?                               */
    body: [
      "Nightmare Breakout is a sidescrolling platforming game developed in Gamemaker Studio 2. The team implemented the theme of the gamejam by creating a somewhat rogue-lite game experience.",
      "As the player exits the starting area, they are transported into one of several different video game themes/environments. As the player progresses through the game each section is randomly chosen from a set of possibilities within their current theme.",
      "Should the player die, they restart at the start of the game and upon exiting the starting area, they will be transported into a possible different theme from their last play through. The game ends at a final boss in which the room will be a mix of all the available themes in the game."
    ],

    /* Optional section headers inside the modal.
       Set to null to skip a section entirely.      */
    techHeader:   "Technical Highlights",
    techPoints: [
      "The Game Jam theme, Expect the Unexpected was implemented with the randomized environments and rogue-lite features.",
      "Winning entry for Best Coding Practices."
    ],

    /* Screenshots shown inside the modal.
       Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
       Set full: true to make the image span the full width.
       Use an empty array [] if you have no screenshots yet.   */
    images: [
      // { src: "assets/img/projects/project-screenshot-1.jpg", alt: "Gameplay screenshot", full: false },
      // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
      // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
    ],

    /* External links. Set to null to hide the links section entirely.
       type options: "github" | "demo" | "video" | "artstation" | "itch"  */
    links: [
      { label: "View on GitHub →",  href: "https://github.com/mlhernandez08/CSUDH_GameJam_2021_NightmareBreakout", type: "github" },
      // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
      // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
    ],
  },

  // {
  //   /* Shown in the card thumbnail area.
  //      Use null if you don't have a screenshot yet. */
  //   thumb: "assets/img/projects/hangul.png",
  //   thumbAlt: "Screenshot of Project Name",

  //   /* Short category label shown above the title (e.g. "Game Dev · UE5") */
  //   eyebrow: "App Dev · Android Studio",

  //   /* Project title */
  //   title: "HangulGo!",

  //   /* One or two sentences shown on the card preview */
  //   summary: "A brief description of the project that fits in the card — what it is and what makes it interesting technically. Keep it to two sentences.",

  //   /* Tags for the filter — must match filter button values in index.html */
  //   tags: ["app", "prototype"],

  //   /* ── MODAL CONTENT ──────────────────────────────────────────────
  //      Everything below appears in the scrollable detail modal.
  //      ──────────────────────────────────────────────────────────── */

  //   /* Label shown above the modal title (e.g. "Game Dev · 2025") */
  //   modalEyebrow: "Game Dev · 2025",

  //   /* Small metadata line under the title */
  //   modalMeta: "Solo Project · Unreal Engine 5 · 6 months",

  //   /* Full writeup — each string in the array becomes a <p> tag.
  //      Suggestions:
  //      - What was the goal or challenge?
  //      - What systems did you build or contribute to?
  //      - What was technically interesting or novel?
  //      - What did you learn?
  //      - What was the outcome?                               */
  //   body: [
  //     "The full description of this project goes here. Explain the context: was this a solo project, a game jam, coursework, or a personal experiment? What problem were you trying to solve or what effect were you trying to achieve?",
  //     "Describe the technical approach. What systems did you build? What was the hardest part? If there were performance considerations, shader techniques, or procedural systems involved, this is the place to go into depth.",
  //     "Talk about the result and what you learned. If you shipped it, mention where. If it's a tool or pipeline improvement, mention the measurable impact (e.g. 'reduced bake time by 40%')."
  //   ],

  //   /* Optional section headers inside the modal.
  //      Set to null to skip a section entirely.      */
  //   techHeader:   "Technical Highlights",
  //   techPoints: [
  //     "Bullet point describing a specific system or technique you implemented",
  //     "Another technical achievement worth calling out",
  //     "Optional third point — remove if not needed"
  //   ],

  //   /* Screenshots shown inside the modal.
  //      Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
  //      Set full: true to make the image span the full width.
  //      Use an empty array [] if you have no screenshots yet.   */
  //   images: [
  //     // { src: "assets/img/projects/project-screenshot-1.jpg", alt: "Gameplay screenshot", full: false },
  //     // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
  //     // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
  //   ],

  //   /* External links. Set to null to hide the links section entirely.
  //      type options: "github" | "demo" | "video" | "artstation" | "itch"  */
  //   links: [
  //     { label: "View on GitHub →",  href: "https://github.com/yourusername/project-repo", type: "github" },
  //     // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
  //     // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
  //   ],
  // },

  // {
  //   /* Shown in the card thumbnail area.
  //      Use null if you don't have a screenshot yet. */
  //   thumb: "assets/img/projects/parse.png",
  //   thumbAlt: "Screenshot of Project Name",

  //   /* Short category label shown above the title (e.g. "Game Dev · UE5") */
  //   eyebrow: "App Dev · iOS",

  //   /* Project title */
  //   title: "Instagram Clone",

  //   /* One or two sentences shown on the card preview */
  //   summary: "A brief description of the project that fits in the card — what it is and what makes it interesting technically. Keep it to two sentences.",

  //   /* Tags for the filter — must match filter button values in index.html */
  //   tags: ["app", "prototype"],

  //   /* ── MODAL CONTENT ──────────────────────────────────────────────
  //      Everything below appears in the scrollable detail modal.
  //      ──────────────────────────────────────────────────────────── */

  //   /* Label shown above the modal title (e.g. "Game Dev · 2025") */
  //   modalEyebrow: "Game Dev · 2025",

  //   /* Small metadata line under the title */
  //   modalMeta: "Solo Project · Unreal Engine 5 · 6 months",

  //   /* Full writeup — each string in the array becomes a <p> tag.
  //      Suggestions:
  //      - What was the goal or challenge?
  //      - What systems did you build or contribute to?
  //      - What was technically interesting or novel?
  //      - What did you learn?
  //      - What was the outcome?                               */
  //   body: [
  //     "The full description of this project goes here. Explain the context: was this a solo project, a game jam, coursework, or a personal experiment? What problem were you trying to solve or what effect were you trying to achieve?",
  //     "Describe the technical approach. What systems did you build? What was the hardest part? If there were performance considerations, shader techniques, or procedural systems involved, this is the place to go into depth.",
  //     "Talk about the result and what you learned. If you shipped it, mention where. If it's a tool or pipeline improvement, mention the measurable impact (e.g. 'reduced bake time by 40%')."
  //   ],

  //   /* Optional section headers inside the modal.
  //      Set to null to skip a section entirely.      */
  //   techHeader:   "Technical Highlights",
  //   techPoints: [
  //     "Bullet point describing a specific system or technique you implemented",
  //     "Another technical achievement worth calling out",
  //     "Optional third point — remove if not needed"
  //   ],

  //   /* Screenshots shown inside the modal.
  //      Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
  //      Set full: true to make the image span the full width.
  //      Use an empty array [] if you have no screenshots yet.   */
  //   images: [
  //     // { src: "assets/img/projects/project-screenshot-1.jpg", alt: "Gameplay screenshot", full: false },
  //     // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
  //     // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
  //   ],

  //   /* External links. Set to null to hide the links section entirely.
  //      type options: "github" | "demo" | "video" | "artstation" | "itch"  */
  //   links: [
  //     { label: "View on GitHub →",  href: "https://github.com/yourusername/project-repo", type: "github" },
  //     // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
  //     // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
  //   ],
  // },

  // {
  //   /* Shown in the card thumbnail area.
  //      Use null if you don't have a screenshot yet. */
  //   thumb: "assets/img/projects/pong.png",
  //   thumbAlt: "Screenshot of Project Name",

  //   /* Short category label shown above the title (e.g. "Game Dev · UE5") */
  //   eyebrow: "Game Dev · Love2D · Lua",

  //   /* Project title */
  //   title: "Pong Clone",

  //   /* One or two sentences shown on the card preview */
  //   summary: "A brief description of the project that fits in the card — what it is and what makes it interesting technically. Keep it to two sentences.",

  //   /* Tags for the filter — must match filter button values in index.html */
  //   tags: ["game"],

  //   /* ── MODAL CONTENT ──────────────────────────────────────────────
  //      Everything below appears in the scrollable detail modal.
  //      ──────────────────────────────────────────────────────────── */

  //   /* Label shown above the modal title (e.g. "Game Dev · 2025") */
  //   modalEyebrow: "Game Dev · 2025",

  //   /* Small metadata line under the title */
  //   modalMeta: "Solo Project · Unreal Engine 5 · 6 months",

  //   /* Full writeup — each string in the array becomes a <p> tag.
  //      Suggestions:
  //      - What was the goal or challenge?
  //      - What systems did you build or contribute to?
  //      - What was technically interesting or novel?
  //      - What did you learn?
  //      - What was the outcome?                               */
  //   body: [
  //     "The full description of this project goes here. Explain the context: was this a solo project, a game jam, coursework, or a personal experiment? What problem were you trying to solve or what effect were you trying to achieve?",
  //     "Describe the technical approach. What systems did you build? What was the hardest part? If there were performance considerations, shader techniques, or procedural systems involved, this is the place to go into depth.",
  //     "Talk about the result and what you learned. If you shipped it, mention where. If it's a tool or pipeline improvement, mention the measurable impact (e.g. 'reduced bake time by 40%')."
  //   ],

  //   /* Optional section headers inside the modal.
  //      Set to null to skip a section entirely.      */
  //   techHeader:   "Technical Highlights",
  //   techPoints: [
  //     "Bullet point describing a specific system or technique you implemented",
  //     "Another technical achievement worth calling out",
  //     "Optional third point — remove if not needed"
  //   ],

  //   /* Screenshots shown inside the modal.
  //      Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
  //      Set full: true to make the image span the full width.
  //      Use an empty array [] if you have no screenshots yet.   */
  //   images: [
  //     // { src: "assets/img/projects/project-screenshot-1.jpg", alt: "Gameplay screenshot", full: false },
  //     // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
  //     // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
  //   ],

  //   /* External links. Set to null to hide the links section entirely.
  //      type options: "github" | "demo" | "video" | "artstation" | "itch"  */
  //   links: [
  //     { label: "View on GitHub →",  href: "https://github.com/yourusername/project-repo", type: "github" },
  //     // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
  //     // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
  //   ],
  // },

  // {
  //   /* Shown in the card thumbnail area.
  //      Use null if you don't have a screenshot yet. */
  //   thumb: "assets/img/projects/flix.png",
  //   thumbAlt: "Screenshot of Project Name",

  //   /* Short category label shown above the title (e.g. "Game Dev · UE5") */
  //   eyebrow: "App Dev · iOS",

  //   /* Project title */
  //   title: "Flix",

  //   /* One or two sentences shown on the card preview */
  //   summary: "A brief description of the project that fits in the card — what it is and what makes it interesting technically. Keep it to two sentences.",

  //   /* Tags for the filter — must match filter button values in index.html */
  //   tags: ["app", "prototype"],

  //   /* ── MODAL CONTENT ──────────────────────────────────────────────
  //      Everything below appears in the scrollable detail modal.
  //      ──────────────────────────────────────────────────────────── */

  //   /* Label shown above the modal title (e.g. "Game Dev · 2025") */
  //   modalEyebrow: "Game Dev · 2025",

  //   /* Small metadata line under the title */
  //   modalMeta: "Solo Project · Unreal Engine 5 · 6 months",

  //   /* Full writeup — each string in the array becomes a <p> tag.
  //      Suggestions:
  //      - What was the goal or challenge?
  //      - What systems did you build or contribute to?
  //      - What was technically interesting or novel?
  //      - What did you learn?
  //      - What was the outcome?                               */
  //   body: [
  //     "The full description of this project goes here. Explain the context: was this a solo project, a game jam, coursework, or a personal experiment? What problem were you trying to solve or what effect were you trying to achieve?",
  //     "Describe the technical approach. What systems did you build? What was the hardest part? If there were performance considerations, shader techniques, or procedural systems involved, this is the place to go into depth.",
  //     "Talk about the result and what you learned. If you shipped it, mention where. If it's a tool or pipeline improvement, mention the measurable impact (e.g. 'reduced bake time by 40%')."
  //   ],

  //   /* Optional section headers inside the modal.
  //      Set to null to skip a section entirely.      */
  //   techHeader:   "Technical Highlights",
  //   techPoints: [
  //     "Bullet point describing a specific system or technique you implemented",
  //     "Another technical achievement worth calling out",
  //     "Optional third point — remove if not needed"
  //   ],

  //   /* Screenshots shown inside the modal.
  //      Each entry: { src: "path/to/img.jpg", alt: "Description", full: false }
  //      Set full: true to make the image span the full width.
  //      Use an empty array [] if you have no screenshots yet.   */
  //   images: [
  //     // { src: "assets/img/projects/project-screenshot-1.jpg", alt: "Gameplay screenshot", full: false },
  //     // { src: "assets/img/projects/project-screenshot-2.jpg", alt: "Shader detail",        full: false },
  //     // { src: "assets/img/projects/project-wide.jpg",         alt: "Full level overview",  full: true  },
  //   ],

  //   /* External links. Set to null to hide the links section entirely.
  //      type options: "github" | "demo" | "video" | "artstation" | "itch"  */
  //   links: [
  //     { label: "View on GitHub →",  href: "https://github.com/yourusername/project-repo", type: "github" },
  //     // { label: "Live Demo →",     href: "https://yourgame.itch.io/project",              type: "itch"   },
  //     // { label: "Video Breakdown →",href: "https://youtu.be/yourVideoId",                 type: "video"  },
  //   ],
  // },

];
