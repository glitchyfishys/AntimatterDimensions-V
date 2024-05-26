
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
        effect: () => 3,
        format: effect => `${formatX(effect)} first AD`
      },
      {
        resource: "alpha",
        requirement: 0.5,
        description: "eigth AD gains x10 multiplier",
        effect: () => 10,
        format: effect => `${formatX(effect)} eigth AD`
      },
      {
        resource: "alpha",
        requirement: 0.75,
        description: "small game speed multiplier",
        effect: () => 1.5,
        format: effect => `${formatX(effect)} game speed`
      },
      {
        resource: "alpha",
        requirement: 1,
        description: "very small dimension boost multiplier based on IP multiplier perchases (caped at 5)",
        effect: () => Math.clamp(player.IPMultPurchases ** 0.11, 1, 5),
        format: effect => `${formatX(effect,2,2)} dimboost`
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
        description: "+0.02 to infinity power conversion rate",
        effect: () => 0.02,
        format: effect => `+${format(effect)} infinity power conversion rate`
      },
      {
        resource: "beta",
        requirement: 0.833,
        description: "+0.03 to infinity power conversion rate",
        effect: () => 0.03,
        format: effect => `+${format(effect)} infinity power conversion rate`
      },
      {
        resource: "beta",
        requirement: 1,
        description: "-0.05 to free tick speed threshold",
        effect: () => 0.05,
        format: effect => `-${format(effect)} free tick speed threshold`
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
        effect: () => Math.clamp(1.01 ** (player.galaxies - 125), 1, 5),
        format: effect => `${formatX(effect)} replicanti speed`
      },
      {
        resource: "delta",
        requirement: 0.66,
        description: "25 free tick speed per time study brought after 10",
        effect: () => Math.max(25 * (player.timestudy.studies.length - 10), 0),
        format: effect => `+${format(effect)} free tick speed`
      },
      {
        resource: "delta",
        requirement: 1,
        description: "dilation is slightly weaker by 0.01",
        effect: () => 0.01,
        format: effect => `+${format(effect)} to dilation neff`
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
        requirement: 0.15,
        description: "TDs gain a 1.01 power",
        effect: () => 1.01,
        format: effect => `TD ${formatPow(effect)}`
      },
      {
        resource: "gamma",
        requirement: 0.3,
        description: "10 times perk point gain",
        effect: () => 10,
        format: effect => `${formatX(effect)} perk points`
      },
      {
        resource: "gamma",
        requirement: 0.5,
        description: "+10% glyph rarity",
        effect: () => 10,
        format: effect => `${formatRarity(effect)} glyph rarity`
      },
      {
        resource: "gamma",
        requirement: 0.75,
        description: "DMDs gain a 1.05 power",
        effect: () => 1.05,
        format: effect => `DMD ${formatPow(effect)}`
      },
      {
        resource: "gamma",
        requirement: 0.9,
        description: "an aditional 50 Ra memory cap",
        effect: () => 50,
        format: effect => `+${format(effect)} Ra memory cap`
      },
      {
        resource: "gamma",
        requirement: 1,
        description: "unlock glitch the celestial of creativity, having unque goals and upgrades",
        effect: () => 1,
        format: effect => effect == 0 ? "locked" : "unlocked"
      },
    ],
  },
};
