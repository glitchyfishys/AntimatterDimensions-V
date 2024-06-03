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
  props.effect = () =>  Decimal.pow(effect,player.celestials.glitch.upgrades.rebuyable[props.id]);
  props.description = () => props.textTemplate.replace("{value}", formatX(effect));
  props.formatEffect = value => formatX(value, 2, 0);
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
    textTemplate: "glyph sacrifice is {value} times higher",
    effect: 1e10
  }),
  rebuyable({
    name: "Rift SubLoad",
    id: 3,
    initialCost: 1e308,
    costMult: 20,
    textTemplate: "You gain {value} more rift force",
    effect: 2
  }),
  rebuyable({
    name: "Rift CosmicFlight",
    id: 4,
    initialCost: 1e308,
    costMult: 20,
    textTemplate: "You gain {value} more rift force",
    effect: 2
  }),
  {
    name: "augmented Infinity",
    id: 5,
    cost: 10,
    requirement: "reach Infinity",
    hasFailed: () => false,
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "riftforce multiplies AD while augmented uneffected by Celestial Reality's",
    effect: () =>  Currency.riftForce.value.pow(2.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "augmentation of IP",
    id: 6,
    cost: 20,
    requirement: () => `infinity for ${format("1.8e308",2,2)} infinity points`,
    hasFailed: () => false,
    checkRequirement: () => Currency.infinityPoints.gte("1.8e308") && Glitch.isRunning && Glitch.activeaugments.length >= 9,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "while augmented laitela's max Dimension count is one higher",
    effect: () =>  1,
    formatEffect: value => formatX(value)
  },
  {
    name: "reinforcement",
    id: 7,
    cost: 50,
    requirement: () => `reach ${format("1e1E13")} antimatter with Teresa, Nameless dim limit and Lai'tela`,
    hasFailed: () => false,
    checkRequirement: () => Currency.antimatter.gte("1e1E13") && Glitch.isRunning && player.celestials.glitch.augment.effectbits == 265,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "you only are forced to have 4 cursed glyphs",
    effect: () =>  1,
    formatEffect: value => formatX(value)
  },
  {
    name: "augmented reality",
    id: 8,
    cost: 1e308,
    requirement: "reach Infinity",
    hasFailed: () => false,
    checkRequirement: () => false && Glitch.isRunning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "rift multiplies AD  while augmented",
    effect: () =>  Currency.riftForce.value.pow(1.5),
    formatEffect: value => formatX(value, 2, 2)
  },

];
