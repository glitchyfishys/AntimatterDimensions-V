<script>
export default {
  name: "BreakInfinityButton",
  data() {
    return {
      isBroken: false,
      isUnlocked: false,
      isEnslaved: false,
    };
  },
  computed: {
    classObject() {
      return {
        "o-infinity-upgrade-btn": true,
        "o-infinity-upgrade-btn--color-2": true,
        "o-infinity-upgrade-btn--available": this.isUnlocked,
        "o-infinity-upgrade-btn--unavailable": !this.isUnlocked,
        "o-infinity-upgrade-btn--feel-eternity": this.isEnslaved,
        "o-infinity-upgrade-btn--unclickable": this.isBroken && !this.isEnslaved,
      };
    },
    tooltip() {
      if (this.isEnslaved) return "...eons stacked on eons stacked on eons stacked on eons stacked on ...";
      return undefined;
    },
    text() {
      if (this.isEnslaved) return "FEEL ETERNITY";
      return this.isBroken ? "INFINITY IS BROKEN" : "BREAK INFINITY";
    }
  },
  methods: {
    update() {
      this.isBroken = player.break;
      this.isUnlocked = Autobuyer.bigCrunch.hasMaxedInterval;
      this.isEnslaved = Enslaved.isRunning;
    },
    clicked() {
      if(!preinfinityUGs.all[7].isBought && player.options.confirmations.glitchCL){
        Modal.message.show(`you will fail glitch challenge ${preinfinityUGs.all[7].config.name} <br> which is to ${preinfinityUGs.all[7].config.requirement()}<br> maybe a challlenge can help? <br> you can disable this for <i>all</i> challenges in confirmations`);
      }
      if (this.isEnslaved) Enslaved.feelEternity();
      else if (!this.isBroken && this.isUnlocked) Modal.breakInfinity.show();
    }
  }
};
</script>

<template>
  <button
    v-tooltip="tooltip"
    :class="classObject"
    @click="clicked"
  >
    {{ text }}
  </button>
</template>

<style scoped>

</style>
