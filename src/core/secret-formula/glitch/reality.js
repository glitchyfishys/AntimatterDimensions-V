
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
    checkRequirement: () => gainedEternityPoints().greaterThanOrEqualTo("1e1000") && player.realities == 0,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain 10 times more tachyon particles",
    effect: () => 10,
    formatEffect: value => formatInt(value)
  },

];
