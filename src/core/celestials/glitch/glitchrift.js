import { GameMechanicState } from "../../utils";

class RiftMilestoneState extends GameMechanicState {

  lastChecked = false;

  get requirement() {
    return this.config.requirement;
  }

  get resource() {
    return this.config.resource;
  }

  checkMilestoneState() {
    if (this.lastChecked !== this.isUnlocked) {
      this.config.onStateChange?.();
    }
    this.lastChecked = this.isUnlocked;
  }

  get isUnlocked() {
    return this.requirement <= GlitchRifts.all[this.resource].percentage;
  }

  get isEffectActive() {
    return this.isUnlocked;
  }

  get description() {
    const d = this.config.description;
    return typeof d === "function" ? d() : d;
  }

  get formattedEffect() {
    if (this.canBeApplied) return this.config.formatEffect(this.effectValue);
    return false;
  }
}

class GRift extends GameMechanicState {
  constructor(config) {
    super(config);
    this._milestones = this.config.milestones.map(x => new RiftMilestoneState(x));
  }

  get fillCurrency() {
    return this.config.currency();
  }

  get canBeApplied() {
    return this.strike.hasStrike;
  }

  get name() {
    return this.config.name;
  }

  get reducedTo() {
    return this.rift.reducedTo;
  }

  set reducedTo(value) {
    this.rift.reducedTo = value;
  }

  get rift() {
    return player.celestials.glitch.rifts[this.config.key];
  }

  get totalFill() {
    return this.rift.fill;
  }

  set totalFill(value) {
    this.rift.fill = value;
  }

  get isActive() {
    return this.rift.active;
  }

  get realPercentage() {
    return this.config.percentage(this.totalFill);
  }

  get spentPercentage() {
    return this.rift.percentageSpent || 0;
  }

  get percentage() {
    if (this.reducedTo > 1) return this.reducedTo;
    if (!this.config.spendable) return Math.min(this.realPercentage, this.reducedTo);
    return Math.min(this.config.percentage(this.totalFill) - this.spentPercentage, this.reducedTo);
  }

  get milestones() {
    return this._milestones;
  }

  get description() {
    return this.config.description;
  }

  get effects() {
    this.milestones.forEach(x => x.forEach(milestone => milestone.effectOrDefault(1)))
    return [];
  }

  get isCustomEffect() { return true; }

  get maxValue() {
    return this.config.percentageToFill(2 + this.spentPercentage);
  }

  get isMaxed() {
    return this.percentage >= 1;
  }

  checkMilestoneStates() {
    this.milestones.forEach(x => x.checkMilestoneState());
  }
  
}
export const GlitchRifts = mapGameDataToObject(
  GameDatabase.celestials.GlitchRifts,
  config => new GRift(config)
);
