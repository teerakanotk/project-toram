// import { itemProps } from "@/types";

interface itemProps {
  name: string;
  status: string;
  obtain: string;
  image?: string;
}

// const oneHandedSwordItem: itemProps[] = [
//   {
//     name: "Flamberge",
//     status:
//       "ATK +120, Critical Rate +10, Fire Element, ATK +140, STR +7%, Physical Pierce +10%",
//     obtain: "Dropped by Flame Dragon",
//   },
//   {
//     name: "Odelon Sword",
//     status: "ATK +135, Critical Damage +5%, Critical Rate +15",
//     obtain: "Dropped by Odelon Machina",
//   },
//   {
//     name: "Venena Rapier",
//     status: "ATK +150, MATK +5%, INT +10",
//     obtain: "Dropped by Venena",
//   },
//   {
//     name: "Leon's Blade",
//     status: "ATK +140, STR +7%, Physical Pierce +10%",
//     obtain: "Dropped by Leon the Tyrant",
//   },
//   {
//     name: "Brutal Dragon Sword",
//     status: "ATK +125, ASPD +500, Critical Rate +10",
//     obtain: "Dropped by Brutal Dragon Decel",
//   },
//   {
//     name: "Gravicep Blade",
//     status: "ATK +130, Magic Pierce +7%, MP +300",
//     obtain: "Dropped by Gravicep",
//   },
//   {
//     name: "Anniversary Blade XIII",
//     status: "ATK +145, Stability +25%, Critical Rate +15",
//     obtain: "Anniversary Event Reward",
//   },
//   {
//     name: "Zwei-Hander",
//     status: "ATK +128, HP +500, DEF +10%",
//     obtain: "Dropped by Goovua",
//   },
//   {
//     name: "Ice Brand",
//     status: "ATK +135, Water Element, ASPD +400",
//     obtain: "Dropped by Crystal Titan",
//   },
//   {
//     name: "Sunlight Rapier",
//     status: "ATK +130, Light Element, MATK +5%",
//     obtain: "Dropped by Twilight Dragon",
//   },
//   {
//     name: "Inferno Sword",
//     status: "ATK +140, Fire Element, Stability +20%",
//     obtain: "Dropped by Hellfire Beast",
//   },
//   {
//     name: "Dainsleif",
//     status: "ATK +145, Darkness Element, ASPD +600",
//     obtain: "Dropped by Twilight Dragon",
//   },
//   {
//     name: "Executor Sword",
//     status: "ATK +138, Critical Rate +8, Stability +15%",
//     obtain: "Dropped by Gate Guardian",
//   },
//   {
//     name: "Durandal",
//     status: "ATK +142, Stability +30%, HP +1000",
//     obtain: "Dropped by Memoria",
//   },
//   {
//     name: "Rebellion Blade",
//     status: "ATK +136, STR +5%, Physical Pierce +8%",
//     obtain: "Dropped by Monster Hunter",
//   },
//   {
//     name: "Sylvan Saber",
//     status: "ATK +130, DEX +7%, ASPD +500",
//     obtain: "Dropped by Forestia",
//   },
//   {
//     name: "Crystal Sword",
//     status: "ATK +129, MATK +7%, INT +10",
//     obtain: "Dropped by Crystal Beast",
//   },
//   {
//     name: "Void Edge",
//     status: "ATK +140, Dark Element, Critical Rate +12",
//     obtain: "Dropped by Void Chimera",
//   },
//   {
//     name: "Runic Blade",
//     status: "ATK +137, Stability +22%, MP +350",
//     obtain: "Dropped by Elder Wizard",
//   },
//   {
//     name: "Tempest Saber",
//     status: "ATK +134, Wind Element, ASPD +600",
//     obtain: "Dropped by Tempest Dragon",
//   },
//   {
//     name: "Thornblade",
//     status: "ATK +132, Physical Pierce +9%, Stability +18%",
//     obtain: "Dropped by Nightmare Dragon",
//   },
//   {
//     name: "Abyssal Saber",
//     status: "ATK +139, Dark Element, HP +800",
//     obtain: "Dropped by Abyss Beast",
//   },
//   {
//     name: "Celestial Blade",
//     status: "ATK +146, Light Element, MATK +6%",
//     obtain: "Dropped by Astral Guardian",
//   },
//   {
//     name: "Stalwart Sword",
//     status: "ATK +133, DEF +15%, HP +900",
//     obtain: "Dropped by Iron Sentinel",
//   },
// ];

const oneHandedSwordItem: itemProps[] = [
  {
    name: "Accordion-fold Sword",
    status: "Base ATK: 1 (40%), Aggro+30%, Attack MP Recovery+3",
    obtain: "Blacksmith Zaldo - Sofia City",
  },
  {
    name: "Short Sword",
    status: "Base ATK: 10 (80%)",
    obtain: "Monster Pico (Lv 1)",
  },
  {
    name: "Short Sword",
    status: "Base ATK: 10 (80%)",
    obtain: "Blacksmith Zaldo - Sofia City",
  },
  {
    name: "Short Sword",
    status: "Base ATK: 10 (80%), Potential (15pt)",
    obtain: "Player Smith Skill",
  },
  {
    name: "Wood Sword",
    status: "Base ATK: 10 (40%), Potential (15pt)",
    obtain: "Player Smith Skill",
  },
  {
    name: "Longsword",
    status: "Base ATK: 17 (80%), MaxHP+50, Accuracy+1",
    obtain: "Blacksmith Zaldo - Sofia City",
  },
  {
    name: "Longsword",
    status: "Base ATK: 17 (80%), Potential (16pt),MaxHP+50, Accuracy+1",
    obtain: "Player Smith Skill",
  },

  {
    name: "Gladius",
    status: "Base ATK: 25 (80%), ASPD+5%, Critical Rate+1",
    obtain: "Monster Goblin (Lv 20)",
  },

  {
    name: "Gladius",
    status: "Base ATK: 25 (80%), ASPD+10%, Critical Rate+3",
    obtain: "Blacksmith Zaldo - Sofia City",
  },
  {
    name: "Gladius",
    status: "Base ATK: 25 (80%), Potential (18pt)",
    obtain: "Player Smith Skill",
  },
  {
    name: "Brutal Dragon Sword",
    status: "Base ATK: 27 (80%), ASPD+500, CSPD+500",
    obtain:
      "Boss Brutal Dragon Decel (Lv 30),Boss Brutal Dragon Decel (Lv 40), Boss Brutal Dragon Decel (Lv 50), Boss Brutal Dragon Decel (Lv 60)",
  },
  {
    name: "Brutal Dragon Sword",
    status: "Base ATK: 27 (80%), ASPD+500, CSPD+150",
    obtain: "Blacksmith Zaldo - Sofia City",
  },
  {
    name: "Brutal Dragon Sword",
    status: "Base ATK: 27 (80%), Potential (20pt)",
    obtain: "Player Smith Skill",
  },
  {
    name: "Brutal Dragon Sword",
    status: "Base ATK: 27 (80%), ASPD+250, CSPD+750",
    obtain: "Boss Brutal Dragon Decel (Lv 90) - Megiston 2016",
  },
  {
    name: "1st Anniv Sword",
    status:
      "Base ATK: 29 (80%), STR+1%, ATK+1%, Magic Resistance+6%, Attack MP Recovery+2",
    obtain: "Blacksmith Zaldo - Sofia City, Anniv Equipment Box I",
  },
];

const twoHandedSwordItem: itemProps[] = [
  {
    name: "Claymore",
    status: "Slow but high-damage",
    obtain: "Crafted from Iron Ingot",
  },
  {
    name: "Great Fang",
    status: "High knockback effect",
    obtain: "Drop from Canyon Beast",
  },
  {
    name: "Titan Slayer",
    status: "Bonus vs. large enemies",
    obtain: "Dropped in Giant’s Tomb",
  },
  {
    name: "Frozen Sword",
    status: "Inflicts Freeze",
    obtain: "Drop from Ice Spirit",
  },
  {
    name: "Volcanic Greatsword",
    status: "Fire-elemental damage",
    obtain: "Crafted using Lava Core",
  },
];

const bowItem: itemProps[] = [
  {
    name: "Hunting Bow",
    status: "Reliable for early game",
    obtain: "Purchased in El Scaro",
  },
  {
    name: "Elven Bow",
    status: "Boosts agility",
    obtain: "Quest: Forest Ally",
  },
  {
    name: "Piercer",
    status: "Ignores part of defense",
    obtain: "Drop from Hidden Archer",
  },
  {
    name: "Stormshot",
    status: "Deals lightning damage",
    obtain: "Drop: Storm Serpent",
  },
  {
    name: "Moonlight Bow",
    status: "Bonus crit at night",
    obtain: "Hidden chest in Night Forest",
  },
  {
    name: "Ashen Bow",
    status: "Burn chance on hit",
    obtain: "Crafted from Ember Shards",
  },
  {
    name: "Silent Sting",
    status: "No aggro when attacking",
    obtain: "Stealth Trial Reward",
  },
  {
    name: "Spiritwood Bow",
    status: "Increases mana regen",
    obtain: "Crafted with Spiritwood",
  },
  {
    name: "Ranger’s Grasp",
    status: "Faster draw speed",
    obtain: "Hunter's Guild Rank B Reward",
  },
  {
    name: "Frosttip Bow",
    status: "Slows enemies",
    obtain: "Drop: Ice Golem",
  },
  {
    name: "Widowmaker",
    status: "Critical on low HP targets",
    obtain: "Arena Shop",
  },
  {
    name: "Bloodthorn",
    status: "Life steal on hit",
    obtain: "Vampire Hunter Quest",
  },
  {
    name: "Skyfall Bow",
    status: "Aerial bonus damage",
    obtain: "Drop: Sky Harpy",
  },
  {
    name: "Wyrmfang Bow",
    status: "Increased beast damage",
    obtain: "Dragon Cave Expedition",
  },
  {
    name: "Phantom Shot",
    status: "Shoots spectral arrows",
    obtain: "Phantom Tower Floor 10",
  },
  {
    name: "Solarflare Bow",
    status: "Burn enemies over time",
    obtain: "Trial of Light",
  },
  {
    name: "Shadowbite",
    status: "Inflicts blind",
    obtain: "Assassin's Hideout Chest",
  },
  {
    name: "Ironwood Longbow",
    status: "Extra range",
    obtain: "Crafted: Ironwood + Silk String",
  },
  {
    name: "Twilight Archer",
    status: "Bonus damage at dusk",
    obtain: "Drop: Twilight Wolf",
  },
  {
    name: "Venomroot Bow",
    status: "Poison damage over time",
    obtain: "Crafted with Venomroot",
  },
  {
    name: "Crystal Curve",
    status: "Pierces two enemies",
    obtain: "Crystal Mines Lv2",
  },
  {
    name: "Darkfletch",
    status: "Increased stealth attacks",
    obtain: "Night Market Exclusive",
  },
  {
    name: "Goldtail Bow",
    status: "Increases gold drop",
    obtain: "Festive Event Reward",
  },
  {
    name: "Thunderwing",
    status: "Chance to stun",
    obtain: "Drop: Thunder Roc",
  },
  {
    name: "Jade Archer",
    status: "Grants poison immunity",
    obtain: "Jade Temple Questline",
  },
  {
    name: "Wolffang Bow",
    status: "Attack speed boost",
    obtain: "Alpha Wolf Boss Drop",
  },
  {
    name: "Obsidian Recurve",
    status: "Armor penetration",
    obtain: "Blackstone Vault",
  },
  {
    name: "Glass Arrow Bow",
    status: "Fragile but powerful",
    obtain: "Glass Desert Dungeon",
  },
  {
    name: "Cerulean Arc",
    status: "Water damage bonus",
    obtain: "Drop: Aqua Wyrm",
  },
  {
    name: "Infernal Bow",
    status: "Fire arrows on crit",
    obtain: "Hellgate Fortress",
  },
  {
    name: "Whisperwind",
    status: "Silent attacks",
    obtain: "Stealth Trial Advanced",
  },
  {
    name: "Runebound Bow",
    status: "Improves magic power",
    obtain: "Enchanter’s Tower",
  },
  {
    name: "Eagle Eye",
    status: "High accuracy",
    obtain: "Quest: Eyes of the Hunter",
  },
  {
    name: "Bleak Hollow Bow",
    status: "Fear debuff on enemies",
    obtain: "Haunted Forest Drop",
  },
  {
    name: "Featherstring",
    status: "Faster movement while aiming",
    obtain: "Raptor Nesting Grounds",
  },
  {
    name: "Pulse Bow",
    status: "Shoots energy bolts",
    obtain: "Arcane Reactor Core",
  },
  {
    name: "Gravedigger",
    status: "Damage undead",
    obtain: "Drop: Lich King",
  },
  {
    name: "Shattershot",
    status: "Causes armor break",
    obtain: "Trial of Blades",
  },
  {
    name: "Tempest Bow",
    status: "Storm AoE on hit",
    obtain: "Legendary Blacksmith Forge",
  },
  {
    name: "Blightthorn",
    status: "Corrupts enemies",
    obtain: "Forbidden Grove",
  },
  {
    name: "Arcstriker",
    status: "Static damage per second",
    obtain: "Drop: Thunder Titan",
  },
  {
    name: "Crescent Shot",
    status: "Deals arc-shaped AoE",
    obtain: "Moon Shrine Event",
  },
  {
    name: "Lava Seeker",
    status: "Fire immunity + burn effect",
    obtain: "Volcano Depths Chest",
  },
  {
    name: "Gilded Arrow",
    status: "Bonus EXP per kill",
    obtain: "Collector’s Pack",
  },
  {
    name: "Bonecarver",
    status: "Effective vs. armored foes",
    obtain: "Drop: Bone Knight",
  },
  {
    name: "Spirit Seeker",
    status: "Deals extra to ghosts",
    obtain: "Witch’s Tower Floor 3",
  },
  {
    name: "Sunpiercer",
    status: "Bonus in daylight",
    obtain: "Temple of the Sun God",
  },
  {
    name: "Dreamweaver",
    status: "Causes sleep",
    obtain: "Drop: Dream Dragon",
  },
  {
    name: "Echo String",
    status: "Reflects projectile damage",
    obtain: "Trial of Sound",
  },
  {
    name: "Frostshard Bow",
    status: "Shatter frozen enemies",
    obtain: "Frozen Wastes",
  },
];

const bowgunItem: itemProps[] = [
  {
    name: "Crossfire Mk.I",
    status: "Rapid-fire bowgun",
    obtain: "Buy from Armory",
  },
  {
    name: "Sniper-X",
    status: "High precision, slow reload",
    obtain: "Drop: Mercenary Sniper",
  },
  {
    name: "Bolt Thrower",
    status: "Pierces multiple enemies",
    obtain: "Drop from Mechanical Golem",
  },
  {
    name: "Burst Gun",
    status: "Short range, wide spread",
    obtain: "Crafted with Flame Chamber",
  },
  {
    name: "Shadow Gun",
    status: "Applies blind debuff",
    obtain: "Quest reward: Silent Hunt",
  },
];

const knuckleItem: itemProps[] = [
  {
    name: "Leather Knuckles",
    status: "Beginner martial weapon",
    obtain: "Given at Monk Training",
  },
  {
    name: "Iron Punchers",
    status: "Boosts DEF penetration",
    obtain: "Drop from Combat Trainer",
  },
  {
    name: "Thunder Gloves",
    status: "Adds electric damage",
    obtain: "Boss: Thunder Ape",
  },
  {
    name: "Wild Claws",
    status: "Boosts critical hit chance",
    obtain: "Drop from Jungle Beast",
  },
  {
    name: "Mystic Gauntlets",
    status: "Adds INT scaling",
    obtain: "Craft using Arcane Core",
  },
];

const magicDevicesItem: itemProps[] = [
  {
    name: "Elemental Sphere",
    status: "Adapts to nearby elements",
    obtain: "Drop: Elementals",
  },
  {
    name: "Star Relic",
    status: "Boosts spell range",
    obtain: "Drop: Astral Warden",
  },
  {
    name: "Wand Core",
    status: "Reduces MP cost",
    obtain: "Crafted using Pure Mana",
  },
  {
    name: "Void Orb",
    status: "Dark magic bonus",
    obtain: "Drop: Abyss Watcher",
  },
  {
    name: "Arc Device",
    status: "Boosts cast speed",
    obtain: "Drop: Tower Mage",
  },
];

const staffItem: itemProps[] = [
  {
    name: "Beginner Staff",
    status: "Standard magic boost",
    obtain: "Buy from Magic Shop",
  },
  {
    name: "Soul Rod",
    status: "Restores MP on crit",
    obtain: "Drop from Spirit Mage",
  },
  {
    name: "Wisdom Staff",
    status: "Boosts INT and MDEF",
    obtain: "Craft: Wisdom Trial",
  },
  {
    name: "Frost Staff",
    status: "Adds freeze effect",
    obtain: "Drop from Ice Shard",
  },
  {
    name: "Stormcaller",
    status: "Deals lightning AOE",
    obtain: "Drop: Thunder Cloud Boss",
  },
];

const halberdItem: itemProps[] = [
  {
    name: "Poleaxe",
    status: "Good for long reach",
    obtain: "Buy from Weapon Vendor",
  },
  {
    name: "Twin Blade Spear",
    status: "Double hit chance",
    obtain: "Drop: Twin Beast",
  },
  {
    name: "Dragon Halberd",
    status: "Bonus vs dragons",
    obtain: "Boss drop: Draconic Warden",
  },
  {
    name: "Sky Piercer",
    status: "Boosts aerial damage",
    obtain: "Found in Sky Fortress",
  },
  {
    name: "Runed Glaive",
    status: "Magic scaling boost",
    obtain: "Crafted with Rune Stone",
  },
];

const katanaItem: itemProps[] = [
  {
    name: "Practice Katana",
    status: "Light and fast",
    obtain: "Given at Samurai Dojo",
  },
  {
    name: "Moon Blade",
    status: "Crit bonus at night",
    obtain: "Hidden Shrine chest",
  },
  {
    name: "Phantom Edge",
    status: "Boosts evasion",
    obtain: "Drop from Ghost Duelist",
  },
  {
    name: "Demon Katana",
    status: "Curse damage",
    obtain: "Drop: Cursed Monk",
  },
  {
    name: "Silent Slash",
    status: "No aggro generation",
    obtain: "Quest: Shadow Path",
  },
];

const daggerItem: itemProps[] = [
  {
    name: "Steel Dagger",
    status: "Fast stab weapon",
    obtain: "Buy from Market",
  },
  {
    name: "Venom Fang",
    status: "Applies poison",
    obtain: "Drop from Snake Boss",
  },
  {
    name: "Shadow Blade",
    status: "High stealth bonus",
    obtain: "Quest reward: Cloak & Dagger",
  },
  {
    name: "Glass Knife",
    status: "High crit, low durability",
    obtain: "Rare drop: Crystal Thief",
  },
  {
    name: "Flame Dagger",
    status: "Adds fire effect",
    obtain: "Drop: Lava Wasp",
  },
];

const arrowItem: itemProps[] = [
  {
    name: "Iron Arrow",
    status: "Basic projectile",
    obtain: "Buy in stores",
  },
  {
    name: "Fire Arrow",
    status: "Burns target",
    obtain: "Crafted with Fire Core",
  },
  {
    name: "Frozen Arrow",
    status: "Freezes enemy",
    obtain: "Dropped by Ice Archer",
  },
  {
    name: "Lightning Bolt",
    status: "AOE shock",
    obtain: "Craft with Sky Stone",
  },
  {
    name: "Poison Arrow",
    status: "Applies DOT",
    obtain: "Crafted with Toxic Venom",
  },
];

const shieldItem: itemProps[] = [
  {
    name: "Wooden Shield",
    status: "Basic defense",
    obtain: "Buy from Smithy",
  },
  {
    name: "Iron Wall",
    status: "Boosts guard rate",
    obtain: "Drop from Stone Beast",
  },
  {
    name: "Aegis Shield",
    status: "Reduces magic damage",
    obtain: "Reward: Guild Defense Quest",
  },
  {
    name: "Mirror Shield",
    status: "Reflects spells",
    obtain: "Drop from Mirror Mage",
  },
  {
    name: "Tower Shield",
    status: "Reduces knockback",
    obtain: "Craft: Heavy Armor Set",
  },
];

const ninjutsuScrollItem: itemProps[] = [
  {
    name: "Scroll of Flames",
    status: "Creates fire trap",
    obtain: "Buy from Ninja Village",
  },
  {
    name: "Wind Veil Scroll",
    status: "Boosts evasion",
    obtain: "Quest reward: Breeze Path",
  },
  {
    name: "Shadow Cloak",
    status: "Grants invisibility",
    obtain: "Drop from Ninja Trainer",
  },
  {
    name: "Exploding Shuriken",
    status: "Throws explosive star",
    obtain: "Craft with Bomb Tag",
  },
  {
    name: "Smoke Bomb Scroll",
    status: "Escape from combat",
    obtain: "Dropped by Rogue Ninja",
  },
];

const armorItem: itemProps[] = [
  {
    name: "Traveler's Tunic",
    status: "Basic starter gear",
    obtain: "Beginner Quest Reward",
  },
  {
    name: "Steel Armor",
    status: "High defense",
    obtain: "Craft with Iron Plate",
  },
  {
    name: "Mana Robe",
    status: "Boosts MP recovery",
    obtain: "Drop from Mage Ghost",
  },
  {
    name: "Assassin Garb",
    status: "Increases stealth",
    obtain: "Reward from Stealth Mission",
  },
  {
    name: "Gladiator Plate",
    status: "Bonus in PvP",
    obtain: "Purchase from Arena Vendor",
  },
];

const additionalItem: itemProps[] = [
  {
    name: "Feather Cape",
    status: "Boosts movement speed",
    obtain: "Drop from Wind Beast",
  },
  {
    name: "Thorn Necklace",
    status: "Returns damage",
    obtain: "Drop from Cursed Tree",
  },
  {
    name: "Crystal Charm",
    status: "Boosts all stats slightly",
    obtain: "Hidden cave treasure",
  },
  {
    name: "Ghost Ring",
    status: "Pass through enemies",
    obtain: "Drop from Phantom King",
  },
  {
    name: "Hunter’s Pouch",
    status: "Bonus to drop rate",
    obtain: "Reward from Hunt Board",
  },
];

const specialItem: itemProps[] = [
  {
    name: "Hero's Emblem",
    status: "Raises all stats",
    obtain: "Final Quest Reward",
  },
  {
    name: "Time Relic",
    status: "Speeds up cooldowns",
    obtain: "Time Rift Event",
  },
  {
    name: "Fate Core",
    status: "Chance to revive on KO",
    obtain: "Drop: Destiny Beast",
  },
  {
    name: "Greed Pendant",
    status: "Bonus gold on kills",
    obtain: "Drop: Greedy Ghost",
  },
  {
    name: "Wings of Light",
    status: "Float over traps",
    obtain: "Final Trial Bonus",
  },
];

// Export all item for EquipmentPage
export const equipmentItem: Record<
  string,
  { title: string; item: itemProps[] }
> = {
  "one-handed-sword": {
    title: "One-Handed Sword",
    item: oneHandedSwordItem,
  },
  "two-handed-sword": {
    title: "Two-Handed Sword",
    item: twoHandedSwordItem,
  },
  bow: {
    title: "Bow",
    item: bowItem,
  },
  bowgun: {
    title: "Bowgun",
    item: bowgunItem,
  },
  knuckle: {
    title: "Knuckle",
    item: knuckleItem,
  },
  "magic-devices": {
    title: "Magic Devices",
    item: magicDevicesItem,
  },
  staff: {
    title: "Staff",
    item: staffItem,
  },
  halberd: {
    title: "Halberd",
    item: halberdItem,
  },
  katana: {
    title: "Katana",
    item: katanaItem,
  },
  dagger: {
    title: "Dagger",
    item: daggerItem,
  },
  arrow: {
    title: "Arrow",
    item: arrowItem,
  },
  shield: {
    title: "Shield",
    item: shieldItem,
  },
  "ninjutsu-scroll": {
    title: "Ninjutsu Scroll",
    item: ninjutsuScrollItem,
  },
  armor: {
    title: "Armor",
    item: armorItem,
  },
  additional: {
    title: "Additional",
    item: additionalItem,
  },
  special: {
    title: "Special",
    item: specialItem,
  },
};
