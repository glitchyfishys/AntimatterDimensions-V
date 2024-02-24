
export const preinfinityUG = [
  {
    name: "dimless1",
    id: 0,
    requirement: "reach 1e15 antimater without dimboosts",
    hasFailed: () => player.dimensionBoosts != 0 ,
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts == 0,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "dimless2",
    id: 1,
    requirement: " have 1e25 antimatter with one dimboost",
    hasFailed: () => player.dimensionBoosts != 1 ,
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts == 1,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "dimless3",
    id: 2,
    requirement: " have 1e35 antimatter with two dimboosts",
    hasFailed: () => player.dimensionBoosts != 2 ,
    checkRequirement: () => player.antimatter.e >= 35 && player.dimensionBoosts == 2,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "dimless4",
    id: 3,
    requirement: " have 1e150 antimatter with four dimboosts",
    hasFailed: () => player.galaxys == 1 || player.dimensionBoosts > 4,
    checkRequirement: () => player.antimatter.e >= 150 && player.dimensionBoosts == 4,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic inforcement",
    id: 4,
    requirement: " have 1e7 antimatter with no dimboosts, one galaxy, up to ten 2st dimentsions",
    hasFailed: () => player.dimensions.antimatter[1].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0,
    checkRequirement: () => player.antimatter.e >= 7,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed prechases by there amount",
    effect: () => 1 + Math.floor(Math.log10(player.totalTickBought)),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic limitaion",
    id: 5,
    requirement: " have 1e20 antimatter with no dimboosts, one galaxy, up to 20 4st dimentsions",
    hasFailed: () => player.dimensions.antimatter[3].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0,
    checkRequirement: () => player.antimatter.e >= 20,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed prechases by there amount",
    effect: () => 1 + Math.floor(Math.log10(player.totalTickBought)),
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
