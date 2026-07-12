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
    intro: 'Far to the south, a ring of stone cradles a tree the size of a legend. Forest Haven is the gentlest place on the Great Sea — and, for a 100% run, one of the most important: the Deku Leaf, the Forest Firefly, and the Nintendo Gallery all live here. Budget a long, happy visit.',
    sections: [
      {
        id: 'c6-a', title: 'Landfall at the singing forest', collapsedByDefault: false,
        steps: [
          { id: 'c6-a-1', order: 1,
            text: 'The outside is less gentle than the inside: Octoroks lurk in the moat waters (shield-bounce their rocks back) and Boko Babas snap along the climb. Work up and around the roots to the cave entrance and follow it into the hollow heart of the tree — waterfalls, lily pads, and the deep, slow voice of the GREAT DEKU TREE.',
            callouts: [
              { type: 'figurine', refId: 'fig-octorok', later: true, label: 'Octorok — gallery subject' },
              { type: 'figurine', refId: 'fig-bokobaba', later: true, label: 'Boko Baba — gallery subject' }
            ] },
          { id: 'c6-a-2', order: 2,
            text: 'First, pest control: ChuChus swarm the great tree’s bark the moment you approach. Slash them off (bouncing on the lily pads with rolls works too) and the Deku Tree can finally speak. The news is mixed: he’ll gladly grant {{spoiler:Farore’s Pearl}} at the Koroks’ annual ceremony — but the ceremony can’t start, because little MAKAR flew too close to the Forbidden Woods and fell in.',
            callouts: [
              { type: 'figurine', refId: 'fig-dekutree', later: true, label: 'Great Deku Tree — gallery subject (what a portrait!)' }
            ] }
        ]
      },
      {
        id: 'c6-b', title: 'The Deku Leaf', collapsedByDefault: false,
        steps: [
          { id: 'c6-b-1', order: 1,
            text: 'To reach the Forbidden Woods you’ll need wings of your own. Inside Forest Haven, hop into the BABA BUDS — the friendly pink pods — and let them spring you from ledge to ledge, spiraling up the inside of the tree. At the crown, pluck your prize off the branch: the DEKU LEAF.',
            callouts: [] },
          { id: 'c6-b-2', order: 2,
            text: 'The Deku Leaf is two items in one: on the ground it fans a gust (flip switches, shove things, annoy pigs); in the air it’s a glider that drinks from your MAGIC METER — watch the gauge, and remember a certain Great Fairy doubles it later. First flight assignment: from Forest Haven’s heights, ride the updrafts around the OUTSIDE of the tree to the lonely ledge holding a Piece of Heart.',
            callouts: [
              { type: 'heart', refId: 'hp-18', label: 'Piece of Heart — glide to the outer ledge' }
            ] }
        ]
      },
      {
        id: 'c6-c', title: 'A forest of errands — don’t sail off yet', collapsedByDefault: false,
        steps: [
          { id: 'c6-c-1', order: 1,
            text: 'THE BIG ONE: near Hollo’s potion shop inside the haven drift motes of living light — FOREST FIREFLIES. Swing an empty bottle to catch one. This little glow is Lenzo’s final requirement: ferry it back to Windfall (any time) and he upgrades your camera to the DELUXE PICTO BOX — full color, and the key that unlocks the entire 134-figurine gallery quest. The instant you have it, remember your standing appointment: Kogoli on Dragon Roost, before he wanders off for good.',
            callouts: [
              { type: 'sidequest', refId: 'sq-pictobox', label: 'Deluxe Picto Box — firefly to Lenzo (after his 3 assignments)' }
            ] },
          { id: 'c6-c-2', order: 2,
            text: 'Just off Forest Haven’s flank sits a tiny islet with a door: the NINTENDO GALLERY. Glide over and meet Carlov, master sculptor, and Manny, his one-man fan club. The deal, GameCube terms: show Carlov a clear, full-frame COLOR pictograph and he’ll carve that subject’s figurine — but only ONE per day. The Song of Passing turns his “come back tomorrow” into a ten-second wait, which over 134 figurines will save you literal hours. This checklist’s longest quest starts here.',
            callouts: [
              { type: 'sidequest', refId: 'sq-gallery', label: 'Nintendo Gallery — the 134-figurine quest begins' },
              { type: 'figurine', refId: 'fig-carlov', later: true, label: 'Carlov — yes, he poses' },
              { type: 'figurine', refId: 'fig-manny', later: true, label: 'Manny — the superfan' }
            ] },
          { id: 'c6-c-3', order: 3,
            text: 'Two forest notes for later: bottle some FOREST WATER before a future trip — after the Korok ceremony, eight saplings will wither across the sea, and watering all eight within the water’s 20-minute freshness timer earns a Piece of Heart (the GameCube timer is tight; plan the route before scooping). And a rare Blue ChuChu haunts the haven — see the checklist when hunting jelly for Doc Bandam’s best potion.',
            callouts: [
              { type: 'sidequest', refId: 'sq-witheredtrees', later: true, label: 'Withered trees — after the ceremony (20-minute timer!)' },
              { type: 'heart', refId: 'hp-19', later: true, label: 'Piece of Heart — all eight saplings watered' },
              { type: 'secret', refId: 'chu-18', later: true, label: 'Blue ChuChu — at Forest Haven' }
            ] }
        ]
      },
      {
        id: 'c6-d', title: 'On to the Forbidden Woods', collapsedByDefault: false,
        steps: [
          { id: 'c6-d-1', order: 1,
            text: 'The Forbidden Woods loom across the water to the west of the haven — all thorns where this place is all blossom. Climb back to Forest Haven’s upper exit, aim the wind, and Deku-Leaf across the gap, riding the cyclone updrafts between the islets like stepping stones. Watch the magic meter on the long hops; a dunk means a swim and a re-climb. Makar is waiting, and he’s been brave for long enough.',
            callouts: [] }
        ]
      }
    ]
  },
  {
    id: 'ch07', number: 7, title: 'Forbidden Woods', bossName: 'Kalle Demos',
    intro: 'Forest Haven’s dark twin: a hollow tree gone feral, where the flora does the hunting and a very small violinist is very deep in trouble. The second dungeon trades lava for overgrowth — and sends you home with one of the game’s best tools.',
    sections: [
      {
        id: 'c7-a', title: 'Into the thorns', collapsedByDefault: false,
        steps: [
          { id: 'c7-a-1', order: 1,
            text: 'The woods’ grammar is all plants: giant flowers serve as platforms and lifts, Boko Babas snap from pods (slash the head, then stomp the seed for a Boko Baba Seed — Hollo trades them for potions), and MORTHS — the spiky burrs — cling to your legs and slow you to a trudge until a spin attack shakes them off. Doors here are sealed by vines; your sword handles the green ones for now.',
            callouts: [
              { type: 'figurine', refId: 'fig-morth', later: true, label: 'Morth — gallery subject' },
              { type: 'figurine', refId: 'fig-peahat', later: true, label: 'Peahat — gallery subject' }
            ] },
          { id: 'c7-a-2', order: 2,
            text: 'Peahats whirl through the air on propeller leaves — a gust from the Deku Leaf knocks them into a helpless tumble. Use the Leaf between the great boughs too: the dungeon loves a gap just too wide to jump. Collect the DUNGEON MAP and COMPASS as you go, and mind the blue thorned vines: nothing you carry yet will cut them. Yet.',
            callouts: [] },
          { id: 'c7-a-3', order: 3,
            text: 'Tingle Tuner in hand? The FORBIDDEN TINGLE STATUE hides somewhere in these woods — ten rupees of Tingle Bomb marks the spot.',
            callouts: [
              { type: 'item', refId: 'tingle-forbidden', later: true, label: 'Forbidden Tingle Statue — Tingle Bomb the hidden spot' }
            ] }
        ]
      },
      {
        id: 'c7-b', title: 'The Boomerang', collapsedByDefault: false,
        steps: [
          { id: 'c7-b-1', order: 1,
            text: 'In a great flower-walled arena, the dungeon’s bruiser descends: a WINGED MOTHULA. Ground it — a Deku Leaf gust mid-flight works wonders — then hack at it while it’s down, and don’t let the Morths it sheds pile onto you. Its treasure is the BOOMERANG.',
            callouts: [
              { type: 'figurine', refId: 'fig-wingedmothula', later: true, label: 'Winged Mothula — gallery subject' },
              { type: 'figurine', refId: 'fig-mothula', later: true, label: 'Mothula (grounded) — also skulking in these woods' }
            ] },
          { id: 'c7-b-2', order: 2,
            text: 'The Boomerang is the woods’ skeleton key: hold the button to paint up to FIVE targets, release, and watch it visit them all in order. It severs the blue thorned vines, snips the stems holding puzzle platforms and doors shut, stuns enemies, and fetches faraway pickups. Half this dungeon’s remaining locks are really boomerang puzzles — think “what five things need cutting?”',
            callouts: [] }
        ]
      },
      {
        id: 'c7-c', title: 'Boss: {{spoiler:Kalle Demos}}', collapsedByDefault: false,
        steps: [
          { id: 'c7-c-1', order: 1,
            text: 'Boss key in hand, drop into the bloom at the bottom of the woods. {{spoiler:Makar has been swallowed whole by KALLE DEMOS, a monstrous orchid that hoists itself to the ceiling on a crown of tendrils.}} The Boomerang was made for this: target as many anchoring tendrils as it allows and cut, cut, cut until the whole horror crashes down.',
            callouts: [] },
          { id: 'c7-c-2', order: 2,
            text: 'Down, its petals peel back to expose the soft core — slash it savagely before the tendrils re-anchor (it WILL climb back up; resume snipping without panic). Two or three knockdowns end it. Collect the HEART CONTAINER, and catch the reunion: {{spoiler:Makar, shaken and apologetic, promises the Deku Tree he’ll never fly over the woods again}}. Gallery reminder: like all bosses, this one can’t be re-photographed — Second Quest handles it.',
            callouts: [
              { type: 'figurine', refId: 'fig-kalledemos', later: true, label: 'Kalle Demos — figurine via Second Quest color picto' }
            ] }
        ]
      },
      {
        id: 'c7-d', title: 'The Korok ceremony', collapsedByDefault: false,
        steps: [
          { id: 'c7-d-1', order: 1,
            text: 'Back in Forest Haven, the ceremony finally begins: Makar plays, the Koroks dance, and the Great Deku Tree produces {{spoiler:FARORE’S PEARL}} — two of three. Then the Koroks scatter across the whole Great Sea to plant the year’s seeds, and a new quest quietly goes live: EIGHT of those saplings will struggle, and only Forest Water delivered within 20 minutes of bottling can save them all.',
            callouts: [
              { type: 'sidequest', refId: 'sq-witheredtrees', label: 'The eight withered trees — now live (route first, scoop second!)' },
              { type: 'figurine', refId: 'fig-makar', later: true, label: 'Makar — pictograph the little maestro' }
            ] },
          { id: 'c7-d-2', order: 2,
            text: 'Completionist’s synergy: each scattered Korok stands watch by his sapling, which makes the watering run a PHOTO SAFARI too — bring the Deluxe Picto Box and collect all eight portraits island by island (Star Island, Cliff Plateau, Shark Island, Greatfish, Needle Rock, Private Oasis, Eastern Fairy, Mother & Child). Two birds, one very efficient boat.',
            callouts: [
              { type: 'figurine', refId: 'fig-rown', later: true, label: 'Rown — by his sapling' },
              { type: 'figurine', refId: 'fig-irch', later: true, label: 'Irch — by his sapling' },
              { type: 'figurine', refId: 'fig-aldo', later: true, label: 'Aldo — by his sapling' },
              { type: 'figurine', refId: 'fig-oakin', later: true, label: 'Oakin — by his sapling' },
              { type: 'figurine', refId: 'fig-drona', later: true, label: 'Drona — by his sapling' },
              { type: 'figurine', refId: 'fig-linder', later: true, label: 'Linder — by his sapling' },
              { type: 'figurine', refId: 'fig-elma', later: true, label: 'Elma — by his sapling' },
              { type: 'figurine', refId: 'fig-olivio', later: true, label: 'Olivio — by his sapling' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch08', number: 8, title: 'Nayru’s Pearl', bossName: null,
    intro: 'The hunt for the third pearl starts at a graveyard of an island and ends in a hidden cave behind home. In between: eavesdropping, a heist, your first BOMBS — and after this chapter, the Great Sea truly opens its pockets. The optional section here is one of the richest in the game.',
    sections: [
      {
        id: 'c8-a', title: 'The broken isle', collapsedByDefault: false,
        steps: [
          { id: 'c8-a-1', order: 1,
            text: 'Set sail for Greatfish Isle, home of the water spirit Jabun — and find it torn to pieces, {{spoiler:shattered by Ganon’s searching}}. The sky closes in and an unnatural storm settles over the whole sea. Quill swoops in with the intelligence you need: Jabun fled to a secret cave behind OUTSET ISLAND, and Tetra’s pirates — who know it — are on Windfall, provisioning for the same trip.',
            callouts: [
              { type: 'heart', refId: 'hp-20', label: 'Piece of Heart — climb and glide to the top of the broken isle while you’re here' }
            ] }
        ]
      },
      {
        id: 'c8-b', title: 'Thieves’ bombs', collapsedByDefault: false,
        steps: [
          { id: 'c8-b-1', order: 1,
            text: 'On rain-lashed Windfall, the Bomb Shop’s lights burn late. Sneak around the back and listen in: {{spoiler:the pirates have trussed up Cannon the shopkeeper and helped themselves to his stock}} — and, crucially, you overhear the PASSWORD for boarding their ship.',
            callouts: [] },
          { id: 'c8-b-2', order: 2,
            text: 'Down at the dock, give the password and climb aboard. Below deck, Niko is delighted to see his junior again — and his rope-swinging course got a promotion too. Beat round two (patience on the swings; wait for the full forward arc) and his “treasure beyond your wildest dreams” turns out to be exactly that: the pirates’ stolen BOMBS. Your bomb bag starts at 30; your boat can now fire its CANNON at will.',
            callouts: [] }
        ]
      },
      {
        id: 'c8-c', title: 'Jabun and the third pearl', collapsedByDefault: false,
        steps: [
          { id: 'c8-c-1', order: 1,
            text: 'Sail home through the storm to Outset and follow the cliffs around to the back of the island, where a huge stone slab seals a cave mouth. Ride the swells and time your CANNON shots to smash the door — the waves want to throw off your aim; fire on the rise.',
            callouts: [] },
          { id: 'c8-c-2', order: 2,
            text: 'Inside waits JABUN, enormous and unbothered. He and the King of Red Lions confer entirely in untranslated ancient Hylian — one of the game’s best quiet jokes, and worth replaying someday with the Second Quest’s translations. What matters tonight: {{spoiler:the storm lifts, and NAYRU’S PEARL is yours}}. All three pearls at last — the sea itself is about to show you why it wanted them.',
            callouts: [
              { type: 'figurine', refId: 'fig-jabun', later: true, label: 'Jabun — figurine via Lenzo’s Legendary Pictograph' }
            ] }
        ]
      },
      {
        id: 'c8-d', title: 'The sea opens up — a bombs-in-hand harvest (optional)', collapsedByDefault: true,
        steps: [
          { id: 'c8-d-1', order: 1,
            text: 'FAIRY RUN! Bombs unlock four Great Fairy fountains, and the order matters for the bomb bags (first visited gives 60, second gives the full 99). Start at home: the boulder in Outset’s Forest of Fairies hides the Bigger Wallet — you will desperately want wallet room for what Tingle charges later. Then Northern Fairy Island’s great shell (Biggest Wallet, 5,000), and the two bomb-bag fountains: Southern Fairy Island (bomb the boards) and Eastern Fairy Island (blast the sealed rock).',
            callouts: [
              { type: 'fairy', refId: 'fairy-outset', label: 'Great Fairy — Outset (bomb the forest boulder)' },
              { type: 'upgrade', refId: 'up-wallet1', label: 'Bigger Wallet — 1,000 rupees' },
              { type: 'fairy', refId: 'fairy-northern', label: 'Great Fairy — Northern Fairy Island' },
              { type: 'upgrade', refId: 'up-wallet2', label: 'Biggest Wallet — 5,000 rupees' },
              { type: 'fairy', refId: 'fairy-southern', label: 'Great Fairy — Southern Fairy Island' },
              { type: 'upgrade', refId: 'up-bombbag1', label: 'Bomb Bag — 60 (first bomb fairy)' },
              { type: 'fairy', refId: 'fairy-eastern', label: 'Great Fairy — Eastern Fairy Island' },
              { type: 'upgrade', refId: 'up-bombbag2', label: 'Bomb Bag — 99 (second bomb fairy)' }
            ] },
          { id: 'c8-d-2', order: 2,
            text: 'Bombable islands, now open: STAR ISLAND (a stone’s throw from the Forsaken Fortress) hides a combat cave with a Piece of Heart under its boulder. And at SPECTACLE ISLAND, Salvatore’s barrel-shooting game finally has a worthy customer — your cannon. First win: Piece of Heart. Second win: Treasure Chart 17.',
            callouts: [
              { type: 'secret', refId: 'cave-starisland', label: 'Secret cave — Star Island (bomb the boulder)' },
              { type: 'heart', refId: 'hp-36', label: 'Piece of Heart — clear the Star Island cave' },
              { type: 'heart', refId: 'hp-27', label: 'Piece of Heart — Spectacle Island cannon game' },
              { type: 'treasureChart', refId: 'tc-17', label: 'Treasure Chart 17 — win the game twice' }
            ] },
          { id: 'c8-d-3', order: 3,
            text: 'Shopping trip: near ROCK SPIRE ISLE floats a special Shop Ship run by a masked... let’s say “businessman of familiar silhouette.” His prices are outrageous and his stock is essential: an EMPTY BOTTLE for 500 rupees and a PIECE OF HEART for 950. With the wallet upgrades banked, both are buyable today — grind rupees by salvaging light rings at night or clearing camps. (Keep an eye out for the wandering Goron merchants on your travels, too — Zunari’s trading sequence moves one gift at a time.)',
            callouts: [
              { type: 'bottle', refId: 'bottle-beedle', label: 'Bottle #3 — Masked Beedle, 500 rupees' },
              { type: 'heart', refId: 'hp-21', label: 'Piece of Heart — Masked Beedle, 950 rupees' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch09', number: 9, title: 'Tower of the Gods', bossName: 'Gohdan',
    intro: 'Three pearls, three lonely statues, and then the sea splits open and a tower older than the ocean rises to examine you. The third dungeon is a proper test — tides, statues, and a bow you’ll use for the rest of the game. Pass, and a bell rings over the whole Great Sea.',
    sections: [
      {
        id: 'c9-a', title: 'Raising the tower', collapsedByDefault: false,
        steps: [
          { id: 'c9-a-1', order: 1,
            text: 'The three Triangle Islands — Northern, Eastern, Southern — stand in a perfect ring around an empty stretch of sea. Each holds a goddess statue; match each pearl to the statue bearing its goddess’s crest (the pedestals and your boat both make it unmissable). Place all three and the sky answers: golden light joins the islands into a triangle, and the TOWER OF THE GODS heaves itself out of the deep at its center.',
            callouts: [] }
        ]
      },
      {
        id: 'c9-b', title: 'The examination hall', collapsedByDefault: false,
        steps: [
          { id: 'c9-b-1', order: 1,
            text: 'The lower floors breathe with the tide — water rises and falls on a timer, turning floors into pools and back. Watch the rhythm, ride your boat between ledges where it lets you, and be patient: rushing the tide is how shields get wet. Electric YELLOW CHUCHUS punish careless swords (stun at range), and BEAMOS turrets sweep the halls with eye-lasers — sidle behind them.',
            callouts: [
              { type: 'figurine', refId: 'fig-yellowchuchu', later: true, label: 'Yellow ChuChu — gallery subject' },
              { type: 'figurine', refId: 'fig-beamos', later: true, label: 'Beamos — gallery subject' }
            ] },
          { id: 'c9-b-2', order: 2,
            text: 'The tower’s riddle: three servant statues must be carried home to the great hall. Some just need strong arms and careful jumps; one sits beyond a door only something SMALL can pass. A stone tablet mid-dungeon teaches the answer — the COMMAND MELODY, which lets your spirit possess and steer a statue directly. Unsettling? Extremely. Useful for the rest of the game? Also extremely.',
            callouts: [
              { type: 'song', refId: 'song-command', label: 'Command Melody — learned in the tower' },
              { type: 'figurine', refId: 'fig-armos', later: true, label: 'Armos — wakes up angry' },
              { type: 'figurine', refId: 'fig-armosknight', later: true, label: 'Armos Knight — wakes up angrier' }
            ] },
          { id: 'c9-b-3', order: 3,
            text: 'Tingle Tuner riders: the GODDESS TINGLE STATUE hides in these halls — ten rupees of Tingle Bomb on the sweet spot. And keep your eyes on side chests as you climb; the tower hoards a Treasure Chart among its rewards.',
            callouts: [
              { type: 'item', refId: 'tingle-goddess', later: true, label: 'Goddess Tingle Statue — Tingle Bomb the hidden spot' }
            ] }
        ]
      },
      {
        id: 'c9-c', title: 'The Hero’s Bow', collapsedByDefault: false,
        steps: [
          { id: 'c9-c-1', order: 1,
            text: 'In a bare arena, the tower presents its practical exam: a DARKNUT, an armored knight with actual swordsmanship. Circle with L-target, parry or roll behind him, and strike the exposed back — piece by piece his armor crashes off until he fights bare and furious. He drops a KNIGHT’S CREST when he falls: start the collection, because Orca on Outset teaches the Hurricane Spin for ten of them.',
            callouts: [
              { type: 'figurine', refId: 'fig-darknut', later: true, label: 'Darknut — gallery subject' },
              { type: 'upgrade', refId: 'up-hurricane', later: true, label: 'Hurricane Spin — 10 Knight’s Crests to Orca' }
            ] },
          { id: 'c9-c-2', order: 2,
            text: 'Your prize is the HERO’S BOW — from here to the credits, the answer to half the game’s questions. Sixty-arrow and ninety-nine-arrow quivers wait at two fairy fountains you can’t crack yet (Skull Hammer required); the bow itself starts modest, so make arrows count.',
            callouts: [] }
        ]
      },
      {
        id: 'c9-d', title: 'Boss: {{spoiler:Gohdan}}', collapsedByDefault: false,
        steps: [
          { id: 'c9-d-1', order: 1,
            text: 'Beyond the boss door floats the examiner itself: {{spoiler:GOHDAN, a colossal disembodied head flanked by two great hands}}. The sequence is strict and fair: ARROW the eye on each hand to knock them down, then ARROW both eyes on the face. When the head slumps with its mouth hanging open — BOMB down the hatch. Repeat until graduation.',
            callouts: [] },
          { id: 'c9-d-2', order: 2,
            text: 'Run dry mid-fight? Watch the hands slam the platform — the tower restocks arrows and bombs for diligent students; this examiner wants you to PASS. Take the HEART CONTAINER when it’s done. Gallery note: from this boss onward you may already own the Deluxe Picto Box — bring it into every boss room and snap the portrait mid-fight, because bosses never sit twice.',
            callouts: [
              { type: 'figurine', refId: 'fig-gohdan', later: true, label: 'Gohdan — pictograph DURING the fight (Deluxe box)' }
            ] },
          { id: 'c9-d-3', order: 3,
            text: 'Atop the tower hangs a great bell. Swing the clapper and RING IT — the toll rolls across the whole Great Sea, and a ring of golden light opens on the water below. The King of Red Lions sails you down, down, down... to a place the ocean has been keeping secret. (Next chapter. Oh, next chapter.)',
            callouts: [] }
        ]
      },
      {
        id: 'c9-e', title: 'The bow changes everything (do these now)', collapsedByDefault: true,
        steps: [
          { id: 'c9-e-1', order: 1,
            text: 'FAST TRAVEL, at last: somewhere on the sea (try the squares near Shark Island or Dragon Roost) a roaming CYCLONE hides Cyclos, Zephos’s vengeful brother. Sail in, keep your nerve, and shoot him THREE times with arrows before he flings you across the map. Impressed, he teaches the BALLAD OF GALES — warp between cyclone waypoints all over the sea. On a GameCube ocean with no Swift Sail, this song is worth more than any treasure; warp first, then fine-tune with the Wind’s Requiem.',
            callouts: [
              { type: 'song', refId: 'song-ballad', label: 'Ballad of Gales — shoot Cyclos 3× with arrows' },
              { type: 'figurine', refId: 'fig-cyclos', later: true, label: 'Cyclos — snap him mid-tantrum' }
            ] },
          { id: 'c9-e-2', order: 2,
            text: 'First warp destination: MOTHER & CHILD ISLES, the sealed twin rings only the Ballad can enter. Inside waits the QUEEN OF FAIRIES, who upgrades your bow with FIRE AND ICE ARROWS — a volcano and a glacier are in your future, and now you outrank both.',
            callouts: [
              { type: 'fairy', refId: 'fairy-queen', label: 'Fairy Queen — Fire & Ice Arrows' },
              { type: 'figurine', refId: 'fig-fairyqueen', later: true, label: 'Queen of Fairies — gallery subject' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch10', number: 10, title: 'Hyrule Castle & the Forsaken Fortress', bossName: 'Helmaroc King',
    intro: 'The bell tolls, the sea opens, and the game plays its greatest card. Then it hands you a very large hammer and sends you back to where everything started — to finish what a barrel and a catapult began. If you photograph one person before this chapter, make it Tetra.',
    sections: [
      {
        id: 'c10-a', title: 'Beneath the waves', collapsedByDefault: false,
        steps: [
          { id: 'c10-a-1', order: 1,
            text: 'Descend through the ring of golden light and step out into {{spoiler:HYRULE — the old kingdom itself, sealed beneath the Great Sea, drained of color and frozen in a single moment}}. Nothing moves. Even the birds hang in the air. Walk the causeway to the castle and take your time; the game certainly intends you to.',
            callouts: [] },
          { id: 'c10-a-2', order: 2,
            text: 'In the castle’s grand hall, a statue guards a secret: the floor mosaic is a sliding-block puzzle. Push the three great blocks so their faces complete the TRIFORCE pattern — the statue slides aside, opening the stair down into the light.',
            callouts: [] },
          { id: 'c10-a-3', order: 3,
            text: 'At the bottom of the world, in a shaft of sunlight, waits the blade of evil’s bane. Draw the MASTER SWORD from its pedestal — {{spoiler:and hear the click of the world unpausing. Color floods back. And every frozen Moblin and Darknut in the castle above wakes up mid-swing}}. The way out is through; treat it as a graduation ceremony for everything Orca taught you.',
            callouts: [] }
        ]
      },
      {
        id: 'c10-b', title: 'Return to the Forsaken Fortress', collapsedByDefault: false,
        steps: [
          { id: 'c10-b-1', order: 1,
            text: 'Sail for the fortress — no barrels, no catapults, no sneaking. This time the front door works. In the courtyard where the searchlights once cowed you, a cape drifts down from the tower: {{spoiler:PHANTOM GANON}}. Volley his energy balls back with sword swings (a deadly game of tennis), then close in and slash when he crumples. If you own the Deluxe Picto Box, SHOOT A PICTOGRAPH MID-FIGHT — this dance partner keeps limited appointments.',
            callouts: [
              { type: 'figurine', refId: 'fig-phantomganon', label: 'Phantom Ganon — pictograph during the fight!' }
            ] },
          { id: 'c10-b-2', order: 2,
            text: 'His parting gift is the SKULL HAMMER — enormous, ridiculous, wonderful. It flattens the pesky stakes you’ve seen all over the sea, cracks stubborn obstacles, and turns Miniblins into a percussion section. Climb the fortress the honest way now, hammer first: Moblins, Miniblins, Bombchus and rats all get in line. Deluxe box in hand? This is THE photo floor for the whole Forsaken Fortress gallery room.',
            callouts: [
              { type: 'figurine', refId: 'fig-moblin', label: 'Moblin — pictograph on the climb' },
              { type: 'figurine', refId: 'fig-miniblin', label: 'Miniblin — pictograph on the climb' },
              { type: 'figurine', refId: 'fig-bombchu', label: 'Bombchu — pictograph on the climb' },
              { type: 'figurine', refId: 'fig-rat', label: 'Rat — pictograph on the climb' }
            ] }
        ]
      },
      {
        id: 'c10-c', title: 'Boss: {{spoiler:Helmaroc King}}', collapsedByDefault: false,
        steps: [
          { id: 'c10-c-1', order: 1,
            text: 'At the top, the reunion you came for — cut short by rising water and a familiar shriek. Race up the spiral ramp as the flood chases you and {{spoiler:the great bird}} strafes the path; keep moving, shield the gusts, and don’t look down. On the rooftop arena, the real fight: dodge the dive, and when the beak slams down and STICKS in the deck — SKULL HAMMER to the mask. Crack it in stages, then slash the unmasked truth underneath.',
            callouts: [
              { type: 'figurine', refId: 'fig-helmaroc', label: 'Helmaroc King — pictograph during the fight!' }
            ] },
          { id: 'c10-c-2', order: 2,
            text: 'Take the HEART CONTAINER and the embrace that’s been fourteen chapters coming: {{spoiler:Aryll, safe, escorted home by pirates with hearts of gold under all that swagger}}. Upstairs, a colder scene — {{spoiler:Ganondorf himself, unbothered by the Master Sword, until Valoo and the Rito burn his tower down around him}}. And then, beneath the sea once more, the game turns its final page early: {{spoiler:Tetra is Princess Zelda — heir to the drowned kingdom — and stays hidden in Hyrule for her own safety}}.',
            callouts: [
              { type: 'figurine', refId: 'fig-tetra', later: true, label: 'Tetra — MISSABLE: photograph her BEFORE this reveal (pirate ship / Windfall)' }
            ] }
        ]
      },
      {
        id: 'c10-d', title: 'Hammer, fire, and homecomings (optional harvest)', collapsedByDefault: true,
        steps: [
          { id: 'c10-d-1', order: 1,
            text: 'QUIVER RUN: the Skull Hammer opens the last two fairy fountains. At WESTERN FAIRY ISLAND, pound the plunger stake to douse the ring of fire; at THORNED FAIRY ISLAND, hammer the stakes holding the thorns. Visit order sets the sizes — first gives the 60-arrow quiver, second the maximum 99.',
            callouts: [
              { type: 'fairy', refId: 'fairy-western', label: 'Great Fairy — Western Fairy Island' },
              { type: 'upgrade', refId: 'up-quiver1', label: 'Quiver — 60 arrows (first quiver fairy)' },
              { type: 'fairy', refId: 'fairy-thorned', label: 'Great Fairy — Thorned Fairy Island' },
              { type: 'upgrade', refId: 'up-quiver2', label: 'Quiver — 99 arrows (second quiver fairy)' }
            ] },
          { id: 'c10-d-2', order: 2,
            text: 'LIGHT THE LIGHTHOUSE: with Fire Arrows in your quiver, ride Windfall’s windmill to the top and shoot the beacon alight. Kreeb, its tiny devoted caretaker, pays in heart; and that night, glide from the windmill down to the small islet below — a chest stands where the light now falls, and it only opens after dark.',
            callouts: [
              { type: 'heart', refId: 'hp-13', label: 'Piece of Heart — Kreeb’s gratitude' },
              { type: 'heart', refId: 'hp-12', label: 'Piece of Heart — the islet chest, at night' }
            ] },
          { id: 'c10-d-3', order: 3,
            text: 'THE GIRLS COME HOME: with the fortress emptied, Mila and Maggie return to Windfall — with reversed fortunes and a fresh crop of quests. Catch MILA sneaking toward Zunari’s safe at night and choose the TOP dialogue option every time; her reform is genuine and her bottle is yours. Upstairs at the auction house, rich MAGGIE wants her letter delivered to a Moblin named Moe (collect his reply from Ilari at the cafe), and her father will trade a Piece of Heart for 20 SKULL NECKLACES — the fortress you just cleared drops them by the handful.',
            callouts: [
              { type: 'bottle', refId: 'bottle-mila', label: 'Bottle #4 — Mila’s midnight change of heart' },
              { type: 'heart', refId: 'hp-10', label: 'Piece of Heart — Maggie & Moe’s letter' },
              { type: 'heart', refId: 'hp-15', label: 'Piece of Heart — 20 Skull Necklaces' },
              { type: 'sidequest', refId: 'sq-maggiemoe', label: 'Maggie & Moe — the whole doomed romance' },
              { type: 'sidequest', refId: 'sq-skullnecklaces', label: 'Skull Necklaces delivered' }
            ] },
          { id: 'c10-d-4', order: 4,
            text: 'GALLERY WINDOW: the rescued families pose for portraits now — and while the pirates linger around Windfall, so does your chance at the crew. Six sailors plus their captain’s empty chair: photograph Gonzo, Senza, Nudge, Niko, Mako and Zuko before their ship sails out of easy reach.',
            callouts: [
              { type: 'figurine', refId: 'fig-mila', label: 'Mila — reformed and photogenic' },
              { type: 'figurine', refId: 'fig-milasfather', label: 'Mila’s Father — humbled' },
              { type: 'figurine', refId: 'fig-maggie', label: 'Maggie — new money' },
              { type: 'figurine', refId: 'fig-maggiesfather', label: 'Maggie’s Father — richer and none the wiser' },
              { type: 'figurine', refId: 'fig-gonzo', label: 'Gonzo — MISSABLE window' },
              { type: 'figurine', refId: 'fig-senza', label: 'Senza — MISSABLE window' },
              { type: 'figurine', refId: 'fig-nudge', label: 'Nudge — MISSABLE window' },
              { type: 'figurine', refId: 'fig-niko', label: 'Niko — MISSABLE window' },
              { type: 'figurine', refId: 'fig-mako', label: 'Mako — MISSABLE window' },
              { type: 'figurine', refId: 'fig-zuko', label: 'Zuko — MISSABLE window' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch11', number: 11, title: 'Earth Temple', bossName: 'Jalhalla',
    intro: '{{spoiler:The Master Sword is powerless — its edge dulled the moment Ganondorf touched it.}} To wake it you must restore the two temple sages, and that means learning to conduct a duet, mastering reflected light, and trusting a small, brave Rito with your life. First, though, two islands owe you a pair of boots and a stronger grip.',
    sections: [
      {
        id: 'c11-a', title: 'Fire and ice (get these first)', collapsedByDefault: false,
        steps: [
          { id: 'c11-a-1', order: 1,
            text: 'The temples demand two items you don’t have. Start at FIRE MOUNTAIN: fire an ICE ARROW into the erupting lava spout to freeze a platform, land, and dash into the cave before the timer thaws it. Inside wait the POWER BRACELETS — strength to lift heavy stones (and heavier statue-heads) all game long.',
            callouts: [
              { type: 'secret', refId: 'cave-firemountain', label: 'Secret cave — Fire Mountain (Ice Arrow the spout)' }
            ] },
          { id: 'c11-a-2', order: 2,
            text: 'Then ICE RING ISLE, its opposite: a FIRE ARROW thaws the frozen entrance. Inside is a slippery ice-slide puzzle — mind your footing and beat the re-freeze timer to claim the IRON BOOTS, which anchor you against gales and let you cross Gale Isle later. On the isle’s outer ledge, grab Treasure Chart 36 while you’re here.',
            callouts: [
              { type: 'secret', refId: 'cave-icering', label: 'Secret cave — Ice Ring Isle (Fire Arrow the entrance)' },
              { type: 'treasureChart', refId: 'tc-36', label: 'Treasure Chart 36 — Ice Ring Isle outer ledge' }
            ] }
        ]
      },
      {
        id: 'c11-b', title: 'Headstone Island & the Earth God’s Lyric', collapsedByDefault: false,
        steps: [
          { id: 'c11-b-1', order: 1,
            text: 'Sail to HEADSTONE ISLAND in the far southwest. At the foot of its great stone marker, use the Power Bracelets to heave the heavy slab aside, revealing the entrance below — and a stone tablet that teaches the EARTH GOD’S LYRIC. Conduct it and a vision stirs: {{spoiler:the ghost of Laruto, the murdered Zora sage, who reveals that her successor is Medli}}.',
            callouts: [
              { type: 'song', refId: 'song-earthlyric', label: 'Earth God’s Lyric — the temple’s key' },
              { type: 'figurine', refId: 'fig-laruto', later: true, label: 'Laruto — pictograph her spirit while she appears' }
            ] },
          { id: 'c11-b-2', order: 2,
            text: 'Fly back to Dragon Roost, find Medli, and teach her the Lyric — she realizes her true calling as the Earth Sage and asks to come with you. Return to Headstone Island together; her harp and your baton are the temple’s twin keys. Two side-catches worth grabbing in these waters: toss a Hyoi Pear to steer a seagull to Headstone’s peak for a Piece of Heart, and clear the nearby submarine for Treasure Chart 14.',
            callouts: [
              { type: 'figurine', refId: 'fig-medli', label: 'Medli — pictograph the Earth Sage' },
              { type: 'heart', refId: 'hp-34', label: 'Piece of Heart — Headstone peak, via Hyoi Pear seagull' },
              { type: 'submarine', refId: 'sub-headstone', label: 'Submarine — near Headstone Island (Treasure Chart 14)' },
              { type: 'treasureChart', refId: 'tc-14', label: 'Treasure Chart 14 — from that submarine' }
            ] }
        ]
      },
      {
        id: 'c11-c', title: 'The Earth Temple with Medli', collapsedByDefault: false,
        steps: [
          { id: 'c11-c-1', order: 1,
            text: 'This is a partner dungeon: use the COMMAND MELODY to take control of Medli, walk her to switches and far ledges, and — crucially — aim the beam of light her mirrored harp reflects. Many rooms are solved by bouncing sunlight onto crystal switches or onto the sun-shaped seals barring the doors. When you’re not steering her, she rides your throws and waits where you park her, so plan the light angles before you commit.',
            callouts: [
              { type: 'figurine', refId: 'fig-poe', later: true, label: 'Poe — gallery subject' },
              { type: 'figurine', refId: 'fig-stalfos', later: true, label: 'Stalfos — gallery subject' }
            ] },
          { id: 'c11-c-2', order: 2,
            text: 'The temple is a haunted house: ReDeads freeze you with their shriek (break free by mashing, or drop them with an arrow first), Floormasters drop from the ceiling to snatch you back to the entrance, and Dark ChuChus petrify at a touch of light. Midway, a STALFOS bruiser guards the MIRROR SHIELD — your own portable sunbeam, which removes Medli from most light-aiming duties and lets you press deeper alone.',
            callouts: [
              { type: 'figurine', refId: 'fig-redead', later: true, label: 'ReDead — gallery subject (brace yourself)' },
              { type: 'figurine', refId: 'fig-floormaster', later: true, label: 'Floormaster — gallery subject' },
              { type: 'figurine', refId: 'fig-darkchuchu', later: true, label: 'Dark ChuChu — petrifies in light' }
            ] },
          { id: 'c11-c-3', order: 3,
            text: 'Tingle Tuner riders: the EARTH TINGLE STATUE hides somewhere in the temple — ten rupees of Tingle Bomb marks it. Grab the Dungeon Map, Compass, and Big Key as you reflect your way down to the boss door.',
            callouts: [
              { type: 'item', refId: 'tingle-earth', later: true, label: 'Earth Tingle Statue — Tingle Bomb the hidden spot' }
            ] }
        ]
      },
      {
        id: 'c11-d', title: 'Boss: {{spoiler:Jalhalla}}', collapsedByDefault: false,
        steps: [
          { id: 'c11-d-1', order: 1,
            text: 'The boss chamber is pitch dark but for a single shaft of sunlight in the center. {{spoiler:JALHALLA, an enormous Poe,}} is immune to your sword — until you catch its reflection. Stand in the beam (or aim the Mirror Shield) to focus light onto the monster; caught in the glare it turns SOLID and shrinks. Now grab it with the Power Bracelets and HURL it into the spiked walls.',
            callouts: [
              { type: 'figurine', refId: 'fig-jalhalla', label: 'Jalhalla — pictograph during the fight!' }
            ] },
          { id: 'c11-d-2', order: 2,
            text: 'Shattered, {{spoiler:Jalhalla}} bursts into fifteen ordinary Poes that scatter and swarm — cut them all down (the Mirror Shield’s glare stuns clusters) to finish for good. Claim the HEART CONTAINER. Then the quiet payoff: {{spoiler:Medli takes her place in the temple to pray, and half the Master Sword’s power returns.}} One sage restored; one to go, on the wind.',
            callouts: [] },
          { id: 'c11-d-3', order: 3,
            text: 'Windfall bookkeeping: if you’ve been feeding Mrs. Marie Joy Pendants, this is around when the HERO’S CHARM becomes available — a further donation past the 20-pendant Cabana Deed earns the charm that shows enemy health bars. (Commonly cited as 40 more pendants; verify the exact count in game.) Keep pocketing every golden butterfly.',
            callouts: [
              { type: 'sidequest', refId: 'sq-heroscharm', later: true, label: 'Hero’s Charm — more Joy Pendants to Mrs. Marie' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch12', number: 12, title: 'Wind Temple', bossName: 'Molgera',
    intro: 'One sage down, one to go — and this one plays the violin. The second temple hides behind a gale so fierce it blows you off your feet, and inside, wind is both the obstacle and the answer. Bring the Iron Boots, and bring a little Korok who’s braver than he looks.',
    sections: [
      {
        id: 'c12-a', title: 'Gale Isle & the Wind God’s Aria', collapsedByDefault: false,
        steps: [
          { id: 'c12-a-1', order: 1,
            text: 'Sail to GALE ISLE in the far northwest. A ferocious wind screams out of the cave mouth, strong enough to fling you back into the sea — until you equip the IRON BOOTS and simply walk into the teeth of it, cape snapping, head down. Inside, a stone slab teaches the WIND GOD’S ARIA, the Wind Temple’s key.',
            callouts: [
              { type: 'song', refId: 'song-windaria', label: 'Wind God’s Aria — learned on Gale Isle' }
            ] },
          { id: 'c12-a-2', order: 2,
            text: 'You know the rhythm from the Earth Temple: this song needs a sage to sing it with you. That sage is MAKAR, the little Korok violinist you rescued from the Forbidden Woods. Fly to Forest Haven, find him among the Koroks, and teach him the Aria — he’s astonished to learn he’s the Wind Sage, and just brave enough to come along.',
            callouts: [
              { type: 'figurine', refId: 'fig-makar', label: 'Makar — pictograph the Wind Sage' }
            ] }
        ]
      },
      {
        id: 'c12-b', title: 'The Wind Temple with Makar', collapsedByDefault: false,
        steps: [
          { id: 'c12-b-1', order: 1,
            text: 'Bring Makar back to Gale Isle and descend together. This is the mirror of the Earth Temple: use the COMMAND MELODY to take control of Makar, who can FLY short distances on the wind (perfect for crossing gaps you can’t) and, crucially, PLANT SEEDS in patches of soil to sprout climbable vines and bramble platforms. Half the temple is “where does Makar need to stand, and what should he plant?”',
            callouts: [
              { type: 'figurine', refId: 'fig-wizzrobe', later: true, label: 'Wizzrobe — gallery subject (they summon monsters here)' },
              { type: 'figurine', refId: 'fig-peahat', later: true, label: 'Peahat — gallery subject' }
            ] },
          { id: 'c12-b-2', order: 2,
            text: 'The dungeon’s treasure is the HOOKSHOT — fire it to grapple distant chests and pull them (and yourself) across chasms, stun enemies, and, yes, yank Makar to you when he’s stranded. Big vertical rooms with fan-driven updrafts and Wizzrobes summoning reinforcements fill the back half; the Hookshot turns their high ledges into shortcuts. Watch for Floormasters and clingy Morths, too.',
            callouts: [
              { type: 'figurine', refId: 'fig-floormaster', later: true, label: 'Floormaster — gallery subject' },
              { type: 'figurine', refId: 'fig-morth', later: true, label: 'Morth — gallery subject' }
            ] },
          { id: 'c12-b-3', order: 3,
            text: 'Tingle Tuner riders: the WIND TINGLE STATUE — the last of the five — hides in this temple. Ten rupees of Tingle Bomb on the sweet spot reveals it, completing the Tingle Statues checklist. Grab the Dungeon Map, Compass, and Big Key on your way to the boss door.',
            callouts: [
              { type: 'item', refId: 'tingle-wind', later: true, label: 'Wind Tingle Statue — the 5th and final one' }
            ] }
        ]
      },
      {
        id: 'c12-c', title: 'Boss: {{spoiler:Molgera}}', collapsedByDefault: false,
        steps: [
          { id: 'c12-c-1', order: 1,
            text: 'The boss room is a pit of sand. {{spoiler:MOLGERA, a giant burrowing sand-wyrm,}} erupts and dives, tracking you beneath the surface (watch the sand ripple toward you and sidestep the lunge). Its weak point is its own tongue: when it rears up to strike, HOOKSHOT the tongue to yank the whole beast out of the sand, helpless — then rush in with the Master Sword.',
            callouts: [
              { type: 'figurine', refId: 'fig-molgera', label: 'Molgera — pictograph during the fight!' }
            ] },
          { id: 'c12-c-2', order: 2,
            text: 'Hurt, {{spoiler:Molgera}} spawns little burrowing larvae that mob you — Hookshot or slash them fast, then re-hook the parent’s tongue whenever it lunges. A few good yank-and-slash cycles finish it. Take the HEART CONTAINER, and the payoff you’ve been building toward: {{spoiler:Makar takes up his prayer in the temple, and the Master Sword blazes back to FULL power — the blade of evil’s bane, whole again.}} Both sages restored. Now there’s only one place left to sail.',
            callouts: [] }
        ]
      }
    ]
  },
  {
    id: 'ch13', number: 13, title: 'The Triforce', bossName: null,
    intro: 'The King asks for the Triforce of Courage, shattered into eight shards and scattered across the sea floor. This is the game’s great treasure hunt — and, on GameCube, its most demanding stretch: EIGHT Triforce Charts, each deciphered by Tingle for 398 rupees (3,184 in all), then eight shards salvaged from the deep. It’s also the natural home for everything else on the sea. Take your time; this is the chapter the whole tracker was built for.',
    sections: [
      {
        id: 'c13-a', title: 'Before the hunt: charts about charts', collapsedByDefault: false,
        steps: [
          { id: 'c13-a-1', order: 1,
            text: 'Two charts make the whole hunt sane — get them first. The IN-CREDIBLE CHART arrives in your mailbox (pay the 201-rupee postage): it marks the sea squares of all eight Triforce sectors, so you know exactly where to salvage once a chart is deciphered. And the GHOST SHIP CHART hides in the warp-jar maze inside DIAMOND STEPPE ISLAND’s secret cave — Hookshot up into the pots and follow them to the chest. It reveals where the Ghost Ship appears for each phase of the moon.',
            callouts: [
              { type: 'specialChart', refId: 'sp-incredible', label: 'IN-credible Chart — mailbox, 201 rupees (marks the 8 sectors)' },
              { type: 'specialChart', refId: 'sp-ghostship', label: 'Ghost Ship Chart — Diamond Steppe secret cave' },
              { type: 'secret', refId: 'cave-diamondsteppe', label: 'Secret cave — Diamond Steppe (warp-jar maze)' }
            ] },
          { id: 'c13-a-2', order: 2,
            text: 'While you’re at Diamond Steppe: a Big Octo circles nearby (100 rupees), and Treasure Chart 23 salvages a Piece of Heart in these waters. Bank them now — efficient sailing is the whole game on GameCube.',
            callouts: [
              { type: 'bigOcto', refId: 'octo-diamond', label: 'Big Octo — Diamond Steppe (8 eyes, 100 rupees)' },
              { type: 'heart', refId: 'hp-39', label: 'Piece of Heart — salvage with Treasure Chart 23' }
            ] }
        ]
      },
      {
        id: 'c13-b', title: 'The eight Triforce Charts', collapsedByDefault: false,
        steps: [
          { id: 'c13-b-1', order: 1,
            text: 'ISLET OF STEEL (Chart 1) & GHOST SHIP (Chart 4). At the Islet of Steel, bomb the patrolling warships, then sail into the low opening to reach the chart chest inside. And with the Ghost Ship Chart read, use the Song of Passing to summon the correct moon, sail the spectral ship where it appears, and clear the ghosts inside for Triforce Chart 4.',
            callouts: [
              { type: 'triforceChart', refId: 'tfc-1', label: 'Triforce Chart 1 — Islet of Steel' },
              { type: 'triforceChart', refId: 'tfc-4', label: 'Triforce Chart 4 — inside the Ghost Ship' },
              { type: 'sidequest', refId: 'sq-ghostship', label: 'The Ghost Ship — hunted down' }
            ] },
          { id: 'c13-b-2', order: 2,
            text: 'STONE WATCHER (Chart 7) & OVERLOOK (Chart 8) — the two Darknut caves. Under Stone Watcher Island’s great stone head (Power Bracelets to lift it) lies a gauntlet of trial rooms ending in Triforce Chart 7. On Overlook Island, Hookshot up the palm trees to the hidden hole and survive its shrine-room fights — including paired Darknuts — for Triforce Chart 8. Both drop Knight’s Crests; feed Orca’s Hurricane Spin tally.',
            callouts: [
              { type: 'triforceChart', refId: 'tfc-7', label: 'Triforce Chart 7 — Stone Watcher Island cave' },
              { type: 'secret', refId: 'cave-stonewatcher', label: 'Secret cave — Stone Watcher Island' },
              { type: 'triforceChart', refId: 'tfc-8', label: 'Triforce Chart 8 — Overlook Island cave' },
              { type: 'secret', refId: 'cave-overlook', label: 'Secret cave — Overlook Island' }
            ] },
          { id: 'c13-b-3', order: 3,
            text: 'BIRD’S PEAK ROCK (Chart 3) & NEEDLE ROCK light ring (Chart 5). At Bird’s Peak Rock, toss Hyoi Pears to steer seagulls into all the switches on the rock spires, opening the sealed cave and its Triforce Chart 3. And at night, a golden LIGHT RING glows on the water near Needle Rock Isle — sink the golden warship inside it with cannon fire, then grapple up Triforce Chart 5. (The Light Ring Chart, if you’ve found it, marks every such ring.)',
            callouts: [
              { type: 'triforceChart', refId: 'tfc-3', label: 'Triforce Chart 3 — Bird’s Peak Rock cave' },
              { type: 'secret', refId: 'cave-birdspeak', label: 'Secret cave — Bird’s Peak Rock' },
              { type: 'triforceChart', refId: 'tfc-5', label: 'Triforce Chart 5 — golden warship, Needle Rock light ring' },
              { type: 'specialChart', refId: 'sp-lightring', label: 'Light Ring Chart — marks the night light rings' }
            ] },
          { id: 'c13-b-4', order: 4,
            text: 'PRIVATE OASIS (Chart 2) & SAVAGE LABYRINTH (Chart 6) — the two you may already hold. If you’ve solved the cabana (see the side-quest section below), Triforce Chart 2 is in its basement labyrinth. And Triforce Chart 6 waits on floor 30 of the Savage Labyrinth beneath Outset — which, if you push on to floor 50, also hands over a Piece of Heart.',
            callouts: [
              { type: 'triforceChart', refId: 'tfc-2', label: 'Triforce Chart 2 — Private Oasis cabana labyrinth' },
              { type: 'triforceChart', refId: 'tfc-6', label: 'Triforce Chart 6 — Savage Labyrinth floor 30' }
            ] }
        ]
      },
      {
        id: 'c13-c', title: 'Tingle’s price & the salvage', collapsedByDefault: false,
        steps: [
          { id: 'c13-c-1', order: 1,
            text: 'A Triforce Chart is useless until Tingle reads it. Sail to TINGLE ISLAND (his chart marks it) and hand him each chart for 398 RUPEES apiece — that’s 3,184 rupees to decipher all eight. This is why the two wallet upgrades matter so much: without the 5,000-rupee wallet you’ll be making a lot of rupee-grinding trips. Deciphered, each chart finally shows the X where its shard sank.',
            callouts: [
              { type: 'figurine', refId: 'fig-ankle', later: true, label: 'Ankle — pictograph Tingle’s brother on the island' },
              { type: 'figurine', refId: 'fig-davidjr', later: true, label: 'David Jr. — the green-suited “brother”' }
            ] },
          { id: 'c13-c-2', order: 2,
            text: 'Now the salvage. Sail to each deciphered X, hover over the glowing spot, and haul up the shard with the Grappling Hook — eight times, all across the Great Sea. When the last TRIFORCE SHARD rises from the deep, the Triforce of Courage reassembles in a swell of music. The King of Red Lions turns for the one place left: down through the sea, to Hyrule, and the tower waiting under the waves.',
            callouts: [] }
        ]
      },
      {
        id: 'c13-d', title: 'While you’re out here: the great sea harvest (optional)', collapsedByDefault: true,
        steps: [
          { id: 'c13-d-1', order: 1,
            text: 'THE CABANA. Trade Mrs. Marie 20 Joy Pendants for the Cabana Deed (if you haven’t), then sail to the PRIVATE OASIS. Douse the fireplace and drop into the basement labyrinth for Triforce Chart 2; upstairs, solve the sliding-picture puzzle for a Piece of Heart. A Big Octo (100 rupees) also circles the oasis.',
            callouts: [
              { type: 'sidequest', refId: 'sq-cabanadeed', label: 'Cabana Deed — 20 Joy Pendants to Mrs. Marie' },
              { type: 'heart', refId: 'hp-22', label: 'Piece of Heart — cabana sliding puzzle' },
              { type: 'sidequest', refId: 'sq-cabanapuzzle', label: 'Cabana slide puzzle solved' },
              { type: 'bigOcto', refId: 'octo-oasis', label: 'Big Octo — Private Oasis (8 eyes, 100 rupees)' }
            ] },
          { id: 'c13-d-2', order: 2,
            text: 'SAVAGE LABYRINTH. Under the headland boulder on Outset, fifty floors of pure combat. Bring potions and a full quiver; the Light Arrows help near the bottom. Floor 30 holds Triforce Chart 6, and clearing all the way to floor 50 earns a Piece of Heart. (GameCube reward — HD swapped it for the Hero’s Charm.)',
            callouts: [
              { type: 'secret', refId: 'cave-savage', label: 'Savage Labyrinth — under Outset’s headland boulder' },
              { type: 'sidequest', refId: 'sq-savage', label: 'Savage Labyrinth — all 50 floors' },
              { type: 'heart', refId: 'hp-03', label: 'Piece of Heart — floor 50' }
            ] },
          { id: 'c13-d-3', order: 3,
            text: 'THE WITHERED TREES. Bottle Forest Water at Forest Haven and water all eight withered saplings within 20 minutes: Star Island, Cliff Plateau Isles, Shark Island, Greatfish Isle, Needle Rock Isle, Private Oasis, Eastern Fairy Island, Mother & Child Isles. The Ballad of Gales makes the route possible — warp between clusters. The last tree blooms into a Piece of Heart, and each Korok poses for the gallery besides.',
            callouts: [
              { type: 'sidequest', refId: 'sq-witheredtrees', label: 'The eight withered trees — 20-minute run' },
              { type: 'heart', refId: 'hp-19', label: 'Piece of Heart — all eight watered' }
            ] },
          { id: 'c13-d-4', order: 4,
            text: 'BIG OCTOS (6) & THE MAGIC FAIRY. Under circling seagull swarms lurk six Big Octos — shoot every eye. Two-Eye Reef’s (4 eyes) hides the Great Fairy who DOUBLES your magic meter; do it before the Bird-Man Contest. Tingle Island and Seven-Star Isles (12 eyes each) give Pieces of Heart; Fire Mountain, Private Oasis and Diamond Steppe (8 eyes) pay 100 rupees.',
            callouts: [
              { type: 'bigOcto', refId: 'octo-twoeye', label: 'Big Octo — Two-Eye Reef (Great Fairy: double magic)' },
              { type: 'fairy', refId: 'fairy-twoeye', label: 'Great Fairy — Two-Eye Reef (double magic meter)' },
              { type: 'upgrade', refId: 'up-magic', label: 'Double Magic Meter' },
              { type: 'bigOcto', refId: 'octo-tingle', label: 'Big Octo — Tingle Island (12 eyes, Piece of Heart)' },
              { type: 'heart', refId: 'hp-23', label: 'Piece of Heart — Tingle Island Big Octo' },
              { type: 'bigOcto', refId: 'octo-sevenstar', label: 'Big Octo — Seven-Star Isles (12 eyes, Piece of Heart)' },
              { type: 'heart', refId: 'hp-24', label: 'Piece of Heart — Seven-Star Isles Big Octo' },
              { type: 'bigOcto', refId: 'octo-firemtn', label: 'Big Octo — Fire Mountain (8 eyes, 100 rupees)' }
            ] },
          { id: 'c13-d-5', order: 5,
            text: 'SUBMARINES (7). The Submarine Chart (Boating Course secret cave) marks them all. Clear each hold for its prize: Bomb Island (Bottle #2!), Five-Star Isles (Piece of Heart), Six-Eye Reef (Piece of Heart), Headstone Island (Chart 14), Northern Fairy Island (Chart 22), Crescent Moon Island (Chart 9), and the Flight Control Platform (Platform Chart).',
            callouts: [
              { type: 'specialChart', refId: 'sp-submarine', label: 'Submarine Chart — Boating Course secret cave' },
              { type: 'secret', refId: 'cave-boating', label: 'Secret cave — Boating Course' },
              { type: 'submarine', refId: 'sub-bomb', label: 'Submarine — Bomb Island (Bottle #2)' },
              { type: 'bottle', refId: 'bottle-submarine', label: 'Bottle #2 — Bomb Island submarine' },
              { type: 'submarine', refId: 'sub-fivestar', label: 'Submarine — Five-Star Isles (Piece of Heart)' },
              { type: 'heart', refId: 'hp-25', label: 'Piece of Heart — Five-Star Isles submarine' },
              { type: 'submarine', refId: 'sub-sixeye', label: 'Submarine — Six-Eye Reef (Piece of Heart)' },
              { type: 'heart', refId: 'hp-26', label: 'Piece of Heart — Six-Eye Reef submarine' },
              { type: 'submarine', refId: 'sub-crescent', label: 'Submarine — Crescent Moon Island (Chart 9)' },
              { type: 'submarine', refId: 'sub-northernfairy', label: 'Submarine — Northern Fairy Island (Chart 22)' },
              { type: 'submarine', refId: 'sub-fcp', label: 'Submarine — Flight Control Platform (Platform Chart)' },
              { type: 'specialChart', refId: 'sp-platform', label: 'Platform Chart — from the FCP submarine' }
            ] },
          { id: 'c13-d-6', order: 6,
            text: 'THE BIRD-MAN CONTEST. At the Flight Control Platform, beat the Deku Leaf distance record: set the wind straight down the runway, glide, and milk the cyclone updraft — the doubled magic meter makes it far easier. Reward: a Piece of Heart.',
            callouts: [
              { type: 'heart', refId: 'hp-28', label: 'Piece of Heart — Bird-Man Contest' }
            ] },
          { id: 'c13-d-7', order: 7,
            text: 'THE REMAINING SEA-FLOOR HEARTS. With charts deciphered, salvage the island- and sea-heart pieces you haven’t yet: Angular Isles (Chart 15) and its summit heart, Pawprint (Chart 30), Forest Haven (Chart 31), Five-Star Isles (Chart 33), Three-Eye Reef (Chart 38 — mind the cannons), plus the seagull-switch hearts at Needle Rock Isle and the gun-platform heart at Stone Watcher. The Island Hearts and Sea Hearts Charts mark these if you want a map.',
            callouts: [
              { type: 'heart', refId: 'hp-30', label: 'Piece of Heart — Angular Isles summit' },
              { type: 'heart', refId: 'hp-38', label: 'Piece of Heart — salvage, Angular Isles (Chart 15)' },
              { type: 'heart', refId: 'hp-40', label: 'Piece of Heart — salvage, Pawprint Isle (Chart 30)' },
              { type: 'heart', refId: 'hp-41', label: 'Piece of Heart — salvage, Forest Haven (Chart 31)' },
              { type: 'heart', refId: 'hp-42', label: 'Piece of Heart — salvage, Five-Star Isles (Chart 33)' },
              { type: 'heart', refId: 'hp-43', label: 'Piece of Heart — salvage, Three-Eye Reef (Chart 38)' },
              { type: 'heart', refId: 'hp-35', label: 'Piece of Heart — Needle Rock Isle seagull switch' },
              { type: 'heart', refId: 'hp-33', label: 'Piece of Heart — Stone Watcher gun platform' },
              { type: 'heart', refId: 'hp-29', label: 'Piece of Heart — Cliff Plateau Isles pillar' },
              { type: 'heart', refId: 'hp-32', label: 'Piece of Heart — Bomb Island Magtail cave' },
              { type: 'heart', refId: 'hp-37', label: 'Piece of Heart — salvage, Crescent Moon Island (Chart 11)' },
              { type: 'specialChart', refId: 'sp-islandhearts', label: 'Island Hearts Chart' },
              { type: 'specialChart', refId: 'sp-seahearts', label: 'Sea Hearts Chart' }
            ] },
          { id: 'c13-d-10', order: 10,
            text: 'WINDFALL LOOSE ENDS. With the Deluxe Picto Box in hand, close out the town’s photo quest: take a COLOR pictograph of Linda, show it to Anton, and once the bashful pair finally meet, talk to Linda at the cafe for a Piece of Heart. And keep chipping at the Nintendo Gallery — Carlov’s one-a-day pace means the 134 figurines are the last thing you’ll finish. The Song of Passing is your friend.',
            callouts: [
              { type: 'heart', refId: 'hp-09', label: 'Piece of Heart — Linda & Anton (color pictograph)' },
              { type: 'sidequest', refId: 'sq-gallery', label: 'Nintendo Gallery — the long haul to 134' }
            ] },
          { id: 'c13-d-8', order: 8,
            text: 'THE LONG COLLECTIONS. Now’s the time to close out the sea-wide hunts the checklists have been tracking: the 20 SECRET CAVES (Secret Cave Chart, salvaged at Overlook via Chart 13), the 6 BIG OCTOS, the remaining SUBMARINES, and the 23 BLUE CHUCHUS (their Blue Chu Jelly brews Doc Bandam’s finest potion — see the Blue ChuChus checklist for the island list). Every one of these has its own tab in this guide; sail with a checklist open.',
            callouts: [
              { type: 'specialChart', refId: 'sp-secretcave', label: 'Secret Cave Chart — salvaged at Overlook (Chart 13)' },
              { type: 'treasureChart', refId: 'tc-13', label: 'Treasure Chart 13 — salvages the Secret Cave Chart' }
            ] },
          { id: 'c13-d-9', order: 9,
            text: 'THE OCTO CHART & GREAT FAIRY CHART round out the special charts: the Octo Chart salvages at Northern Triangle Island (via Treasure Chart 26) and marks all six Big Octos; the Great Fairy Chart (salvaged near the reefs) marks every fairy fountain. And whenever you have the rupees, keep visiting Tingle — those 398-rupee deciphers won’t pay for themselves.',
            callouts: [
              { type: 'specialChart', refId: 'sp-octo', label: 'Octo Chart — salvaged at Northern Triangle Island' },
              { type: 'treasureChart', refId: 'tc-26', label: 'Treasure Chart 26 — salvages the Octo Chart' },
              { type: 'specialChart', refId: 'sp-greatfairy', label: 'Great Fairy Chart — marks all 8 fountains' }
            ] }
        ]
      }
    ]
  },
  {
    id: 'ch14', number: 14, title: 'Ganon’s Tower', bossName: 'Ganondorf',
    intro: 'Beneath the waves, an old kingdom holds its breath. Climb the tower, face every trial the game can restate, and finish the story on the roof of a drowned world.',
    sections: []
  }
];
