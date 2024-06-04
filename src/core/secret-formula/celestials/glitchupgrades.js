import { DC } from "../../constants";

const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.celestials.glitch.upgrades.rebuyable[props.id],
    1e50,
    props.initialCost,
    props.costMult,
    props.costMult / 10,
    DC.E309,
    1e3,
    props.initialCost * props.costMult
  );
  const { effect } = props;
  props.effect = () =>  props.id == 3 ? (effect * player.celestials.glitch.upgrades.rebuyable[props.id]) : Decimal.pow(effect,player.celestials.glitch.upgrades.rebuyable[props.id]);
  props.description = () => props.id == 3 ? props.textTemplate.replace("{value}", "+" + format(effect)) : props.textTemplate.replace("{value}", formatX(effect));
  props.formatEffect = value => props.id == 3 ? ("+" + format(value, 2, 0)) : formatX(value, 2, 0);
  props.formatCost = value => format(value, 2, 0);
  return props;
};


export const glitchRealityUpgrades = [
  rebuyable({
    name: "Rift OverDrive",
    id: 1,
    initialCost: 1,
    costMult: 20,
    textTemplate: "You gain {value} more rift force",
    effect: 2
  }),
  rebuyable({
    name: "Glyph ForcedOver",
    id: 2,
    initialCost: 5,
    costMult: 40,
    textTemplate: "glyph sacrifice is {value} times higher, also some effects are incresed past 1e300",
    effect: 1e10
  }),
  rebuyable({
    name: "Rifting refinment",
    id: 3,
    initialCost: 100,
    costMult: 50,
    textTemplate: "glyph refinment is {value} more rift force",
    effect: 100
  }),
  rebuyable({
    name: "CosmicFlight",
    id: 4,
    initialCost: 15,
    costMult: 32,
    textTemplate: "You gain {value} more singularitys",
    effect: 1.33
  }),
  {
    name: "augmented Infinity",
    id: 5,
    cost: 30,
    requirement: "reach Infinity (all effects)",
    hasFailed: () => !(Glitch.activeaugments.length >= 9),
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "riftforce multiplies AD while augmented uneffected by Celestial Reality's",
    effect: () =>  Currency.riftForce.value.pow(2.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "augmentation of IP",
    id: 6,
    cost: 100,
    requirement: () => `infinity for ${format("1.8e308",2,2)} infinity points (all effects)`,
    hasFailed: () => !(Glitch.activeaugments.length >= 9),
    checkRequirement: () => Currency.infinityPoints.gte("1.8e308") && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "while augmented, laitela's max Dimension count is one higher",
    effect: () =>  1,
    formatEffect: value => ("+" + format(value))
  },
  {
    name: "reinforcement",
    id: 7,
    cost: 10000,
    requirement: () => `reach ${format("1e1E13")} antimatter with Teresa, Nameless dim limit and Lai'tela active`,
    hasFailed: () => player.celestials.glitch.augment.effectbits != 265,
    checkRequirement: () => Currency.antimatter.gte("1e1E13") && Glitch.isRunning && player.celestials.glitch.augment.effectbits == 265,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "you only are forced to have 4 cursed glyphs",
    effect: () =>  1,
    formatEffect: value => ("+" + format(value))
  },
  {
    name: "uncounted forces",
    id: 8,
    cost: 1e6,
    requirement: () => `reach ${format("1e1E9")} antimatter with Ra no dimboost and Lai'tela active (you may need to wait)`,
    hasFailed: () => Glitch.augmenteffectbits != 320,
    checkRequirement: () => Currency.antimatter.gte("1e1E9") && Glitch.isRunning && Glitch.augmenteffectbits == 320,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "you start with 5 dim boost and lai'tela Reality at 10 minutes",
    effect: () =>  1,
    formatEffect: value => "acive"
  },
  {
    name: "lai'tela rebound",
    id: 9,
    cost: 1e8,
    requirement: () => `reach ${format("1e4E6")} antimatter (all effects)`,
    hasFailed: () => Glitch.augmenteffectbits != 320,
    checkRequirement: () => Currency.antimatter.gte("1e4E6") && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "infinity dimensions are not effected by lai'tela",
    effect: () =>  1,
    formatEffect: value => "active"
  },
  {
    name: "1",
    id: 10,
    cost: 1e8,
    requirement: () => `reach ${format("1e4E6")} antimatter (all effects)`,
    hasFailed: () => false,
    checkRequirement: () => false && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "infinity dimensions are not effected by lai'tela",
    effect: () =>  1,
    formatEffect: value => "active"
  },
  {
    name: "2",
    id: 11,
    cost: 1e8,
    requirement: () => `reach ${format("1e4E6")} antimatter (all effects)`,
    hasFailed: () => false,
    checkRequirement: () => false && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "infinity dimensions are not effected by lai'tela",
    effect: () =>  1,
    formatEffect: value => "active"
  },
  {
    name: "3",
    id: 12,
    cost: 1e8,
    requirement: () => `reach ${format("1e4E6")} antimatter (all effects)`,
    hasFailed: () => false,
    checkRequirement: () => false && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "infinity dimensions are not effected by lai'tela",
    effect: () =>  1,
    formatEffect: value => "active"
  },
];
