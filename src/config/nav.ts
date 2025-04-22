import * as Types from "@/types";

export const NavItem: Types.NavItemProps[] = [
  {
    title: "Guide",
    href: "/guide/1",
  },
  {
    title: "Map",
    href: "/map",
  },
  {
    title: "Item",
    href: "/item",
  },
  {
    title: "Equipment",
    href: "/equipment/one-handed-sword",
  },
];

// Define all sidebar items in a centralized structure
const sidebarItem: { [key: string]: Types.NavItemProps[] } = {
  guide: [{ title: "Guide", href: "/guide/1" }],
  map: [{ title: "Map", href: "/map" }],
  item: [{ title: "Item", href: "/item" }],
  equipment: [
    { title: "One-Handed Sword", href: "/equipment/one-handed-sword" },
    { title: "Two-Handed Sword", href: "/equipment/two-handed-sword" },
    { title: "Bow", href: "/equipment/bow" },
    { title: "Bowgun", href: "/equipment/bowgun" },
    { title: "Knuckle", href: "/equipment/knuckle" },
    { title: "Magic Devices", href: "/equipment/magic-devices" },
    { title: "Staff", href: "/equipment/staff" },
    { title: "Halberd", href: "/equipment/halberd" },
    { title: "Katana", href: "/equipment/katana" },
    { title: "Dagger", href: "/equipment/dagger" },
    { title: "Arrow", href: "/equipment/arrow" },
    { title: "Shield", href: "/equipment/shield" },
    { title: "Ninjutsu Scroll", href: "/equipment/ninjutsu-scroll" },
    { title: "Armor", href: "/equipment/armor" },
    { title: "Additional", href: "/equipment/additional" },
    { title: "Special", href: "/equipment/special" },
  ],
};

// Individual named exports
export const guideItem = sidebarItem.guide;
export const mapItem = sidebarItem.map;
export const itemItem = sidebarItem.item;
export const equipmentItem = sidebarItem.equipment;

export const EquipmentItem: Types.EquipmentItemTestProps = {
  "one-handed-sword": [
    {
      title: "Iron Saber",
      status: "Basic sword with reliable stats",
      obtain: "Purchased in Sofia City",
    },
    {
      title: "Steel Edge",
      status: "Slightly stronger than Iron Saber",
      obtain: "Crafted using 3 Steel Ingots",
    },
    {
      title: "Silver Fang",
      status: "Grants light bonus damage",
      obtain: "Dropped by Forest Wolf",
    },
    {
      title: "Crimson Blade",
      status: "Inflicts bleeding status",
      obtain: "Drop from Bandit Captain",
    },
    {
      title: "Runed Sword",
      status: "Enhances magic power",
      obtain: "Crafted with Arcane Core",
    },
    {
      title: "Knight’s Honor",
      status: "Boosts defense slightly",
      obtain: "Reward from Knight's Tournament",
    },
    {
      title: "Ghost Saber",
      status: "Deals bonus damage to undead",
      obtain: "Dropped by Ghost Knight",
    },
    {
      title: "Thunder Fang",
      status: "Adds lightning element",
      obtain: "Drop from Thunder Lizard",
    },
    {
      title: "Moonblade",
      status: "Extra crit rate at night",
      obtain: "Found in Moonlight Forest chest",
    },
    {
      title: "Dragonfang Sword",
      status: "Increased damage to dragon-type monsters",
      obtain: "Dropped by Elder Dragon",
    },
    {
      title: "Windcutter",
      status: "Boosts attack speed",
      obtain: "Reward from Wind Trial",
    },
    {
      title: "Bloodthirst",
      status: "Regain HP on crit hit",
      obtain: "Drop from Crimson Reaper",
    },
    {
      title: "Shadow Blade",
      status: "User becomes harder to detect",
      obtain: "Crafted using Dark Essence",
    },
    {
      title: "Holy Saber",
      status: "Increased damage to dark-element enemies",
      obtain: "Dropped by Fallen Paladin",
    },
    {
      title: "Venom Cutter",
      status: "Applies poison on hit",
      obtain: "Dropped by Jungle Scorpion",
    },
    {
      title: "Duelist’s Edge",
      status: "Grants bonus in 1v1 battles",
      obtain: "PVP Tournament Reward",
    },
    {
      title: "Frozen Saber",
      status: "Chance to freeze enemies",
      obtain: "Dropped by Ice Elemental",
    },
    {
      title: "Obsidian Sword",
      status: "Boosts physical attack",
      obtain: "Crafted from Obsidian Ore",
    },
    {
      title: "Flame Brand",
      status: "Applies burn effect on contact",
      obtain: "Drop from Fire Drake",
    },
    {
      title: "Warden’s Blade",
      status: "Reduces incoming damage slightly",
      obtain: "Guard Tower Trial Reward",
    },
  ],
  "two-handed-sword": [
    {
      title: "Claymore",
      status: "Slow but high-damage",
      obtain: "Crafted from Iron Ingot",
    },
    {
      title: "Great Fang",
      status: "High knockback effect",
      obtain: "Drop from Canyon Beast",
    },
    {
      title: "Titan Slayer",
      status: "Bonus vs. large enemies",
      obtain: "Dropped in Giant’s Tomb",
    },
    {
      title: "Frozen Sword",
      status: "Inflicts Freeze",
      obtain: "Drop from Ice Spirit",
    },
    {
      title: "Volcanic Greatsword",
      status: "Fire-elemental damage",
      obtain: "Crafted using Lava Core",
    },
  ],
  bow: [
    {
      title: "Hunting Bow",
      status: "Reliable for early game",
      obtain: "Purchased in El Scaro",
    },
    {
      title: "Elven Bow",
      status: "Boosts agility",
      obtain: "Quest: Forest Ally",
    },
    {
      title: "Piercer",
      status: "Ignores part of defense",
      obtain: "Drop from Hidden Archer",
    },
    {
      title: "Stormshot",
      status: "Deals lightning damage",
      obtain: "Drop: Storm Serpent",
    },
    {
      title: "Moonlight Bow",
      status: "Bonus crit at night",
      obtain: "Hidden chest in Night Forest",
    },
    {
      title: "Ashen Bow",
      status: "Burn chance on hit",
      obtain: "Crafted from Ember Shards",
    },
    {
      title: "Silent Sting",
      status: "No aggro when attacking",
      obtain: "Stealth Trial Reward",
    },
    {
      title: "Spiritwood Bow",
      status: "Increases mana regen",
      obtain: "Crafted with Spiritwood",
    },
    {
      title: "Ranger’s Grasp",
      status: "Faster draw speed",
      obtain: "Hunter's Guild Rank B Reward",
    },
    {
      title: "Frosttip Bow",
      status: "Slows enemies",
      obtain: "Drop: Ice Golem",
    },
    {
      title: "Widowmaker",
      status: "Critical on low HP targets",
      obtain: "Arena Shop",
    },
    {
      title: "Bloodthorn",
      status: "Life steal on hit",
      obtain: "Vampire Hunter Quest",
    },
    {
      title: "Skyfall Bow",
      status: "Aerial bonus damage",
      obtain: "Drop: Sky Harpy",
    },
    {
      title: "Wyrmfang Bow",
      status: "Increased beast damage",
      obtain: "Dragon Cave Expedition",
    },
    {
      title: "Phantom Shot",
      status: "Shoots spectral arrows",
      obtain: "Phantom Tower Floor 10",
    },
    {
      title: "Solarflare Bow",
      status: "Burn enemies over time",
      obtain: "Trial of Light",
    },
    {
      title: "Shadowbite",
      status: "Inflicts blind",
      obtain: "Assassin's Hideout Chest",
    },
    {
      title: "Ironwood Longbow",
      status: "Extra range",
      obtain: "Crafted: Ironwood + Silk String",
    },
    {
      title: "Twilight Archer",
      status: "Bonus damage at dusk",
      obtain: "Drop: Twilight Wolf",
    },
    {
      title: "Venomroot Bow",
      status: "Poison damage over time",
      obtain: "Crafted with Venomroot",
    },
    {
      title: "Crystal Curve",
      status: "Pierces two enemies",
      obtain: "Crystal Mines Lv2",
    },
    {
      title: "Darkfletch",
      status: "Increased stealth attacks",
      obtain: "Night Market Exclusive",
    },
    {
      title: "Goldtail Bow",
      status: "Increases gold drop",
      obtain: "Festive Event Reward",
    },
    {
      title: "Thunderwing",
      status: "Chance to stun",
      obtain: "Drop: Thunder Roc",
    },
    {
      title: "Jade Archer",
      status: "Grants poison immunity",
      obtain: "Jade Temple Questline",
    },
    {
      title: "Wolffang Bow",
      status: "Attack speed boost",
      obtain: "Alpha Wolf Boss Drop",
    },
    {
      title: "Obsidian Recurve",
      status: "Armor penetration",
      obtain: "Blackstone Vault",
    },
    {
      title: "Glass Arrow Bow",
      status: "Fragile but powerful",
      obtain: "Glass Desert Dungeon",
    },
    {
      title: "Cerulean Arc",
      status: "Water damage bonus",
      obtain: "Drop: Aqua Wyrm",
    },
    {
      title: "Infernal Bow",
      status: "Fire arrows on crit",
      obtain: "Hellgate Fortress",
    },
    {
      title: "Whisperwind",
      status: "Silent attacks",
      obtain: "Stealth Trial Advanced",
    },
    {
      title: "Runebound Bow",
      status: "Improves magic power",
      obtain: "Enchanter’s Tower",
    },
    {
      title: "Eagle Eye",
      status: "High accuracy",
      obtain: "Quest: Eyes of the Hunter",
    },
    {
      title: "Bleak Hollow Bow",
      status: "Fear debuff on enemies",
      obtain: "Haunted Forest Drop",
    },
    {
      title: "Featherstring",
      status: "Faster movement while aiming",
      obtain: "Raptor Nesting Grounds",
    },
    {
      title: "Pulse Bow",
      status: "Shoots energy bolts",
      obtain: "Arcane Reactor Core",
    },
    {
      title: "Gravedigger",
      status: "Damage undead",
      obtain: "Drop: Lich King",
    },
    {
      title: "Shattershot",
      status: "Causes armor break",
      obtain: "Trial of Blades",
    },
    {
      title: "Tempest Bow",
      status: "Storm AoE on hit",
      obtain: "Legendary Blacksmith Forge",
    },
    {
      title: "Blightthorn",
      status: "Corrupts enemies",
      obtain: "Forbidden Grove",
    },
    {
      title: "Arcstriker",
      status: "Static damage per second",
      obtain: "Drop: Thunder Titan",
    },
    {
      title: "Crescent Shot",
      status: "Deals arc-shaped AoE",
      obtain: "Moon Shrine Event",
    },
    {
      title: "Lava Seeker",
      status: "Fire immunity + burn effect",
      obtain: "Volcano Depths Chest",
    },
    {
      title: "Gilded Arrow",
      status: "Bonus EXP per kill",
      obtain: "Collector’s Pack",
    },
    {
      title: "Bonecarver",
      status: "Effective vs. armored foes",
      obtain: "Drop: Bone Knight",
    },
    {
      title: "Spirit Seeker",
      status: "Deals extra to ghosts",
      obtain: "Witch’s Tower Floor 3",
    },
    {
      title: "Sunpiercer",
      status: "Bonus in daylight",
      obtain: "Temple of the Sun God",
    },
    {
      title: "Dreamweaver",
      status: "Causes sleep",
      obtain: "Drop: Dream Dragon",
    },
    {
      title: "Echo String",
      status: "Reflects projectile damage",
      obtain: "Trial of Sound",
    },
    {
      title: "Frostshard Bow",
      status: "Shatter frozen enemies",
      obtain: "Frozen Wastes",
    },
  ],
  bowgun: [
    {
      title: "Crossfire Mk.I",
      status: "Rapid-fire bowgun",
      obtain: "Buy from Armory",
    },
    {
      title: "Sniper-X",
      status: "High precision, slow reload",
      obtain: "Drop: Mercenary Sniper",
    },
    {
      title: "Bolt Thrower",
      status: "Pierces multiple enemies",
      obtain: "Drop from Mechanical Golem",
    },
    {
      title: "Burst Gun",
      status: "Short range, wide spread",
      obtain: "Crafted with Flame Chamber",
    },
    {
      title: "Shadow Gun",
      status: "Applies blind debuff",
      obtain: "Quest reward: Silent Hunt",
    },
  ],
  knuckle: [
    {
      title: "Leather Knuckles",
      status: "Beginner martial weapon",
      obtain: "Given at Monk Training",
    },
    {
      title: "Iron Punchers",
      status: "Boosts DEF penetration",
      obtain: "Drop from Combat Trainer",
    },
    {
      title: "Thunder Gloves",
      status: "Adds electric damage",
      obtain: "Boss: Thunder Ape",
    },
    {
      title: "Wild Claws",
      status: "Boosts critical hit chance",
      obtain: "Drop from Jungle Beast",
    },
    {
      title: "Mystic Gauntlets",
      status: "Adds INT scaling",
      obtain: "Craft using Arcane Core",
    },
  ],
  "magic-devices": [
    {
      title: "Elemental Sphere",
      status: "Adapts to nearby elements",
      obtain: "Drop: Elementals",
    },
    {
      title: "Star Relic",
      status: "Boosts spell range",
      obtain: "Drop: Astral Warden",
    },
    {
      title: "Wand Core",
      status: "Reduces MP cost",
      obtain: "Crafted using Pure Mana",
    },
    {
      title: "Void Orb",
      status: "Dark magic bonus",
      obtain: "Drop: Abyss Watcher",
    },
    {
      title: "Arc Device",
      status: "Boosts cast speed",
      obtain: "Drop: Tower Mage",
    },
  ],
  staff: [
    {
      title: "Beginner Staff",
      status: "Standard magic boost",
      obtain: "Buy from Magic Shop",
    },
    {
      title: "Soul Rod",
      status: "Restores MP on crit",
      obtain: "Drop from Spirit Mage",
    },
    {
      title: "Wisdom Staff",
      status: "Boosts INT and MDEF",
      obtain: "Craft: Wisdom Trial",
    },
    {
      title: "Frost Staff",
      status: "Adds freeze effect",
      obtain: "Drop from Ice Shard",
    },
    {
      title: "Stormcaller",
      status: "Deals lightning AOE",
      obtain: "Drop: Thunder Cloud Boss",
    },
  ],
  halberd: [
    {
      title: "Poleaxe",
      status: "Good for long reach",
      obtain: "Buy from Weapon Vendor",
    },
    {
      title: "Twin Blade Spear",
      status: "Double hit chance",
      obtain: "Drop: Twin Beast",
    },
    {
      title: "Dragon Halberd",
      status: "Bonus vs dragons",
      obtain: "Boss drop: Draconic Warden",
    },
    {
      title: "Sky Piercer",
      status: "Boosts aerial damage",
      obtain: "Found in Sky Fortress",
    },
    {
      title: "Runed Glaive",
      status: "Magic scaling boost",
      obtain: "Crafted with Rune Stone",
    },
  ],
  katana: [
    {
      title: "Practice Katana",
      status: "Light and fast",
      obtain: "Given at Samurai Dojo",
    },
    {
      title: "Moon Blade",
      status: "Crit bonus at night",
      obtain: "Hidden Shrine chest",
    },
    {
      title: "Phantom Edge",
      status: "Boosts evasion",
      obtain: "Drop from Ghost Duelist",
    },
    {
      title: "Demon Katana",
      status: "Curse damage",
      obtain: "Drop: Cursed Monk",
    },
    {
      title: "Silent Slash",
      status: "No aggro generation",
      obtain: "Quest: Shadow Path",
    },
  ],
  dagger: [
    {
      title: "Steel Dagger",
      status: "Fast stab weapon",
      obtain: "Buy from Market",
    },
    {
      title: "Venom Fang",
      status: "Applies poison",
      obtain: "Drop from Snake Boss",
    },
    {
      title: "Shadow Blade",
      status: "High stealth bonus",
      obtain: "Quest reward: Cloak & Dagger",
    },
    {
      title: "Glass Knife",
      status: "High crit, low durability",
      obtain: "Rare drop: Crystal Thief",
    },
    {
      title: "Flame Dagger",
      status: "Adds fire effect",
      obtain: "Drop: Lava Wasp",
    },
  ],
  arrow: [
    {
      title: "Iron Arrow",
      status: "Basic projectile",
      obtain: "Buy in stores",
    },
    {
      title: "Fire Arrow",
      status: "Burns target",
      obtain: "Crafted with Fire Core",
    },
    {
      title: "Frozen Arrow",
      status: "Freezes enemy",
      obtain: "Dropped by Ice Archer",
    },
    {
      title: "Lightning Bolt",
      status: "AOE shock",
      obtain: "Craft with Sky Stone",
    },
    {
      title: "Poison Arrow",
      status: "Applies DOT",
      obtain: "Crafted with Toxic Venom",
    },
  ],
  shield: [
    {
      title: "Wooden Shield",
      status: "Basic defense",
      obtain: "Buy from Smithy",
    },
    {
      title: "Iron Wall",
      status: "Boosts guard rate",
      obtain: "Drop from Stone Beast",
    },
    {
      title: "Aegis Shield",
      status: "Reduces magic damage",
      obtain: "Reward: Guild Defense Quest",
    },
    {
      title: "Mirror Shield",
      status: "Reflects spells",
      obtain: "Drop from Mirror Mage",
    },
    {
      title: "Tower Shield",
      status: "Reduces knockback",
      obtain: "Craft: Heavy Armor Set",
    },
  ],
  "ninjutsu-scroll": [
    {
      title: "Scroll of Flames",
      status: "Creates fire trap",
      obtain: "Buy from Ninja Village",
    },
    {
      title: "Wind Veil Scroll",
      status: "Boosts evasion",
      obtain: "Quest reward: Breeze Path",
    },
    {
      title: "Shadow Cloak",
      status: "Grants invisibility",
      obtain: "Drop from Ninja Trainer",
    },
    {
      title: "Exploding Shuriken",
      status: "Throws explosive star",
      obtain: "Craft with Bomb Tag",
    },
    {
      title: "Smoke Bomb Scroll",
      status: "Escape from combat",
      obtain: "Dropped by Rogue Ninja",
    },
  ],
  armor: [
    {
      title: "Traveler's Tunic",
      status: "Basic starter gear",
      obtain: "Beginner Quest Reward",
    },
    {
      title: "Steel Armor",
      status: "High defense",
      obtain: "Craft with Iron Plate",
    },
    {
      title: "Mana Robe",
      status: "Boosts MP recovery",
      obtain: "Drop from Mage Ghost",
    },
    {
      title: "Assassin Garb",
      status: "Increases stealth",
      obtain: "Reward from Stealth Mission",
    },
    {
      title: "Gladiator Plate",
      status: "Bonus in PvP",
      obtain: "Purchase from Arena Vendor",
    },
  ],
  additional: [
    {
      title: "Feather Cape",
      status: "Boosts movement speed",
      obtain: "Drop from Wind Beast",
    },
    {
      title: "Thorn Necklace",
      status: "Returns damage",
      obtain: "Drop from Cursed Tree",
    },
    {
      title: "Crystal Charm",
      status: "Boosts all stats slightly",
      obtain: "Hidden cave treasure",
    },
    {
      title: "Ghost Ring",
      status: "Pass through enemies",
      obtain: "Drop from Phantom King",
    },
    {
      title: "Hunter’s Pouch",
      status: "Bonus to drop rate",
      obtain: "Reward from Hunt Board",
    },
  ],
  special: [
    {
      title: "Hero's Emblem",
      status: "Raises all stats",
      obtain: "Final Quest Reward",
    },
    {
      title: "Time Relic",
      status: "Speeds up cooldowns",
      obtain: "Time Rift Event",
    },
    {
      title: "Fate Core",
      status: "Chance to revive on KO",
      obtain: "Drop: Destiny Beast",
    },
    {
      title: "Greed Pendant",
      status: "Bonus gold on kills",
      obtain: "Drop: Greedy Ghost",
    },
    {
      title: "Wings of Light",
      status: "Float over traps",
      obtain: "Final Trial Bonus",
    },
  ],
};

// Title for sidebarNav
export const EquipmentNavTitle: {
  [key: string]: string;
} = {
  "one-handed-sword": "One-Handed Sword",
  "two-handed-sword": "Two-Handed Sword",
  bow: "Bow",
  bowgun: "Bowgun",
  knuckle: "Knuckle",
  "magic-devices": "Magic Devices",
  staff: "Staff",
  halberd: "Halberd",
  katana: "Katana",
  dagger: "Dagger",
  arrow: "Arrow",
  shield: "Shield",
  "ninjutsu-scroll": "Ninjutsu Scroll",
  armor: "Armor",
  additional: "Additional",
  special: "Special",
};
