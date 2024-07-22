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
    description: "() => Ra's static tickspeed is rased by 0.5 per AG past ${format(1e4)}, RG is 0.2 per past ${format(1e4)}, TG is 0.02 per past ${format(1e3)}",
    effect: () =>  new Decimal(1.5 ** (Math.max(player.galaxies - 10000, 0))).mul( 1.2 ** Math.max( Replicanti.galaxies.total - 10000, 0)).mul(1.02 ** Math.max( player.dilation.totalTachyonGalaxies - 1000, 0)).max(1),
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
