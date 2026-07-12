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
    intro: 'A pirate ship for a taxi and a catapult for a front door. The fortress where the great bird roosts is all searchlights and patrols — and somewhere at the top, behind a locked door, is Aryll. No boss fight yet; this visit is pure nerve. You’ll be back near the end of the game to settle the score properly.',
    sections: [
      {
        id: 'c2-a', title: 'Aboard the pirate ship', collapsedByDefault: false,
        steps: [
          { id: 'c2-a-1', order: 1,
            text: 'The crossing takes a while, so meet the crew: Gonzo at the tiller, Zuko in the crow’s nest, and the rest scattered about. Then head below deck, where Niko — thrilled to finally outrank somebody — sets you his initiation: hit the switch, hop the raised platforms, and swing the hanging ropes to the far ledge before time runs out. Jump a little early off each swing and you’ll clear it. Your prize is the SPOILS BAG, home for everything enemies drop.',
            callouts: [
              { type: 'sidequest', refId: 'sq-cabanadeed', later: true,
                label: 'Start hoarding Joy Pendants now — Mrs. Marie on Windfall will want 20 of them for a very nice deed…' },
              { type: 'sidequest', refId: 'sq-heroscharm', later: true,
                label: '…and she rewards a further pile of pendants with the Hero’s Charm much later. Every golden butterfly counts.' }
            ] },
          { id: 'c2-a-2', order: 2,
            text: 'Night falls as the ship anchors off the Forsaken Fortress. Tetra’s plan is elegant in its way: stuff Link in a barrel and fire him over the wall. The launch goes exactly as well as it sounds — {{spoiler:you smack the wall, and the Hero’s Sword spins away and jams into a crack near the top of the fortress}}. You’re inside, unarmed, and on your own.',
            callouts: [] }
        ]
      },
      {
        id: 'c2-b', title: 'Stealth among the searchlights', collapsedByDefault: false,
        steps: [
          { id: 'c2-b-1', order: 1,
            text: 'Swim to the wooden ramp and learn the fortress rules. Three searchlights sweep the walls, and Moblins patrol the walkways — get caught in a beam or a Moblin’s gaze and the alarm sounds and you’re hauled to the prison cell. (If that happens: climb the table, hop to the bookshelf, slide the vase aside and crawl through the hidden hole. Every jail in this game leaks.)',
            callouts: [] },
          { id: 'c2-b-2', order: 2,
            text: 'A barrel near the ramp is your best friend: climb inside, creep forward, and FREEZE — release the stick — whenever a patrol turns your way. Work your way up the outer ramps. Pots along the route hide recovery hearts, and rats scurry the corridors; they’re harmless enough, but they’ll happily bump you off narrow planks.',
            callouts: [] },
          { id: 'c2-b-3', order: 3,
            text: 'Each searchlight is run by a Bokoblin on a lookout platform, reached by ladder. You aren’t defenseless: smash the pots up there for a BOKO STICK, or block with your shield until the Bokoblin drops its own, then batter it with its weapon. Putting out the southwest tower’s light is required to move on — dousing all three makes the whole climb calmer, and it’s deeply satisfying besides.',
            callouts: [] },
          { id: 'c2-b-4', order: 4,
            text: 'With the lights down, cross the high walkways toward the glint in the wall. Mind the gaps where planks have rotted away — a fall usually means a wet restart of the climb, not a game over, but your pride takes the damage.',
            callouts: [] }
        ]
      },
      {
        id: 'c2-c', title: 'The sword, the door, and the bird', collapsedByDefault: false,
        steps: [
          { id: 'c2-c-1', order: 1,
            text: 'Pull the Hero’s Sword free at the top of the fortress — and let the ambush come to you: Bokoblins drop in the moment steel is back in your hand. After a whole fortress of sneaking, this fight feels wonderful. Cut loose.',
            callouts: [] },
          { id: 'c2-c-2', order: 2,
            text: 'Climb the last ramp to the great door at the summit and step inside. There she is — Aryll, safe among the other kidnapped girls, {{spoiler:including two you’ll come to know well on Windfall: Mila and Maggie}}. And then the room goes dark. {{spoiler:The Helmaroc King plucks Link off the floor like a seed, presents him to a shadowed figure watching from the tower — and hurls him far out to sea.}}',
            callouts: [] },
          { id: 'c2-c-3', order: 3,
            text: 'You wake to a voice with a wooden accent. {{spoiler:A red boat — a talking red boat, the King of Red Lions — has fished you out of the waves}}, and it has both a plan and strong opinions. Next stop: the merriest trading post on the Great Sea, and the true start of the adventure. (When you eventually return to this fortress in Chapter 10, bring the Picto Box: Moblins, Bombchus, Miniblins and Rats all pose here for the gallery.)',
            callouts: [
              { type: 'figurine', refId: 'fig-moblin', later: true, label: 'Moblin — pictograph on the return visit' },
              { type: 'figurine', refId: 'fig-bombchu', later: true, label: 'Bombchu — pictograph on the return visit' },
              { type: 'figurine', refId: 'fig-miniblin', later: true, label: 'Miniblin — pictograph on the return visit' },
              { type: 'figurine', refId: 'fig-rat', later: true, label: 'Rat — pictograph on the return visit' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch03', number: 3, title: 'Windfall Island', bossName: null,
    intro: 'Rescued by a boat with opinions, Link washes up at the merriest trading post on the Great Sea. Windfall is the game’s beating heart: shops, schemes, minigames, gossip — and half this guide’s side quests begin (or end) on its cobblestones. You only NEED one thing here today: a sail. But oh, what a place to dawdle.',
    sections: [
      {
        id: 'c3-a', title: 'Washed ashore', collapsedByDefault: false,
        steps: [
          { id: 'c3-a-1', order: 1,
            text: 'The King of Red Lions lays it out plainly: the bird answers to someone far worse, and a bare boat can’t chase destiny without a sail. Hop onto the dock and take the grand tour — the Bomb Shop on the hill (mind the prices; this will matter in a few chapters), Lenzo’s Picto Shop, the cafe, the School of Joy, Zunari’s market stall, the auction house by the dock, and the great windmill that isn’t turning. Windfall repays nosiness like nowhere else.',
            callouts: [] },
          { id: 'c3-a-2', order: 2,
            text: 'Find Zunari — the hooded merchant shivering at his stall — and buy the SAIL for 80 rupees. Short on cash? Cut grass, smash pots, and check crawlspaces; the island practically sheds rupees. The sail is the single most important purchase in the game, and Zunari knows it, bless him.',
            callouts: [] }
        ]
      },
      {
        id: 'c3-b', title: 'The jailbird cartographer', collapsedByDefault: false,
        steps: [
          { id: 'c3-b-1', order: 1,
            text: 'Inside the town jail cell is a grown man in green pajamas named Tingle, and freeing him is as easy as stepping on the switch by his cell. Your rewards: TINGLE’S CHART (marking his island and two wallet-doubling fairies) and the TINGLE TUNER. On GameCube, the Tuner is the real deal — link a Game Boy Advance with a link cable and Tingle himself rides along in your pocket, selling bombs and potions and hiding five statues in the five great dungeons. If you have the hardware, the Tingle Statues checklist awaits.',
            callouts: [
              { type: 'specialChart', refId: 'sp-tingle', label: 'Tingle’s Chart — his thank-you gift' }
            ] },
          { id: 'c3-b-2', order: 2,
            text: 'Before you leave the cell, crawl into the hole in the wall Tingle so kindly ignored. The dark maze beyond twists to a chest holding the PICTO BOX. It shoots in black and white and holds only three pictographs at a time — humble tools for what will become the longest quest in the game: the Nintendo Gallery’s 134 figurines. (Color comes later, via a certain firefly.)',
            callouts: [] }
        ]
      },
      {
        id: 'c3-c', title: 'A town full of trouble — first-visit checklist', collapsedByDefault: false,
        steps: [
          { id: 'c3-c-1', order: 1,
            text: 'Mrs. Marie’s class is short four students: the Killer Bees are “hiding” around town, and she’d like them rounded up. Ivan lurks behind the gravestone, one boy’s up the tree by the town gate (roll into the trunk!), one hides behind the bomb shop, one behind the school. Corner all four for a Piece of Heart — and note the tree also shakes loose a Joy Pendant now and then.',
            callouts: [
              { type: 'heart', refId: 'hp-05', label: 'Piece of Heart — win hide-and-seek' },
              { type: 'sidequest', refId: 'sq-killerbees', label: 'Killer Bees rounded up' }
            ] },
          { id: 'c3-c-2', order: 2,
            text: 'In the hut by the dock, Salvatore runs Sinking Ships with all the enthusiasm of a wet sock. Sink the three squid-ships in under 24 cannonballs — open with a diagonal sweep to find long hulls, then bracket your hits. First win pays a Piece of Heart; win again for Treasure Chart 7.',
            callouts: [
              { type: 'heart', refId: 'hp-06', label: 'Piece of Heart — first win' },
              { type: 'treasureChart', refId: 'tc-07', label: 'Treasure Chart 7 — repeat win' },
              { type: 'sidequest', refId: 'sq-sinkingships', label: 'Sinking Ships beaten' }
            ] },
          { id: 'c3-c-3', order: 3,
            text: 'After dark, the auction house lights up. Bidding is a war of nerves: hold A to charge your bid and time your pounce to break the room’s spirit — a huge raise late in the countdown usually seals it. The rotation of prizes includes TWO Pieces of Heart, Treasure Chart 18, and a Joy Pendant, so keep coming back on later nights (once you can conduct the Song of Passing, skipping to nightfall makes this painless).',
            callouts: [
              { type: 'heart', refId: 'hp-07', label: 'Piece of Heart — auction prize' },
              { type: 'heart', refId: 'hp-08', later: true, label: 'Piece of Heart — a later auction night' },
              { type: 'treasureChart', refId: 'tc-18', label: 'Treasure Chart 18 — auction prize' },
              { type: 'sidequest', refId: 'sq-auction', later: true, label: 'Every auction prize claimed' }
            ] },
          { id: 'c3-c-4', order: 4,
            text: 'Upstairs at the Picto Shop, Lenzo takes you on as a trainee if you complete three assignments with your new box: (1) catch Garrickson in the act of posting his doomed love letter, (2) catch Gossack in the cafe mid-flinch — he startles at anything, just watch and snap, and (3) frame Anton and Linda in one pictograph as they pass in the square, so their mutual crush has evidence. Finish all three and Lenzo rewards his new assistant with a Piece of Heart. His grander project — a Forest Firefly to unlock COLOR pictography — must wait for Forest Haven.',
            callouts: [
              { type: 'heart', refId: 'hp-14', label: 'Piece of Heart — become Lenzo’s assistant' },
              { type: 'sidequest', refId: 'sq-pictobox', later: true, label: 'Deluxe Picto Box — finish after Forest Haven (firefly!)' }
            ] },
          { id: 'c3-c-5', order: 5,
            text: 'Two slow-burn Windfall projects to open now and finish over many visits: buy flowers and decorations from Zunari and fill all 14 empty pots and pedestals around town (Sam on his bench pays a Piece of Heart when the whole island blooms), and once you meet the wandering Goron merchants on your travels, ferry Zunari’s trade goods between them until the Shop Guru Statue comes home — the Magic Armor is his thanks.',
            callouts: [
              { type: 'heart', refId: 'hp-11', later: true, label: 'Piece of Heart — all 14 flowers planted, talk to Sam' },
              { type: 'sidequest', refId: 'sq-flowers', later: true, label: 'Windfall in bloom' },
              { type: 'sidequest', refId: 'sq-zunari', later: true, label: 'Trading sequence — Magic Armor' }
            ] },
          { id: 'c3-c-6', order: 6,
            text: 'By the gravestone, Tott is dancing his heart out and desperate for a conductor — but you don’t carry a baton yet. Remember him: the Song of Passing (day/night on demand) is arguably the most useful optional song in the game, and it’s your very first errand once the Wind Waker is in hand. Also file away: the townsfolk themselves are gallery subjects — 27 portraits in the Windfall room alone — but Carlov only accepts COLOR pictographs, so the great photo safari waits for the Deluxe Picto Box. Track them in the Figurines checklist. (A rare Blue ChuChu also calls this island home — see the Blue ChuChus checklist.)',
            callouts: [
              { type: 'song', refId: 'song-passing', later: true, label: 'Song of Passing — return with the Wind Waker' },
              { type: 'secret', refId: 'chu-02', later: true, label: 'Blue ChuChu — on this island' }
            ] }
        ]
      },
      {
        id: 'c3-d', title: 'Setting sail for Dragon Roost', collapsedByDefault: false,
        steps: [
          { id: 'c3-d-1', order: 1,
            text: 'Sail rigged, pockets lighter, town thoroughly bothered — the King of Red Lions points you east toward the towering island with the smoking peak. Equip the sail to X, Y, or Z, catch the wind (it blows the right way today, a courtesy the sea won’t always extend), and remember A drops the sail when you want to stop. On the way out, wave at the gulls. Aryll would.',
            callouts: [] }
        ]
      }
    ]
  },
  {
    id: 'ch04', number: 4, title: 'Dragon Roost Island', bossName: null,
    intro: 'A mountain that smokes, a dragon that rages, and a post office that never stops. Dragon Roost is home to the bird-winged Rito, keepers of Din’s Pearl — and the place where the game hands you its namesake and teaches the sea to obey. Two of the best side quests in the game live here too.',
    sections: [
      {
        id: 'c4-a', title: 'The baton and the breeze', collapsedByDefault: false,
        steps: [
          { id: 'c4-a-1', order: 1,
            text: 'The moment you land, the King of Red Lions produces his real cargo: the WIND WAKER, the conductor’s baton of the ancient kings. Like every item on GameCube, it must be EQUIPPED to X, Y, or Z. Raise it and you conduct with the control stick — up, down, left, right — following the tempo shown on screen. It feels ceremonial because it is.',
            callouts: [] },
          { id: 'c4-a-2', order: 2,
            text: 'Just up from the beach stands a stone slab — the Wind Shrine. Read it and conduct the three notes it shows. A wisp of a wind god named Zephos appears, delighted someone finally plays his tune: the WIND’S REQUIEM. From now on the wind blows wherever you point it. On GameCube this is the whole sailing game — every voyage starts with this song, so put the baton somewhere comfortable and leave it there.',
            callouts: [
              { type: 'song', refId: 'song-requiem', label: 'Wind’s Requiem — the song of the open sea' },
              { type: 'figurine', refId: 'fig-zephos', later: true, label: 'Zephos — pictograph him at this shrine later (Deluxe Picto Box)' }
            ] }
        ]
      },
      {
        id: 'c4-b', title: 'The Rito aerie', collapsedByDefault: false,
        steps: [
          { id: 'c4-b-1', order: 1,
            text: 'Follow the path into the mountain’s hollow interior — the Rito aerie. Quill vouches for you (again; he’s making a habit of rescuing your reputation), and the Chieftain explains the crisis: the great dragon Valoo, who grants Rito youths their wings, has flown into an inexplicable rage. Prince Komali, due for his ceremony, has lost his nerve entirely.',
            callouts: [] },
          { id: 'c4-b-2', order: 2,
            text: 'Visit Komali in his room off the lower hall — a sad boy clutching a beautiful red pearl. He won’t hand over {{spoiler:Din’s Pearl}} to a stranger with big talk. Fair enough. Someone believes in you, though: Medli, Valoo’s young attendant, asks you to meet her at the spring behind the aerie.',
            callouts: [] },
          { id: 'c4-b-3', order: 3,
            text: 'Before heading out back, work the day job: Koboli at the mail desk will pay you to sort letters. Sort 25 or more before time runs out (accuracy first, speed comes) to start a chain that runs deep: rupees now, a job for shy Baito later, and eventually a grateful letter carrying a Piece of Heart. Meanwhile, Hoskit — the guard outside Komali’s room — pines for a gift for his girlfriend: 20 GOLDEN FEATHERS. Kargarocs drop them; deliver the pile whenever it’s ready and a Piece of Heart arrives by post the next day.',
            callouts: [
              { type: 'sidequest', refId: 'sq-mailsort', label: 'Mail sorting — start the chain (25+ letters)' },
              { type: 'heart', refId: 'hp-16', later: true, label: 'Piece of Heart — completes the mail chain' },
              { type: 'heart', refId: 'hp-17', later: true, label: 'Piece of Heart — 20 Golden Feathers for Hoskit' }
            ] }
        ]
      },
      {
        id: 'c4-c', title: 'Medli at the spring', collapsedByDefault: false,
        steps: [
          { id: 'c4-c-1', order: 1,
            text: 'Out the back door, the spring is a sorry sight — the pond has shrunk to a puddle since rockfall choked the flow, and Medli waits on the shore. She wants to reach the ledge above to help Valoo but can’t make the flight alone: pick her up, wait for the gust at your back (watch the grass bend), and THROW her up to the ledge. She makes it — and in thanks hands over her precious EMPTY BOTTLE.',
            callouts: [
              { type: 'bottle', refId: 'bottle-medli', label: 'Bottle #1 — from Medli (story-guaranteed)' }
            ] },
          { id: 'c4-c-2', order: 2,
            text: 'That bottle is the key to the mountain: the trail up is blocked by boulders, and the bomb flowers that should clear them have withered in the heat. Scoop pond water and pour it on each withered plant — they perk up instantly. Toss the revived bomb flowers at the boulders to blast the path open.',
            callouts: [] },
          { id: 'c4-c-3', order: 3,
            text: 'Climb the outer trail: red ChuChus underfoot, Kargarocs diving from the sky (your first Golden Feathers, conveniently), and rickety planks over long drops. At the trail’s top, Medli waits by the mouth of Dragon Roost Cavern — the way to Valoo runs straight through the mountain’s fiery guts. Next chapter: the first real dungeon.',
            callouts: [] }
        ]
      },
      {
        id: 'c4-d', title: 'Around the island (optional)', collapsedByDefault: true,
        steps: [
          { id: 'c4-d-1', order: 1,
            text: 'Off the mountain path, past the bomb-flower stretch, a chest sits on a ledge just out of reach. You can attempt the fiddly cliff route now, or file it away for a trivial Deku Leaf glide after Forest Haven — either way, a Piece of Heart waits up there.',
            callouts: [
              { type: 'heart', refId: 'hp-44', later: true, label: 'Piece of Heart — mountain-path ledge (Deku Leaf makes it easy)' }
            ] },
          { id: 'c4-d-2', order: 2,
            text: 'With the wind finally yours to command, a perfect first free sail: Pawprint Isle sits one square west. Crawl into the hole atop its grassy dome — among the ChuChus inside waits a Piece of Heart. (A rare Blue ChuChu also haunts Pawprint; see the checklist when you go jelly-hunting.)',
            callouts: [
              { type: 'heart', refId: 'hp-31', label: 'Piece of Heart — inside Pawprint’s dome' },
              { type: 'secret', refId: 'cave-pawprint-chuchu', label: 'Secret cave — the ChuChu dome' },
              { type: 'secret', refId: 'chu-04', later: true, label: 'Blue ChuChu — on Pawprint Isle' }
            ] },
          { id: 'c4-d-3', order: 3,
            text: 'Two island notes for later: Dragon Roost hides a combat-filled secret cave of its own (see the Secret Caves checklist once you’re better armed), and — IMPORTANT for gallery completionists — the Rito named KOGOLI will not be around forever. The moment you own the Deluxe Picto Box, sail back here and photograph him before anyone else on your list.',
            callouts: [
              { type: 'secret', refId: 'cave-dragonroost', later: true, label: 'Secret cave — Dragon Roost Island' },
              { type: 'figurine', refId: 'fig-kogoli', later: true, label: 'Kogoli — MISSABLE figurine, photograph early!' },
              { type: 'figurine', refId: 'fig-medli', later: true, label: 'Medli — and the whole Rito flock, once color pictos arrive' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch05', number: 5, title: 'Dragon Roost Cavern', bossName: 'Gohma',
    intro: 'The first true dungeon: the volcano’s smoldering interior, all lava flows, creaking wooden scaffolds and locked doors — with something enormous coiled at the bottom of Valoo’s perch. It’s a gentle teacher as dungeons go, but it saves a real spectacle for the end.',
    sections: [
      {
        id: 'c5-a', title: 'Into the mountain', collapsedByDefault: false,
        steps: [
          { id: 'c5-a-1', order: 1,
            text: 'The cavern’s language is WATER VERSUS LAVA. The big clay water jugs are tools: throw one into a lava pool to harden a temporary platform, or douse a bubbling lava geyser and ride the cooled plug as it rockets you upward. Anything on fire respects a splash. Keese and red ChuChus fill the early rooms; small keys open the way — check side alcoves before spending one.',
            callouts: [
              { type: 'figurine', refId: 'fig-keese', later: true, label: 'Keese — gallery subject (color pictos later)' },
              { type: 'figurine', refId: 'fig-firekeese', later: true, label: 'Fire Keese — they light themselves, obligingly' }
            ] },
          { id: 'c5-a-2', order: 2,
            text: 'Meet the Magtail: a lava centipede with a face only a pictograph could love. Splash it with a water jug (or stun it with a well-timed strike) and it curls into an armored ball — which you can pick up and drop on switches. The dungeon makes you do exactly that more than once; grab the DUNGEON MAP and COMPASS from their chests as you climb so nothing hides from you.',
            callouts: [
              { type: 'figurine', refId: 'fig-magtail', later: true, label: 'Magtail — gallery subject' },
              { type: 'treasureChart', refId: 'tc-39', label: 'Treasure Chart 39 — in a chest along the way; don’t leave without it' }
            ] },
          { id: 'c5-a-3', order: 3,
            text: 'Tingle Tuner traveler? Somewhere in these halls a DRAGON TINGLE STATUE hides — ten rupees of Tingle Bomb on the right spot reveals it. (GBA + link cable only; the statue hunt is the Tuner’s crown jewel.)',
            callouts: [
              { type: 'item', refId: 'tingle-dragon', later: true, label: 'Dragon Tingle Statue — Tingle Bomb the hidden spot' }
            ] }
        ]
      },
      {
        id: 'c5-b', title: 'The wind-scoured heights', collapsedByDefault: false,
        steps: [
          { id: 'c5-b-1', order: 1,
            text: 'Halfway up, the dungeon steps outside onto cliff-face scaffolding, and the volcano shows you the whole Great Sea as a view. Kargarocs dive at you on the narrow planks — shield-block or let them overshoot, and mind the wind. More Golden Feathers for Hoskit’s pile, silver lining.',
            callouts: [] },
          { id: 'c5-b-2', order: 2,
            text: 'Back inside, a familiar voice: MEDLI, caged by Bokoblin guards who badly underestimated today. Cut them down and free her. In thanks she hands over the dungeon’s treasure — the GRAPPLING HOOK, the attendants’ tool for visiting Valoo. Rope swings across lava, hookable beams everywhere the level design was winking at you — and hold it out toward enemies to snatch spoils like Joy Pendants right off them. Medli flies off to do her part; you climb to do yours.',
            callouts: [] }
        ]
      },
      {
        id: 'c5-c', title: 'Boss: {{spoiler:Gohma}}', collapsedByDefault: false,
        steps: [
          { id: 'c5-c-1', order: 1,
            text: 'Collect the BOSS KEY, then take the plunge into the boss chamber, where the source of Valoo’s agony scuttles out of the lava: {{spoiler:Gohma, an armored arthropod the size of a house — she has been gnawing the poor dragon’s tail}}. Phase one ignores your sword entirely: grapple {{spoiler:Valoo’s tail}} where it hangs through the ceiling and swing — the collapsing rock crashes down on the boss. Land the drop THREE times and the armor shatters.',
            callouts: [] },
          { id: 'c5-c-2', order: 2,
            text: 'Phase two: the naked eye. L-target and throw the Grappling Hook at {{spoiler:Gohma’s eye}} to yank it within reach, then slash for all you’re worth. Repeat the pull-and-pummel until the fight ends the way all good first bosses do: dramatically, in slow motion. Collect the HEART CONTAINER (a full fourth heart!) before the exit whisks you out. Gallery note: bosses can never be re-photographed, and your Picto Box is still black-and-white — early boss figurines are Second Quest business (the cleared-game replay keeps the Deluxe Picto Box), so fight guilt-free today.',
            callouts: [
              { type: 'figurine', refId: 'fig-gohma', later: true, label: 'Gohma — figurine via Second Quest color picto' }
            ] },
          { id: 'c5-c-3', order: 3,
            text: 'Outside, the mountain breathes easy: Valoo hums contentedly, and {{spoiler:Prince Komali — witnessing actual heroism — finds his spine and hands you DIN’S PEARL}}, the first of three. Medli takes up her calling as Valoo’s attendant in earnest. One pearl down. The King of Red Lions suggests a forest far to the south. Set the wind and sail — next stop, Forest Haven.',
            callouts: [] }
        ]
      }
    ]
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
