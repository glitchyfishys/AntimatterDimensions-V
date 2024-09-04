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
    requirement: () => `have ${format("1e1.25E11")} antimatter (all effects)`,
    hasFailed: () => !(Glitch.activeaugments.length <= 9),
    checkRequirement: () => Glitch.isRunning && Glitch.activeaugments.length >= 9 && Currency.antimatter.gte("1e1.25E11"),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `Ra's static tickspeed is rased by 1.1 per AG past ${format(1e4)}, RG is 1.03 per past ${format(1e4)}, TG is 1.005 per past ${format(1e4)}`,
    effect: () =>  Decimal.pow(1.1, (Math.max(player.galaxies - 1e4, 0))).mul( Decimal.pow(1.03, Math.max( Replicanti.galaxies.total - 1e4, 0))).mul( Decimal.pow(1.005, Math.max( player.dilation.totalTachyonGalaxies - 1e4, 0))).max(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "around and around",
    id: 3,
    cost: 1,
    requirement: () => `have less than ${format("1e1E9")} antimatter after 5 seconds in this infinity (all effects, continum active)`,
    hasFailed: () => !(Glitch.augmenteffectbits == 1023) && !Laitela.continuumActive,
    checkRequirement: () => Glitch.isRunning && Glitch.augmenteffectbits == 1023 && Time.thisInfinityRealTime.totalSeconds.gte(5) && Laitela.continuumActive && Currency.antimatter.lt("1e1E9"),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "the RiftForce fomula is changed (log10(value) ** 0.2), also you can charge one infinity upgrade in glitch's reality",
    effect: () =>  1,
    formatEffect: value => "active"
  },
  {
    name: "unlimited dimensions",
    id: 4,
    cost: 1,
    requirement: "reach reality (all effects)",
    hasFailed: () => !(Glitch.activeaugments.length == 9),
    checkRequirement: () => Glitch.isRunning && Glitch.activeaugments.length == 9 && false,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "unlock Chaos dimensions",
    effect: () =>  1.25,
    formatEffect: value => formatX(1.25, 2, 2)
  },
];
