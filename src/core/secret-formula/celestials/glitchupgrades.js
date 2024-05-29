import { DC } from "../../constants";

const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.augment.rebuyables[props.id],
    1e10,
    props.initialCost,
    props.costMult,
    props.costMult / 10,
    DC.E100,
    1e3,
    props.initialCost * props.costMult
  );
  const { effect } = props;
  props.effect = () =>  player.augmented.rebuyables[props.id]);
  props.description = () => props.textTemplate.replace("{value}",
    ImaginaryUpgrade(props.id).effectValue === 0
      ? formatInt(effect)
      : format(effect + ImaginaryUpgrade(props.id).effectValue, 2, 2));
  props.formatEffect = value => formatX( Math.min(value, 1e250) , 2, 0);
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
  {
    name: "augmented Infinity",
    id: 8,
    cost: 10,
    requirement: "reach Infinity",
    hasFailed: () => false,
    checkRequirement: () => player.infinities.gt(0) && Glitch.isRuning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    description: "rift multiplies AD  while augmented",
    effect: () =>  Glitch.riftforce.pow(1.5),
    formatEffect: value => formatX(value, 2, 2)
  },

];
