import { DC } from "../../constants";

export const glitchSpeedUpgrades = [
  {
    name: "the power is growing",
    id: 1,
    cost: 1,
    requirement: "reach reality (all effects)",
    hasFailed: () => !(Glitch.activeaugments.length <= 9),
    checkRequirement: () => Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "some Celestial Reality's effect that neff presteage gain are weakend by 25%",
    effect: () =>  1.25,
    formatEffect: value => formatX(1.25, 2, 2)
  },
  {
    name: "the cycle continues",
    id: 2,
    cost: 1,
    requirement: () => ` ${format("1e1.25E11")} (all effects)`,
    hasFailed: () => !(Glitch.activeaugments.length <= 9),
    checkRequirement: () => Glitch.isRunning && Glitch.activeaugments.length >= 9 && Currency.antimatter.gte("1e1.25E11"),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "Ra's static tickspeed is rased by 0.01 per antimatter galaxy past 10000",
    effect: () =>  (Math.max(player.galaxies - 10000, 0) * 0.01),
    formatEffect: value => ("+" + format(value, 2, 2))
  },
  {
    name: "2",
    id: 3,
    cost: 1,
    requirement: "reach reality (all effects)",
    hasFailed: () => !(Glitch.activeaugments.length == 9),
    checkRequirement: () => Glitch.isRunning && Glitch.activeaugments.length == 9 && false,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "some Celestial Reality's effect that neff presteage gain are weakend by 25%",
    effect: () =>  1.25,
    formatEffect: value => formatX(1.25, 2, 2)
  },
  {
    name: "3",
    id: 4,
    cost: 1,
    requirement: "reach reality (all effects)",
    hasFailed: () => !(Glitch.activeaugments.length == 9),
    checkRequirement: () => Glitch.isRunning && Glitch.activeaugments.length == 9 && false,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "some Celestial Reality's effect that neff presteage gain are weakend by 25%",
    effect: () =>  1.25,
    formatEffect: value => formatX(1.25, 2, 2)
  },
];
