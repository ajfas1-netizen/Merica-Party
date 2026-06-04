/* =====================================================================
   THE SOURCE OF TRUTH
   ---------------------------------------------------------------------
   This is the only file you edit to change the party.
   The app (index.html) reads everything from here.
   Change the words here, save, refresh the page. Never touch index.html
   just to change content.
   ===================================================================== */

window.PARTY = {

  endpointUrl: "https://script.google.com/macros/s/AKfycbxLUWap--cnvKzwfuvRe6Nf2hp7VsmPRJA08292zsaT5WbSsB-4lwtiePbNd295AlCUIA/exec",

  ribbon: "EST. 1776  \u2605  250 YEARS DEEP  \u2605  BYOB(eer)  \u2605  POOL IS OPEN  \u2605  ",

  /* Countdown target. Format: YEAR-MONTH-DAY T HOUR:MIN:SEC (24hr, your local time).
     This is the only place the date lives. */
  countdownTo: "2026-07-05T12:00:00",
  countdownLabel: "FIREWORKS IN",
  countdownDone: "IT'S GO TIME. GET TO THE POOL.",

  /* THE HERO.
     Alternate sub lines you can paste into hero.sub:
       - "Bring a swimsuit, a side dish, and zero dignity."
       - "Cannonballs encouraged. Sobriety is not."
       - "Half pool party, half tailgate, fully American."
  */
  hero: {
    kicker: "SUNDAY \u2605 JULY 5TH \u2605 THE FASANO POOL PARTY",
    line1: "AMERICA TURNS",
    bigNumber: "250",
    line2: "AND WE'RE GETTING",
    punch: "TRASHY & TRASHED",
    sub: "Bring a swimsuit, a side dish, and zero dignity.",
    cta: "GET ME IN"
  },

  facts: [
    { icon: "\uD83C\uDF7B", label: "WHEN",  value: "Sun July 5th \u2022 12PM\u20135PM" },
    { icon: "\uD83C\uDFE1", label: "WHERE", value: "Crane Creek in Martin Downs" },
    { icon: "\uD83E\uDDE2", label: "DRESS", value: "Red, white & questionable \u2022 trashy encouraged, never required" }
  ],

  rsvp: {
    heading: "LOCK IN YOUR SPOT",
    sub: "Fifty patriots. One pool. Don't be the loser who forgot to RSVP.",
    nameLabel: "Name",
    namePlaceholder: "First and last",
    phoneLabel: "Phone (so we can send you the address)",
    phonePlaceholder: "(555) 555-5555",
    comingLabel: "You coming or what?",
    comingYes: "HECK YES",
    comingNo: "Can't make it",
    headcountLabel: "How many total, including you?",
    headcountPlaceholder: "e.g. 3",
    bringingLabel: "What are you bringing?",
    bringingPlaceholder: "A dish, a drink, a cooler, a folding chair...",
    costumeLabel: "How patriotic are we talking? (optional)",
    costumePlaceholder: "Flag speedo? Camo? Eagle face paint? Brag here.",
    submit: "SEND IT \uD83C\uDF86",
    successYes: {
      badge: "YOU'RE IN \uD83C\uDDFA\uD83C\uDDF8",
      head: "SEE YOU AT THE POOL, PATRIOT.",
      body: "Your spot is locked. Keep an eye on your phone for the address. Bring ice."
    },
    successNo: {
      badge: "NOTED.",
      head: "YOUR LOSS, HERO.",
      body: "We'll pour one out for you. Door's open if you change your mind."
    }
  },

  /* THE MESSAGE WALL.
     The seeded messages below are examples so you can see the vibe.
     In the real version these get replaced by what guests actually post. */
  wall: {
    heading: "THE WALL OF FREEDOM",
    sub: "Talk trash, call dibs, hype the party. Everybody sees this.",
    nameLabel: "Your name",
    namePlaceholder: "Who's talking?",
    msgLabel: "Your message",
    msgPlaceholder: "Drop your hot take, patriot...",
    postButton: "POST IT",
    seed: []
  },

  footer: "Sunburn, food coma, and excessive freedom are known side effects. RSVP responsibly."
};
