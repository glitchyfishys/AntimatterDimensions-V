
<script>
import BlackHoleChargingSliders from "@/components/tabs/black-hole/BlackHoleChargingSliders";
import CelestialQuoteHistory from "@/components/CelestialQuoteHistory";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import GlitchRunButton from "./panel";
import GlitchUpgrade from "./GlitchUpgrade";

export default {
  name: "GlitchTab",
  components: {
    CelestialQuoteHistory,
    PrimaryButton,
    PrimaryToggleButton,
    BlackHoleChargingSliders,
    GlitchRunButton,
    GlitchUpgrade,
  },
  computed: {
    runEffects() {
      return GameDatabase.celestials.descriptions[6].effects().split("\n");
    },
    runDescription() {
      return this.augments;
    },
    isDoomed: () => Pelle.isDoomed,
    upgrades: () => GlitchRealityUpgrades.all,
  },
  data: () => ({
    isRunning: false,
    quote: "",
    bits: 0,
    augments: makeEnumeration(Glitch.activeaugments),
  }),
  methods: {
    update() {
      this.isRunning = Glitch.isRunning;
      this.quote = Glitch.quote;
      this.bits = Glitch.augmenteffectbits;
      this.augments = Glitch.activeaugments;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "glitch'", number: 6 });
    },
    effects(id){
      if(this.isRunning) return false;
      if ((player.celestials.glitch.augment.effectbits & (1 << id)) > 0) player.celestials.glitch.augment.effectbits &= ~(1 << id);
      else player.celestials.glitch.augment.effectbits |= (1 << id);
    },
    activeaugment(id){
      return Glitch.augmenteffectactive(id, true);
    },
    effectname(id){
      return Glitch.augmenteffects(id);
    },
    id(row, column) {
      return (row - 1) * 4 + column - 1;
    },
  },
};
</script>

<template>
  <div class="l-glitch-celestial-tab">
   work in progress
    
  <CelestialQuoteHistory celestial="glitch"/>
    
    <GlitchRunButton />

    <div>
    <PrimaryButton
      v-for="x in 9"
      :key="x"
      class="o-primary-btn--subtab-option"
      @click="effects(x-1)">
      
      <p v-if="activeaugment(x-1)">
        remove {{effectname(x-1)}}
      </p>
      <p v-else>
        enable {{effectname(x-1)}}
      </p>
      
    </PrimaryButton>

      <br>
      glitch's reality effects {{runDescription}}
    </div>
    
    <BlackHoleChargingSliders />

    <div class="l-reality-upgrade-grid">
    <div class="c-glitch-upgrade-infotext">
      the first 4 are repeatable, the others are like reality upgrades but can't be locked
    </div>
  
      <div
      v-for="row in 2"
      :key="row"
      class="l-reality-upgrade-grid__row">
        
      <GlitchUpgrade
        v-for="column in 4"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"/>
    </div>
    
  </div>
    
  </div>
</template>

<style scoped>

.l-glitch-tab {
  margin-top: 1rem;
}

.c-glitch-upgrade-infotext {
  color: var(--color-text);
  margin: 1.5rem 0 1.5rem;
}
</style>
