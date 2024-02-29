
export const realityUG = [
  {
    name: "realitize",
    id: 0,
    requirement: "reach 1e6000 eternity points before your first reality",
    hasFailed: () => player.realities != 0,
    checkRequirement: () => player.eternityPoints.e >= 6000 && player.realities == 0,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain x1e25 more EP",
    effect: () => 1e25,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "dialated",
    id: 1,
    requirement: "reach 1e1000 (pending) EP while dialated before your first reality (check multiplier breakdown)",
    hasFailed: () => player.realities != 0,
    checkRequirement: () => gainedEternityPoints().greaterThanOrEqualTo("1e1000") && player.dilation.active && player.realities == 0,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain 25 times more tachyon particles",
    effect: () => 25,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "real time complex",
    id: 2,
    requirement: "reach 1e8000 eternity points before your first reality",
    hasFailed: () => player.realities != 0,
    checkRequirement: () => player.eternityPoints.e >= 8000 && player.realities == 0,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain 25 times more perks and realitys ",
    effect: () => 25,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "immisinity",
    id: 3,
    requirement: "reach 1e6 RM",
    hasFailed: () =>false,
    checkRequirement: () => player.reality.realityMachines.e >= 6,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "all TD gain a 1e100 multiplier",
    effect: () => Decimal.add(1e100),
    formatEffect: value => formatX(value, 2, 2)
  },

];
