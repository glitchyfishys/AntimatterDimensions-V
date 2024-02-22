

export const preinfinityupgrades = [
  {
    name: "Cosmically Duplicate",
    id: 0,
    requirement: "Complete your first manual Eternity without using Replicanti Galaxies",
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts === 0,
    canLock: true,
    lockEvent: "gain a Replicanti Galaxy",
    description: "Replicanti speed is multiplied based on Replicanti Galaxies",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
