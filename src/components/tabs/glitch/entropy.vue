<script>
  
import GlitchRift from "./glitchrift";
  
export default {
  name: "entropy",
  components: {
    GlitchRift
  },
  methods: {
    rifts() {
      return GlitchRift.all;
    },
    totalrifts() {
      return GlitchRift.all.length;
    }
  },
};
</script>

<template>
    <div class="c-entropy-infotext">
      hello destroyer.
      fill these please.

      <GlitchRift
          v-for="r in totalrifts"
          :key="r.config.id"
          :strike="r"
        />
    </div>
  
</template>

<style scoped>
.c-reality-upgrade-infotext {
  color: var(--color-text);
  margin: -1rem 0 1.5rem;
}
</style>
