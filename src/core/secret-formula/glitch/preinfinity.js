
export const preinfinityUG = [
  {
    name: "dimless",
    id: 0,
    requirement: "reach 1e15 antimater without any dimboosts, no galaxies",
    hasFailed: () => player.dimensionBoosts != 0 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts == 0 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2),
  },
  {
  name: "dimatonal limits",
    id: 1,
    requirement: "have 1e25 antimatter with only one dimboost, no galaxies",
    hasFailed: () => player.dimensionBoosts != 1 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts == 1 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "vector 2",
    id: 2,
    requirement: "have 1e35 antimatter with only two dimboosts, no galaxies",
    hasFailed: () => player.dimensionBoosts != 2 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 35 && player.dimensionBoosts == 2 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "8th dimensional",
    id: 3,
    requirement: "have 1e150 antimatter with four dimboosts, no galaxies",
    hasFailed: () => player.galaxys == 1 || player.dimensionBoosts > 4 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 150 && player.dimensionBoosts == 4 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic inforcement",
    id: 4,
    requirement: "have 1e7 antimatter with no dimboosts, one galaxy, up to ten 2nd dimentsions",
    hasFailed: () => player.dimensions.antimatter[1].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 7 && !player.dimensions.antimatter[1].amount.greaterThan(20) && player.galaxies <= 1 && !player.dimensionBoosts > 0 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed prechases by there amount",
    effect: () => 1 + Math.floor(Math.log2(player.totalTickBought + 1)),
    formatEffect: value => "+" + formatInt(value)
  },
  {
    name: "galatic limitaion",
    id: 5,
    requirement: "have 1e25 antimatter with no dimboosts, one galaxy, up to 20 4st dimentsions",
    hasFailed: () => player.dimensions.antimatter[3].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 25 && !player.dimensions.antimatter[3].amount.greaterThan(10) && player.galaxies <= 1 && !player.dimensionBoosts > 0 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed prechases by there amount",
    effect: () => 1 + Math.floor(Math.log2(player.totalTickBought + 1 )),
    formatEffect: value => "+" + formatInt(value)
  },
  {
    name: "galatic capacity",
    id: 6,
    requirement: "reach 1.8e308 antimatter with only one antimatter galaxy",
    hasFailed: () => player.galaxies > 1 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.greaterThan(1.79e308) && player.galaxies <= 1 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "double infinity point gain",
    effect: () => 2,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic instance",
    id: 7,
    requirement: "have 3 antimatter galaxys without infinity broken",
    hasFailed: () => PlayerProgress.hasBroken() || player.challenge.normal.current != 10,
    checkRequirement: () => player.galaxies >= 3 && !PlayerProgress.hasBroken(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "double infinity point gain",
    effect: () => 2,
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
