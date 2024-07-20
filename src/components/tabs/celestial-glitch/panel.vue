
<script>

export default {
  name: "GlitchRunButton",
  data() {
    return {
      isRunning: false,
      tier: 0,
      time: 0,
    };
  },
  computed: {
    runEffects() {
      return GameDatabase.celestials.descriptions[6].effects().split("\n");
    },
    runDescription() {
      return Glitch.activeaugments;
    },
    isDoomed: () => Pelle.isDoomed,
    runButtonClassObject() {
      return {
        "o-glitch-run-button__icon": true,
        "o-glitch-run-button__icon--running": this.isRunning,
        "c-celestial-run-button--clickable": !this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed
      };
    },
    realitytime(){
      return timeDisplayShort(this.time)
    },
    
  },
  watch: {
    autoRelease(newValue) {
      player.celestials.enslaved.isAutoReleasing = newValue;
    }
  },
  methods: {
    update() {
      this.isRunning = Glitch.isRunning;
      this.tier = Glitch.tier;
      this.time = player.records.thisReality.realTime;
    },
    decay(){
      return Glitch.augmenteffectactive(9) ? " and a decay of 1 /" +  format(Glitch.decay,2,2) + " to glitch's reality nerfs": "";
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "glitch's", number: 6 });
    },
    glitchStyle(x) {
      const xScale = 15 / 27;
      const yScale = 5;
      const dx = (x - 13) * xScale + (Math.random() * 2 - 1) * 0.85;
      const dy = (Math.random() * 2 - 1) * yScale;
      const height = (Math.pow(Math.random(), 1.5) + 0.25) * 3 * yScale;
      return {
        transform: `translate(${dx}rem, ${dy}rem)`,
        height: `${height}rem`,
      };
    },
    render(){
      return 15 + Math.floor(Math.random() * 11);
    },
  }
};
</script>

<template>
  <button class="o-glitch-run-button">
    <span :class="{ 'o-pelle-disabled': isDoomed }">
      <b>Start Glitch's Reality</b>
    </span>
      <div
      :class="runButtonClassObject"
      @click="startRun">
      
      <div
      v-for="x in (isRunning ? 25 : 0)"
      :key="x"
      class="c-glitch-run-button__icon__glitch"
      :style="glitchStyle(x)"
      />
    </div>
    
    <br>
    <p>
      run tier {{tier}} of Glitch's Reality
    </p>
    <br><br>
    <div v-if="isRunning"> time in this reality {{realitytime + " " + decay()}}</div>
  </button>
</template>
