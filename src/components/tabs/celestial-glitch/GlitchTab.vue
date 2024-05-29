
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
    GlitchRunButton
  },
  data: () => ({
    isRunning: false,
    quote: "",
  }),
  methods: {
    update() {
      this.isRunning = Glitch.isRunning;
      this.quote = Glitch.quote;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "The Nameless Ones'", number: 2 });
    },
    glitchStyle(x) {
      const xScale = 15 / 19;
      const yScale = 6;
      const dx = (x - 13) * xScale + (Math.random() * 2 - 1) * 0.9;
      const dy = (Math.random() * 2 - 1) * yScale;
      const height = (Math.pow(Math.random(), 1.5) + 0.25) * 3 * yScale;
      return {
        transform: `translate(${dx}rem, ${dy}rem)`,
        height: `${height}rem`,
      };
    },
  },
};
</script>

<template>
  <div class="l-glitch-tab">
    blank for now
    
    <GlitchRunButton />
    
    <BlackHoleChargingSliders />
    
  </div>
</template>

<style scoped>

.l-glitch-tab {
  margin-top: 1rem;
}
</style>
