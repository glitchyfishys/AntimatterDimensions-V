
export const GlitchRifts = {
  alpha: {
    id: 1,
    key: "alpha",
    name: "pre-break/infinity",
    drainResource: "IP",
    percentage: totalFill => {
      let a = 0;
      preinfinityUGs.all.forEach(x => x.isBought ? a++ : false);
      return a
    },
    percentageToFill: 8,
    milestones: [
      {
        resource: "alpha",
        requirement: 0.1,
        description: "fish",
        effect: 5
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
    },,
    percentageToFill: 6,
    milestones: [
      {
        resource: "beta",
        requirement: 0.1,
        description: "fish",
        effect: 5
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
        requirement: 0.1,
        description: "fish",
        effect: 5
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
