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
    return this.requirement <= GlicthRifts[this.resource].percentage;
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

class RiftState extends GameMechanicState {
  constructor(config) {
    super(config);
    this._milestones = this.config.milestones.map(x => new RiftMilestoneState(x));
  }

  get canBeApplied() {
    return this.unlock;
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

  get drainResource() {
    return this.config.drainResource;
  }

  get effects() {
    const base = this.config.baseEffect(this.effectValue);
    const additional = this.config.additionalEffects?.().map(x => x.formattedEffect) ?? [];
    return [base, ...additional];
  }

  get isCustomEffect() { return true; }

  get effectValue() {
    return this.config.effect(this.config.percentageToFill(this.percentage));
  }

  get maxValue() {
    return this.config.percentageToFill(2 + this.spentPercentage);
  }

  get isMaxed() {
    return this.percentage >= 1;
  }

  get galaxyGeneratorText() {
    return this.config.galaxyGeneratorText;
  }

  toggle() {
    const active = PelleRifts.all.filter(r => r.isActive).length;
    if (!this.isActive && active === 3) GameUI.notify.error(`You can only have 3 rifts active at the same time!`);
    else this.rift.active = !this.rift.active;
  }

  checkMilestoneStates() {
    this.milestones.forEach(x => x.checkMilestoneState());
  }

  fill(diff) {
    this.id;
}

export const PelleRifts = mapGameDataToObject(
  GameDatabase.celestials.pelle.rifts,
  config => new RiftState(config)
);

PelleRifts.totalMilestones = () => PelleRifts.all.flatMap(x => x.milestones).countWhere(x => x.canBeApplied);
