
export const eternityUG = [
  {
    name: "eternal forces",
    id: 0,
    requirement: "reach 1e350 infinity points on your first eternit",
    hasFailed: () => PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 350,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain x5 more EP (pelle effective)",
    effect: () => 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "eternity power",
    id: 1,
    requirement: "complete your second eternity without a time dimensions",
    hasFailed: () => player.dimensions.time[0].equals(0) || PlayerProgress.realityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts == 1,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "free tick speed threshold decreased to 1.3",
    effect: () => 1.3,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "rifted",
    id: 2,
    requirement: "have exacly 15 replacnti galaxys",
    hasFailed: () => false,
    checkRequirement: () => player.replicanti.galaxies == 15,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain 3 additonal RG",
    effect: () => 3,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "study forever",
    id: 3,
    requirement: "reach 1e20 EP ",
    hasFailed: () => false,
    checkRequirement: () => true,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts (pelle effective)",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic inforcement",
    id: 4,
    requirement: "have 1e7 antimatter with no dimboosts, one galaxy, up to ten 2nd dimentsions",
    hasFailed: () => player.dimensions.antimatter[1].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 7,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed prechases by there amount (pelle effective)",
    effect: () => 1 + Math.floor(Math.log10(player.totalTickBought + 1)),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic limitaion",
    id: 5,
    requirement: "have 1e20 antimatter with no dimboosts, one galaxy, up to 20 4st dimentsions",
    hasFailed: () => player.dimensions.antimatter[3].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 20,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed prechases by there amount (pelle effective)",
    effect: () => 1 + Math.floor(Math.log10(player.totalTickBought + 1 )),
    formatEffect: value => formatX(value, 2, 2)
  },

];