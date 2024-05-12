export const GlitchRifts = {
  vacuum: {
    id: 1,
    key: "vacuum",
    name: "a",
    drainResource: "IP",
    baseEffect: x => `IP gain ${formatX(x, 2, 2)}`,
    percentage: totalFill => Math.log10(totalFill.plus(1).log10() * 10 + 1) ** 2.5 / 100,
    percentageToFill: percentage => Decimal.pow(10,
      Decimal.pow(10, (percentage * 100) ** (1 / 2.5)).div(10).minus(0.1)
    ).minus(1),
    currency: () => Currency.infinityPoints,
    milestones: [
      {
        resource: "vacuum",
        requirement: 0.04,
        description: "a"
      },
      {
        resource: "vacuum",
        requirement: 0.06,
        description: () => `b`,
        effect: () => 1e130
      },
      {
        resource: "vacuum",
        requirement: 0.4,
        description: () => `c`,
        effect: () => 125,
        formatEffect: x => `EP gain ${formatX(x, 2, 2)}`
      },
    ],

  },
};
