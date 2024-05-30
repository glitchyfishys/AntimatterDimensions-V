
<script>
import BlackHoleChargingSliders from "@/components/tabs/black-hole/BlackHoleChargingSliders";
import CelestialQuoteHistory from "@/components/CelestialQuoteHistory";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import GlitchRunButton from "./panel";

export default {
  name: "GlitchTab",
  components: {
    CelestialQuoteHistory,
    PrimaryButton,
    PrimaryToggleButton,
    BlackHoleChargingSliders,
    GlitchRunButton,
  },
  data: () => ({
    isRunning: false,
    quote: "",
    time: 0,
  }),
  methods: {
    update() {
      this.isRunning = Glitch.isRunning;
      this.quote = Glitch.quote;
      this.time = player.records.thisReality.realTime;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "glitch'", number: 6 });
    },
    effects(id){
      if ((player.celestials.glitch.augment.effectbits & (1 << id)) > 0) player.celestials.glitch.augment.effectbits &= ~(1 << id);
      else player.celestials.glitch.augment.effectbits |= (1 << id);
    },
    activeaugment(id){
      return (player.celestials.glitch.augment.effectbits & (1 << id)) > 0;
    }
  },
};
</script>

<template>
  <div class="l-glitch-celestial-tab">
   work in progress
    
  <CelestialQuoteHistory celestial="glitch"/>
    
    <GlitchRunButton />

    <PrimaryButton
      v-if="activeaugment(0)"
      class="o-primary-btn--subtab-option"
      @click="effects(0)">
    remove Teresa's Reality
    </PrimaryButton>
    
    <PrimaryButton
      v-else
      class="o-primary-btn--subtab-option"
      @click="effects(0)">
      enable Teresa's Reality
    </PrimaryButton>
    
    
    <BlackHoleChargingSliders />
    
  </div>
</template>

<style scoped>

.l-glitch-tab {
  margin-top: 1rem;
}
</style>
