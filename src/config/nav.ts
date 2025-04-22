import * as Types from "@/types";

export const NavItem: Types.NavItemProps[] = [
  {
    title: "Guide",
    href: "/guide",
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

// Equipment items list
export const equipmentItem: Types.EquipmentProps = {
  "one-handed-sword": [
    "Bronze Short Sword",
    "Iron Rapier",
    "Steel Saber",
    "Knight's Blade",
    "Shadow Fang",
    "Gladiator's Edge",
    "Swift Cutter",
    "Duelist's Razor",
    "Silver Sting",
    "Darkfang Saber",
    "Holy Sword Elora",
    "Ashen Edge",
    "Flamebrand",
    "Icepiercer",
    "Storm Fang",
    "Twilight Saber",
    "Viper Fang",
    "Blood Reaver",
    "Silent Slash",
    "Arcblade",
    "Obsidian Dagger",
    "Lionheart Saber",
    "Crimson Edge",
    "Azure Katana",
    "Sunflare Blade",
    "Moonveil Saber",
    "Gravepiercer",
    "Phantom Fang",
    "Starlight Edge",
    "Thunderbite",
    "Bonecarver",
    "Enchanted Sabre",
    "Frostbite Dagger",
    "Hellfang",
    "Warden's Blade",
    "Dragonfang",
    "Venom Edge",
    "Ironclaw",
    "Cerulean Saber",
    "Rune Sabre",
    "Warrior's Thorn",
    "Steel Thorn",
    "Firefang",
    "Echo Blade",
    "Silent Echo",
    "Mythril Cutter",
    "Rogue's Kiss",
    "Soulpiercer",
    "Templar Saber",
    "Whispering Edge",
  ],
  "two-handed-sword": ["Item 2"],
  bow: ["Item 3"],
  bowgun: ["Item 4"],
  knuckle: ["Item 5"],
  "magic-devices": ["Item 6"],
  staff: ["Item 7"],
  halberd: ["Item 8"],
  katana: ["Item 9"],
  dagger: ["Dagger"],
  arrow: ["Arrow"],
  shield: ["Shield"],
  "ninjutsu-scroll": ["Ninjutsu Scroll"],
  armor: ["Armor"],
  additional: ["Additional"],
  special: ["Special"],
};

export const equipmentLabel: Record<string, string> = {
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

export const equipmentItemTest: {
  [key: string]: {
    title: string;
    status: string;
    obtain: string;
  }[];
} = {
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

export const equipmentLabelTest: {
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
