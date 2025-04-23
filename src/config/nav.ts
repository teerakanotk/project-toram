import * as Types from "@/types";

const NavItem: Types.NavItemProps[] = [
  {
    title: "Guide",
    href: "/guide/status",
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

export const MainNavItem = NavItem;
export const MobileNavItem = NavItem;

export const SidebarNavItem: { [key: string]: Types.NavItemProps[] } = {
  guide: [{ title: "Guide", href: "/guide/status" }],
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

// Define the item structure
interface itemProps {
  name: string;
  status: string;
  obtain: string;
}

const oneHandedSwordItem: itemProps[] = [
  {
    name: "Iron Saber",
    status: "Basic sword with reliable stats",
    obtain: "Purchased in Sofia City",
  },
  {
    name: "Steel Edge",
    status: "Slightly stronger than Iron Saber",
    obtain: "Crafted using 3 Steel Ingots",
  },
  {
    name: "Silver Fang",
    status: "Grants light bonus damage",
    obtain: "Dropped by Forest Wolf",
  },
  {
    name: "Crimson Blade",
    status: "Inflicts bleeding status",
    obtain: "Drop from Bandit Captain",
  },
  {
    name: "Runed Sword",
    status: "Enhances magic power",
    obtain: "Crafted with Arcane Core",
  },
  {
    name: "Knight’s Honor",
    status: "Boosts defense slightly",
    obtain: "Reward from Knight's Tournament",
  },
  {
    name: "Ghost Saber",
    status: "Deals bonus damage to undead",
    obtain: "Dropped by Ghost Knight",
  },
  {
    name: "Thunder Fang",
    status: "Adds lightning element",
    obtain: "Drop from Thunder Lizard",
  },
  {
    name: "Moonblade",
    status: "Extra crit rate at night",
    obtain: "Found in Moonlight Forest chest",
  },
  {
    name: "Dragonfang Sword",
    status: "Increased damage to dragon-type monsters",
    obtain: "Dropped by Elder Dragon",
  },
  {
    name: "Windcutter",
    status: "Boosts attack speed",
    obtain: "Reward from Wind Trial",
  },
  {
    name: "Bloodthirst",
    status: "Regain HP on crit hit",
    obtain: "Drop from Crimson Reaper",
  },
  {
    name: "Shadow Blade",
    status: "User becomes harder to detect",
    obtain: "Crafted using Dark Essence",
  },
  {
    name: "Holy Saber",
    status: "Increased damage to dark-element enemies",
    obtain: "Dropped by Fallen Paladin",
  },
  {
    name: "Venom Cutter",
    status: "Applies poison on hit",
    obtain: "Dropped by Jungle Scorpion",
  },
  {
    name: "Duelist’s Edge",
    status: "Grants bonus in 1v1 battles",
    obtain: "PVP Tournament Reward",
  },
  {
    name: "Frozen Saber",
    status: "Chance to freeze enemies",
    obtain: "Dropped by Ice Elemental",
  },
  {
    name: "Obsidian Sword",
    status: "Boosts physical attack",
    obtain: "Crafted from Obsidian Ore",
  },
  {
    name: "Flame Brand",
    status: "Applies burn effect on contact",
    obtain: "Drop from Fire Drake",
  },
  {
    name: "Warden’s Blade",
    status: "Reduces incoming damage slightly",
    obtain: "Guard Tower Trial Reward",
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
