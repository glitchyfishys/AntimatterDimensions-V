<script>
  
import GlitchRiftBar from "./glitchriftbar";

export default {
  name: "GlitchRift",
  components: {
    GlitchRiftBar
  },
  data() {
    return {
      isMaxed: false,
      totalFill: 0,
      hasEffectiveFill: false,
      effects: []
    };
  },
  props: {
    rift: {
      type: Object,
      required: true
    },
  },
  computed: {
    Grift() {
      return this.rift;
    },
  },
  methods: {
    update() {
      const rift = this.Grift.rift;
      this.isMaxed = rift.isMaxed;
      this.setValue("totalFill", rift.totalFill);
      this.effects = this.rift.effects;
    },
    // One rift has a number and the others are all Decimals; this reduces boilerplate for setting multiple values
    setValue(key, value) {
      this[key] = value;

    },
    // One-off formatting function; needs to format large Decimals and a small number assumed to be a percentage
    formatRift(value) {
      return `${formatInt(100 * value)}%`;
    },
    riftName() {
      return this.rift.name;
    }
  },
};
</script>

<template>
  <div
    class="c-pelle-single-bar"
  >
    <div class="c-pelle-rift">
      <div>
        <div class="c-pelle-rift-status">
          <h2 class="c-pelle-rift-name-header">
            {{ riftName() }}
          </h2>
          <div class="c-pelle-rift-rift-info-container">
            <div
              v-for="(effect, idx) in effects"
              :key="idx"
            >
              {{ effect || "" }}
            </div>
          </div>
        </div>
        <div>
          <GlitchRiftBar :rift="rift" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-pelle-single-bar {
  display: inline-table;
}

.c-pelle-rift {
  flex-direction: column;
  align-items: center;
  border: var(--var-border-width, 0.2rem) solid var(--color-pelle--base);
  border-radius: var(--var-border-radius, 0.5rem);

  /* transparent crimson */
  box-shadow: inset 0 0 1rem 0.1rem rgba(237, 20, 61, 45%), 0 0 1rem 0.1rem rgba(237, 20, 61, 45%);
  margin-top: 0.8rem;
  padding: 0.5rem;
}

.t-s1 .c-pelle-rift {
  box-shadow: none;
}

.c-pelle-rift-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-pelle-rift-rift-info-container {
  height: 5rem;
  font-weight: 400;
  color: var(--color-text);
}

.c-pelle-rift-status {
  display: inline-block;
}

.c-pelle-rift-name-header {
  font-weight: bold;
  color: var(--color-pelle--base);
  padding: 0.2rem;
}
</style>
