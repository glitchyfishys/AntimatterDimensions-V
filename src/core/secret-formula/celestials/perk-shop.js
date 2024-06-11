function rebuyableCost(initialCost, increment, id) {
  return initialCost * Math.pow(increment, player.celestials.teresa.perkShop[id]);
}
function rebuyable(config) {
  const { id, otherReq, cap, costCap, description, formatEffect, formatCost } = config;
  return {
    id,
    cost: () => (config.cost ? config.cost() : rebuyableCost(config.initialCost, config.increment, config.id)),
    otherReq,
    cap,
    costCap,
    description,
    effect: () => config.effect(player.celestials.teresa.perkShop[config.id]),
    formatEffect,
    formatCost,
    rebuyable: true
  };
}

export const perkShop = {
  infinityPow: rebuyable({
    id: 6,
    initialCost: 1000000,
    increment: 10,
    description: () => `Increase infinity dimentions by a power of ${formatX(0.05, 2, 2)}`,
    effect: bought =>  (1 + 0.05 * bought),
    formatEffect: value => formatX(value, 2, 2),
    formatCost: value => format(value, 2, 2),
    costCap: () => (1000000000),
    cap: () => (1.3),
  }),
  maxGlyphLevel: rebuyable({
    id: 7,
    initialCost: 10000,
    increment: 1.25,
    description: () => `Increase max level of gylphs by ${formatPercents(0.05, 2, 2)}`,
    effect: bought =>  Math.pow(1.05, bought),
    formatEffect: value => formatX(value, 2, 2),
    formatCost: value => format(value, 2 , 2),
    costCap: () => (1e300),
    cap: () => (1e300),
  }),
  glyphLevel: rebuyable({
    id: 0,
    initialCost: 1,
    increment: 2,
    description: () => `Increase pre-instability Glyph levels by ${formatPercents(0.05)}`,
    effect: bought => Math.pow(1.05, bought),
    formatEffect: value => formatX(value, 2, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1048576 : 2048),
    cap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? Math.pow(1.05, 20) : Math.pow(1.05, 11))
  }),
  rmMult: rebuyable({
    id: 1,
    initialCost: 1,
    increment: 2,
    description: "Double Reality Machine gain",
    effect: bought => Math.pow(2, bought),
    formatEffect: value => formatX(value, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1048576 : 2048),
    cap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1048576 : 2048)
  }),
  bulkDilation: rebuyable({
    id: 2,
    initialCost: 100,
    increment: 2,
    description: "Buy twice as many Dilation Upgrades at once.",
    effect: bought => Math.pow(2, bought),
    formatEffect: value => formatX(value, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 1638400 : 1600),
    cap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 16384 : 16),
  }),
  autoSpeed: rebuyable({
    id: 3,
    initialCost: 1000,
    increment: 2,
    description: () => `Infinity Dimension, Time Dimension, Dilation,
      and Replicanti autobuyers are ${formatX(2)} faster.`,
    effect: bought => Math.pow(2, bought),
    formatEffect: value => formatX(value, 2),
    formatCost: value => format(value, 2),
    costCap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 64000 : 4000),
    cap: () => (Ra.unlocks.perkShopIncrease.canBeApplied ? 64 : 4)
  }),
  musicGlyph: rebuyable({
    id: 4,
    description: () => `Receive a Music Glyph of a random type that is ${formatPercents(0.8)} of your highest level.
      (Try clicking it!)`,
    cost: () => 1,
    formatCost: value => formatInt(value),
    costCap: () => Number.MAX_VALUE,
    cap: () => Number.MAX_VALUE
  }),
  // Only appears with the perk shop increase upgrade
  fillMusicGlyph: rebuyable({
    id: 5,
    description: () => `Fill all empty slots in your inventory with Music Glyphs`,
    cost: () => Math.clampMin(GameCache.glyphInventorySpace.value, 1),
    otherReq: () => GameCache.glyphInventorySpace.value > 0,
    formatCost: value => formatInt(value),
    costCap: () => Number.MAX_VALUE,
    cap: () => Number.MAX_VALUE
  }),
};
