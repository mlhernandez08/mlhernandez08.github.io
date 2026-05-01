/* ================================================================
   js/devlog.js
   ================================================================
   ADD YOUR DEV LOG ENTRIES HERE.

   HOW TO ADD A NEW ENTRY:
   1. Copy one of the objects below (from { to the closing },)
   2. PASTE IT AT THE TOP of the DEVLOG array (newest entry first)
   3. Fill in all fields
   4. Save and push to GitHub Pages

   IMAGES:
   - Put devlog images in  assets/img/devlog/
   - Reference them as     "assets/img/devlog/your-image.jpg"
   ================================================================ */

const DEVLOG = [

  /* ── EXAMPLE ENTRY (keep this as a reference) ────────────────── */
  {
    /* Date shown on the card — format however you prefer */
    date: "2026 · May · 01",    // e.g. "2025 · Apr · 12"

    /* Entry number — increment manually for each new post */
    entryNum: "Entry #001",

    /* Title shown on the card and in the modal */
    title: "Website Updated",

    /* 1–2 sentence teaser shown on the card preview */
    preview: "Website updated using Claude.",

    /* ── MODAL CONTENT ──────────────────────────────────────────────
       Each string in body[] becomes a <p>.
       Write as many paragraphs as you need.
       Suggestions for topics:
       - A specific technical problem you solved this week
       - A shader or rendering technique you explored
       - A pipeline improvement you shipped
       - Progress update on an active project
       - A resource or paper you found useful and your takeaways
       - Postmortem / lessons learned from a finished project
       ──────────────────────────────────────────────────────────── */
    body: [
      "I've been wanting to update my portfolio site for a while now and figured it would be a good place to experiment with using AI as part of my workflow. Instead of just using another template, I approached this as a small project where I could explore how AI tools fit into my process",
      "Since I don’t have much experience with web development, working with HTML, CSS, and JavaScript took some time to get used to. It took some time to understand the template that Claude generated and how the different parts of the site was connected.",
      "Using free AI tools was helpful in some ways and frustrating in others. Token limitations were always there so I experimented with locally hosted tools using Ollama and Roo Code.",
      "While I am generally happy with the results of what was made, I do see myself changing a lot once I learn more about web development"
    ],

    /* Optional section header inside the modal — set null to skip */
    sectionHeader: "Key Takeaways",    // e.g. "What I Learned" / null

    /* Bullet points under the section header — set null to skip */
    sectionPoints: [
      "AI can be a useful assistant for learning unfamiliar tech, but it's not a replacement for understanding the code.",
      "Small non game projects are nice for expanding skills.",
      "I should probably start using this dev blog part..."
    ],

    /* Screenshots — same pattern as projects.js
       { src: "path", alt: "description", full: false }
       Empty array [] if no images yet.                   */
    images: [
      // { src: "assets/img/devlog/entry001-before.jpg", alt: "Before state",  full: false },
      // { src: "assets/img/devlog/entry001-after.jpg",  alt: "After result",  full: false },
    ],

    /* Optional related links */
    links: [
      // { label: "Related Project →",      href: "#projects",             type: "internal" },
      // { label: "Reference Paper →",      href: "https://example.com",   type: "external" },
    ],
  },

  /* ── PASTE ADDITIONAL ENTRIES BELOW (newest at the TOP) ─────── */
  /*
  {
    date:          "2025 · Mar · 28",
    entryNum:      "Entry #002",
    title:         "Second Entry Title",
    preview:       "Short preview text...",
    body:          ["Body paragraph one...", "Body paragraph two..."],
    sectionHeader: null,
    sectionPoints: null,
    images:        [],
    links:         [],
  },
  */

];
