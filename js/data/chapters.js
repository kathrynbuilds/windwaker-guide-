/* ==========================================================================
   Wind Waker Compass — chapters.js
   The walkthrough itself. Written for the GAMECUBE original — see the
   content rules at the top of collectibles.js.

   Chapter 1 is complete. Chapters 2–14 are titled shells whose full
   walkthroughs are being written one at a time (each reviewed before the
   next begins), so routing and progress math work today.

   Text conventions:
   - {{spoiler:...}} wraps boss names / story beats; the app blurs these
     when "Hide spoilers" is on.
   - Callouts reference collectible ids from collectibles.js. `later: true`
     renders a "Return later" badge for things you can see now but only
     collect once you have the right item.
   ========================================================================== */

window.WWC_DATA = window.WWC_DATA || {};

WWC_DATA.chapters = [

  /* ==================================================================== *
   *  CHAPTER 1 — OUTSET ISLAND                                           *
   * ==================================================================== */
  {
    id: 'ch01', number: 1, title: 'Outset Island', bossName: null,
    intro: 'Every legend starts somewhere, and this one starts with a nap. On sleepy Outset Island, a boy comes of age wearing the green of the ancient hero — and by sundown, everything changes. Take your time here: Outset rewards a slow, nosy first hour, and you’ll be back more than once before the end.',
    sections: [
      {
        id: 'c1-a', title: 'A birthday on Outset', collapsedByDefault: false,
        steps: [
          { id: 'c1-a-1', order: 1,
            text: 'Aryll wakes you on the watchtower — it’s your birthday, and Grandma is waiting at home. Climb down the ladder and head to your house (the one nearest the tower). Notice the mini-map in the lower-left corner of the screen: it’s your constant companion on GameCube, in towns, dungeons, and at sea.',
            callouts: [] },
          { id: 'c1-a-2', order: 2,
            text: 'Inside, climb the ladder to the loft and talk to Grandma. She dresses you in the Hero’s Clothes — the garb of {{spoiler:the legendary Hero of Time}}, worn by every boy on his coming-of-age day. (Yes, you must wear them. No, Link doesn’t get a say.)',
            callouts: [] },
          { id: 'c1-a-3', order: 3,
            text: 'Return to the watchtower. Aryll lends you her most precious treasure — the telescope. Look toward the red mailbox by your house to spot Quill the postman... then follow Aryll’s shout skyward: {{spoiler:a monstrous bird carrying a girl swoops overhead, chased by a pirate ship’s catapult fire, and drops her into the forest on the summit}}.',
            callouts: [] },
          { id: 'c1-a-4', order: 4,
            text: 'You’ll need a sword before anyone lets you charge into a monster-filled wood. Visit Orca in the lower room of the two-story house. He teaches the horizontal slice, vertical cut, thrust, spin attack, and dodging — pass his lesson and the Hero’s Sword is yours. Equip it and get comfortable: L-targeting (hold L) is your best friend all game.',
            callouts: [
              { type: 'upgrade', refId: 'up-hurricane', later: true,
                label: 'Orca will teach the Hurricane Spin much later — bring him 10 Knight’s Crests once you’re fighting Darknuts.' },
              { type: 'heart', refId: 'hp-04', later: true,
                label: 'Orca counts every practice hit you ever land. The 500th earns a Piece of Heart — feel free to start the tally now!' }
            ] },
          { id: 'c1-a-5', order: 5,
            text: 'Climb the trail toward the summit and cross the rope bridge into the Forest of Fairies. Two Bokoblins drop in near the hanging girl — L-target, block, and counter like Orca taught you. Cut {{spoiler:Tetra, captain of the pirates,}} down from the branch and escort her out.',
            callouts: [] },
          { id: 'c1-a-6', order: 6,
            text: 'At the bridge, disaster: {{spoiler:the great bird returns and snatches Aryll instead}}. Back on the beach, the pirates owe you one — and Quill shames them into taking you along. Before you board, Grandma has one more gift: go home and collect the family shield from the wall.',
            callouts: [] }
        ]
      },
      {
        id: 'c1-b', title: 'Look around before you leave (optional)', collapsedByDefault: false,
        steps: [
          { id: 'c1-b-1', order: 1,
            text: 'Poke through every house — it’s the Zelda way. Upstairs from Orca, Sturgeon’s wall of notes doubles as a gameplay manual (rolling, sidling, L-targeting). Knock on his ladder-loving brother’s door too. Rose’s pigs can be caught and carried to her pen for a few rupees; crawl under Link’s house for a hidden rupee stash.',
            callouts: [] },
          { id: 'c1-b-2', order: 2,
            text: 'Up in the Forest of Fairies, note the huge black boulder tucked against the cliff — nothing can move it yet, but behind it sleeps a Great Fairy with the game’s first wallet upgrade. File it away for your first return trip with bombs.',
            callouts: [
              { type: 'fairy', refId: 'fairy-outset', later: true, label: 'Great Fairy — bomb the boulder (return with bombs)' },
              { type: 'upgrade', refId: 'up-wallet1', later: true, label: 'Bigger Wallet — 1,000 rupees' }
            ] },
          { id: 'c1-b-3', order: 3,
            text: 'On the headland across the second bridge sits another suspicious black boulder. Beneath it waits the Savage Labyrinth — fifty floors of fighting you are nowhere near ready for. Come back late in the quest for two of the game’s great prizes.',
            callouts: [
              { type: 'secret', refId: 'cave-savage', later: true, label: 'Savage Labyrinth — under the headland boulder' },
              { type: 'sidequest', refId: 'sq-savage', later: true, label: 'Clear all 50 floors (much later!)' },
              { type: 'heart', refId: 'hp-03', later: true, label: 'Piece of Heart — floor 50' }
            ] },
          { id: 'c1-b-4', order: 4,
            text: 'Two more Outset hearts to remember: the big BLACK pig digs up buried treasure if you sprinkle All-Purpose Bait on the dark soil patches (bait comes from Beedle’s shop ship), and a lone rock spire off the coast can only be reached by gliding from the heights with the Deku Leaf.',
            callouts: [
              { type: 'heart', refId: 'hp-01', later: true, label: 'Piece of Heart — black pig + All-Purpose Bait' },
              { type: 'heart', refId: 'hp-02', later: true, label: 'Piece of Heart — Deku Leaf glide to the rock spire' }
            ] },
          { id: 'c1-b-5', order: 5,
            text: 'Completionist’s corner: every Outset islander has a figurine waiting in the Nintendo Gallery. You can’t take pictographs yet — the Picto Box comes at Windfall — but this checklist will be here when you sail back with it.',
            callouts: [
              { type: 'figurine', refId: 'fig-grandma', later: true, label: 'Grandma' },
              { type: 'figurine', refId: 'fig-aryll', later: true, label: 'Aryll (don’t leave her for last!)' },
              { type: 'figurine', refId: 'fig-orca', later: true, label: 'Orca' },
              { type: 'figurine', refId: 'fig-sturgeon', later: true, label: 'Sturgeon' },
              { type: 'figurine', refId: 'fig-abe', later: true, label: 'Abe' },
              { type: 'figurine', refId: 'fig-rose', later: true, label: 'Rose' },
              { type: 'figurine', refId: 'fig-mesa', later: true, label: 'Mesa' },
              { type: 'figurine', refId: 'fig-joel', later: true, label: 'Joel' },
              { type: 'figurine', refId: 'fig-zill', later: true, label: 'Zill' },
              { type: 'figurine', refId: 'fig-suebelle', later: true, label: 'Sue-Belle' }
            ] }
        ]
      },
      {
        id: 'c1-c', title: 'Setting sail', collapsedByDefault: false,
        steps: [
          { id: 'c1-c-1', order: 1,
            text: 'Shield on your back, goodbyes unsaid (Grandma’s door is worth one last visit — bring tissues), talk to Tetra at the ship. With a heave of the sail, Outset shrinks behind you. Next stop: the one place every sailor on the Great Sea fears.',
            callouts: [] },
          { id: 'c1-c-2', order: 2,
            text: 'A sailing note for the road, GameCube edition: there is no Swift Sail in this version. Once you have your own boat, the wind only blows where the Wind’s Requiem points it, the sail must be EQUIPPED to X, Y, or Z like any item, and pressing A drops the sail to stop. Long hauls are part of the romance — this guide will bundle errands by region so no crossing is wasted.',
            callouts: [] }
        ]
      }
    ]
  },

  /* ==================================================================== *
   *  CHAPTERS 2–14 — shells (full walkthroughs land one at a time)       *
   * ==================================================================== */
  {
    id: 'ch02', number: 2, title: 'Forsaken Fortress', bossName: null,
    intro: 'Stowed away in a barrel with a catapult for a ticket, Link infiltrates the searchlight-swept fortress where the great bird roosts — and where Aryll is held.',
    sections: []
  },
  {
    id: 'ch03', number: 3, title: 'Windfall Island', bossName: null,
    intro: 'Cast into the sea and rescued by a very talkative boat, Link washes up at the merriest port on the Great Sea. Shops, schemes, minigames — and a certain jailed mapmaker.',
    sections: []
  },
  {
    id: 'ch04', number: 4, title: 'Dragon Roost Island', bossName: null,
    intro: 'The island of the Rito postmen, where the sky spirit Valoo rages atop the peak and a young prince has lost his nerve.',
    sections: []
  },
  {
    id: 'ch05', number: 5, title: 'Dragon Roost Cavern', bossName: 'Gohma',
    intro: 'The first true dungeon: a volcano’s smoldering heart of lava flows, wooden platforms, and something enormous coiled beneath Valoo’s perch.',
    sections: []
  },
  {
    id: 'ch06', number: 6, title: 'Forest Haven', bossName: null,
    intro: 'A sanctuary tree rises from a ring of cliffs, home of the Great Deku Tree and the leaf-masked Koroks — and the source of the Deku Leaf.',
    sections: []
  },
  {
    id: 'ch07', number: 7, title: 'Forbidden Woods', bossName: 'Kalle Demos',
    intro: 'Across the water from Forest Haven, a woods gone wrong: thorned vines, carnivorous plants, and a missing Korok named Makar.',
    sections: []
  },
  {
    id: 'ch08', number: 8, title: 'Nayru’s Pearl', bossName: null,
    intro: 'Storm clouds gather over Greatfish Isle. The hunt for the last pearl leads through bomb-wielding pirates, a midnight heist, and the great fish Jabun.',
    sections: []
  },
  {
    id: 'ch09', number: 9, title: 'Tower of the Gods', bossName: 'Gohdan',
    intro: 'The three pearls take their places, and from the sea rises a tower built by gods to test a hero.',
    sections: []
  },
  {
    id: 'ch10', number: 10, title: 'Hyrule Castle & the Forsaken Fortress', bossName: 'Helmaroc King',
    intro: 'What waits beneath the Great Sea changes everything. Then — back to where it all began, to settle accounts with a giant bird.',
    sections: []
  },
  {
    id: 'ch11', number: 11, title: 'Earth Temple', bossName: 'Jalhalla',
    intro: 'The Master Sword needs its power restored. With Medli and the Earth God’s Lyric, descend into a temple of shadow and mirrored light beneath Headstone Island.',
    sections: []
  },
  {
    id: 'ch12', number: 12, title: 'Wind Temple', bossName: 'Molgera',
    intro: 'Makar’s song opens Gale Isle, where wind itself is the puzzle — springs, fans, and a burrowing terror under the sand.',
    sections: []
  },
  {
    id: 'ch13', number: 13, title: 'The Triforce', bossName: null,
    intro: 'The grand treasure hunt: the Ghost Ship, the Savage Labyrinth, eight charts, eight 398-rupee visits to Tingle, and eight shards salvaged from the deep. The heart of the 100% run — and where this guide’s checklists earn their keep.',
    sections: []
  },
  {
    id: 'ch14', number: 14, title: 'Ganon’s Tower', bossName: 'Ganondorf',
    intro: 'Beneath the waves, an old kingdom holds its breath. Climb the tower, face every trial the game can restate, and finish the story on the roof of a drowned world.',
    sections: []
  }
];
