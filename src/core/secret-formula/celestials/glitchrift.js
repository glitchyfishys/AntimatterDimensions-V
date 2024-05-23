
export const GlitchRifts = {
  alpha: {
    id: 1,
    key: "alpha",
    name: "pre-break/infinity",
    drainResource: "IP",
    percentage: totalFill => { let a = 0; preinfinityUGs.all.forEach(x => x.isBought ? a++ : false); return a; },
    percentageToFill: 8,
    milestones: [
      {
        resource: "alpha",
        requirement: 0.25,
        description: "first AD gains x3 multiplier",
        effect: () => 3
      },
      {
        resource: "alpha",
        requirement: 0.5,
        description: "eigth AD gains x10 multiplier",
        effect: () => 10
      },
      {
        resource: "alpha",
        requirement: 0.75,
        description: "small game speed multiplier",
        effect: () => 1.5
      },
      {
        resource: "alpha",
        requirement: 1,
        description: "very small dimension boost multiplier based on IP multiplier perchases (caped at 5)",
        effect: () => Math.min(player.IPMultPurchases ** 0.11,5)
      },
    ],
  },
  beta: {
    id: 2,
    key: "beta",
    name: "post-break-infinity",
    drainResource: "IP",
    percentage: totalFill => {
      let a = 0;
      breakinfinityUGs.all.forEach(x => x.isBought ? a++ : false);
      return a
    },
    percentageToFill: 6,
    milestones: [
      {
        resource: "beta",
        requirement: 0.33,
        description: "+0.02 to infinity conversion rate",
        effect: () => 0.02
      },
      {
        resource: "beta",
        requirement: 0.833,
        description: "+0.03 to infinity conversion rate",
        effect: () => 0.02
      },
      {
        resource: "beta",
        requirement: 1,
        description: "-0.05 to free tick speed threshhold",
        effect: () => 0.05
      },
    ],
  },
  delta: {
    id: 3,
    key: "delta",
    name: "eternity",
    percentage: totalFill => {
      let a = 0;
      eternityUGs.all.forEach(x => x.isBought ? a++ : false);
      return a
    },
    percentageToFill: 6,
    milestones: [
      {
        resource: "delta",
        requirement: 0.33,
        description: "replicanti is 1% faster per antimatter galaxy past 125 up to 5x",
        effect: () => Math.min(1.01 ** player.galaxies - 125, 5)
      },
      {
        resource: "delta",
        requirement: 0.66,
        description: " 25 free tick speed per time study brought",
        effect: () => (25 * (player.timestudy.studies.length - 10))
      },
      {
        resource: "delta",
        requirement: 1,
        description: "dilation is slightly weaker by 0.01",
        effect: () => 0.01
      },
    ],
  },
  gamma: {
    id: 4,
    key: "gamma",
    name: "reality",
    percentage: totalFill => {
      let a = 0;
      realityUGs.all.forEach(x => x.isBought ? a++ : false);
      return a
    },
    percentageToFill: 14,
    milestones: [
      {
        resource: "gamma",
        requirement: 0.1,
        description: "fish",
        effect: 5
      },
    ],
  },
};
