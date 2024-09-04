
export const preinfinityUG = [
  {
    name: "dimless",
    id: 0,
    requirement: () => `reach ${format(1e15)} antimater without any dimboosts, no galaxies (pre-infinity)`,
    hasFailed: () => player.dimensionBoosts != 0 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts == 0 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD multiplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2),
  },
  {
  name: "dimensional limits",
    id: 1,
    requirement: () => `have ${format(1e25)} antimatter with only one dimboost, no galaxies (pre-infinity)`,
    hasFailed: () => player.dimensionBoosts >1 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts <= 1 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD multiplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "vector 2",
    id: 2,
    requirement: () => `have ${format(1e35)} antimatter with upto two dimboosts, no galaxies (pre-infinity)`,
    hasFailed: () => player.dimensionBoosts > 2 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 35 && player.dimensionBoosts <= 2 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD multiplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "8th dimensional",
    id: 3,
    requirement: () => `have ${format(1e150)} antimatter with upto six dimboosts, no galaxies (pre-infinity)`,
    hasFailed: () => player.galaxys == 1 || player.dimensionBoosts > 6 || player.galaxys > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 150 && player.dimensionBoosts <= 6 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD multiplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 4,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic inforcement",
    id: 4,
    requirement: () => `have ${format(1e7)} antimatter with no dimboosts, one galaxy, up to ten 2nd dimentsions (pre-infinity)`,
    hasFailed: () => player.dimensions.antimatter[1].amount.greaterThan(10) || player.galaxys > 1 || player.dimensionBoosts > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 7 && !player.dimensions.antimatter[1].amount.greaterThan(20) && player.galaxies <= 1 && !player.dimensionBoosts > 0 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed perchases by their amount",
    effect: () => 1 + Math.floor(Math.log2(player.totalTickBought + 1)),
    formatEffect: value => "+" + formatInt(value)
  },
  {
    name: "galatic limitaion",
    id: 5,
    requirement: () => `have ${format(1e25)} antimatter with no dimboosts, one galaxy, up to 20 4st dimentsions (pre-infinity)`,
    hasFailed: () => player.dimensions.antimatter[3].amount.greaterThan(20) || player.galaxys > 1 || player.dimensionBoosts > 0 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.e >= 25 && !player.dimensions.antimatter[3].amount.greaterThan(20) && player.galaxies <= 1 && !player.dimensionBoosts > 0 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "additonal tickspeed perchases by their amount",
    effect: () => 1 + Math.floor(Math.log2(player.totalTickBought + 1 )),
    formatEffect: value => "+" + formatInt(value)
  },
  {
    name: "galatic capacity",
    id: 6,
    requirement: () => `reach ${format(1.79e308)} antimatter with only one antimatter galaxy (pre-infinity)`,
    hasFailed: () => player.galaxies > 1 || PlayerProgress.infinityUnlocked(),
    checkRequirement: () => player.antimatter.greaterThan(1.79e308) && player.galaxies <= 1 && !PlayerProgress.infinityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "double infinity point gain",
    effect: () => 2,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "galatic instance",
    id: 7,
    requirement: () => `have ${format(3)} antimatter galaxys without infinity broken (post-infinity)`,
    hasFailed: () => PlayerProgress.hasBroken() || player.challenge.normal.current != 10,
    checkRequirement: () => player.galaxies >= 3 && !PlayerProgress.hasBroken(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "double infinity point gain",
    effect: () => 2,
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
