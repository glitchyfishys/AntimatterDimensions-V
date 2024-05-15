
export const GlitchRifts = {
  alpha: {
    id: 1,
    key: "alpha",
    name: "pre-infinity",
    drainResource: "IP",
    percentage: totalFill => player.glitch.preinfinity.upgradebits & 255,
    percentageToFill: 6,
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
    name: "post-infinity",
    drainResource: "IP",
    percentage: totalFill => player.glitch.breakinfinity.upgradebits & 255,
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
  detla: {
    id: 3,
    key: "delta",
    name: "eternity",
    drainResource: "IP",
    percentage: totalFill => player.glitch.eternity.upgradebits & 255,
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
    drainResource: "IP",
    percentage: totalFill => player.glitch.reality.upgradebits & 255,
    percentageToFill: 6,
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
