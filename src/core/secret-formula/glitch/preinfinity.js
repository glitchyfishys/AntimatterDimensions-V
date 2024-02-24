
export const preinfinityUG = [
  {
    name: "dimless",
    id: 0,
    requirement: "reach 1e15 antimater without dimboosts",
    hasFailed: () => player.dimensionBoosts != 0 ,
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts === 0,
    description: "AD muliplier from dimboost",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "costless",
    id: 1,
    requirement: " have 1e15 antimatter with one dimboost",
    hasFailed: () => player.dimensionBoosts != 1 ,
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts === 1,
    description: "AD muliplier from dimboost",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
