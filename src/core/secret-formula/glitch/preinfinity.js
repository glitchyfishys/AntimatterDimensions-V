
export const preinfinityUG = [
  {
    name: "dimless",
    id: 0,
    requirement: "reach 1e15 antimater without dimboosts",
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts === 0,
    lockEvent: "gain a Replicanti Galaxy",
    description: "AD * (1 + DB /5)",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "costless",
    id: 1,
    requirement: "place holder",
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts === 1,
    lockEvent: "gain a Replicanti Galaxy",
    description: "place holder",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
