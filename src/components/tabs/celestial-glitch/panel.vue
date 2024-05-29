
<script>
import GlyphSetPreview from "@/components/GlyphSetPreview";

export default {
  name: "GlitchRunButton",
  components: {
    GlyphSetPreview
  },
  data() {
    return {
      isRunning: false,
      tier: 0,
    };
  },
  computed: {
    runEffects() {
      return GameDatabase.celestials.descriptions[6].effects().split("\n");
    },
    runDescription() {
      return GameDatabase.celestials.descriptions[6].description();
    },
    isDoomed: () => Pelle.isDoomed,
  },
  methods: {
    update() {
      this.isRunning = Glitch.isRunning;
      this.tier = Glitch.tier;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "glitch's", number: 6 });
    },
    },
    runButtonClassObject() {
      return {
        "o-glitch-run-button__icon": true,
        "o-glitch-run-button__icon--running": this.isRunning,
        "c-celestial-run-button--clickable": !this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed
      };
    },
  }
};
</script>

<template>
  <button :class="classObject()">
    <span :class="{ 'o-pelle-disabled': isDoomed }">
      <b>Start Glitch's Reality</b>
    </span>
    <div
      :class="runButtonClassObject()"
      @click="startRun"
    />
    <br>
    <p>
      run tier {{tier}} of Glitch's Reality
    </p>
    <div>{{ runEffects }}</div>
    <br><br>
    <div>{{ runDescription }}</div>
  </button>
</template>
