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
  props.effect = () =>  player.celestials.glitch.upgrades.rebuyable[props.id];
  props.description = () => props.textTemplate.replace("{value}", formatInt(effect));
  props.formatEffect = value => formatX(value, 2, 0);
  props.formatCost = value => formatX(value, 2, 0);
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
    name: "Rift SideDrive",
    id: 2,
    initialCost: 1e308,
    costMult: 20,
    textTemplate: "You gain {value} more rift force",
    effect: 2
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
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRuning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "rift multiplies AD  while augmented",
    effect: () =>  Currency.riftForce.value.pow(1.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "augmented eternity",
    id: 6,
    cost: 1e308,
    requirement: "reach Infinity",
    hasFailed: () => false,
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRuning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "rift multiplies AD  while augmented",
    effect: () =>  Currency.riftForce.value.pow(1.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "augmented dilation",
    id: 7,
    cost: 1e308,
    requirement: "reach Infinity",
    hasFailed: () => false,
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRuning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "rift multiplies AD  while augmented",
    effect: () =>  Currency.riftForce.value.pow(1.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "augmented reality",
    id: 8,
    cost: 1e308,
    requirement: "reach Infinity",
    hasFailed: () => false,
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRuning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "rift multiplies AD  while augmented",
    effect: () =>  Currency.riftForce.value.pow(1.5),
    formatEffect: value => formatX(value, 2, 2)
  },

];
