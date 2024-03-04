
export const breakinfinityUG = [
  {
    name: "limited space",
    id: 0,
    requirement: "reach 1e500 antimater up to 4 dimboosts, one galaxy",
    hasFailed: () => player.dimensionBoosts > 4 || player.galaxies > 1,
    checkRequirement: () => player.antimatter.e >= 500 && player.dimensionBoosts <= 4,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "IP muliplier from antimatter galaxies",
    effect: () => 1 + Math.pow(player.galaxies, 1.25),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "infinitly limiting",
    id: 1,
    requirement: "reach 2000 (pending) infinity points with up to four dimboost and one antimatter galaxy",
    hasFailed: () => player.dimensionBoosts > 4 || player.galaxies > 1 ,
    checkRequirement: () =>  gainedInfinityPoints().greaterThan(2000) && player.dimensionBoosts <= 4 && player.galaxies <= 1,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "x10 infinity points",
    effect: () => 10,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "chaos",
    id: 2,
    requirement: "finish IC1 without infinity dimensions",
    hasFailed: () => player.dimensions.infinity[0].amount.greaterThan(0),
    checkRequirement: () => player.antimatter.greaterThanOrEqualTo("1e650") && player.challenge.infinity.current == 1 && !player.dimensions.infinity[0].amount.greaterThan(0),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "1e50 more infinity points",
    effect: () => 1e50,
    formatEffect: value => formatX(value, 2, 2),
    isUseless: () => Pelle.isDoomed
  },
  {
    name: "cosmic infinity",
    id: 3,
    requirement: "have 1e150 infinity points",
    hasFailed: () => false,
    checkRequirement: () => player.infinityPoints.e >= 150,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "IP muliplier from antimatter galaxies",
    effect: () => 1 + Math.pow(player.galaxies, 3),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "replicated infinity",
    id: 4,
    requirement: "have 10 replicanti without any upgrades",
    hasFailed: () => player.replicanti.chance > 0.01 || !player.replicanti.interval < 1000 || PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.replicanti.amount.greaterThanOrEqualTo(10) && player.replicanti.chance == 0.01 && player.replicanti.interval >= 1000 && !PlayerProgress.eternityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Replicanti speed by it's amount",
    effect: () => 1 + Math.sqrt(player.replicanti.amount.log10()),
    formatEffect: value => formatX(value, 2, 2),
    isUseless: () => Pelle.isDoomed
  },
  {
    name: "cloned replication",
    id: 5,
    requirement: "have 1.79e308 replicanti without any upgrades",
    hasFailed: () => player.replicanti.chance > 0.01 || player.replicanti.interval < 1000 || PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.replicanti.amount.greaterThanOrEqualTo(1.79e308) && player.replicanti.chance == 0.01 && player.replicanti.interval >= 1000 && !PlayerProgress.eternityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "increase replcanti speed by their galxies",
    effect: () => 1 + (Math.pow(player.replicanti.galaxies, 1.2) / 38),
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
