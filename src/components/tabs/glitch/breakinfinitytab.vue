<script>
import preinfinityupgradebutton from "./preinfinityupgrade";
  
export default {
  name: "glitchbreak",
  components: {
    preinfinityupgradebutton
  },
  methods: {
    id(row, column) {
      return (row - 1) * 3 + column - 1;
    }
  },
  computed: {
    upgrades: () => breakinfinityUGs.all
  }
};
  
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-breakinfinity-infotext">
      progressing fast
      <br>
      these should slow you down
    </div>
  
      <div
      v-for="row in 2"
      :key="row"
      class="l-reality-upgrade-grid__row">
        
      <preinfinityupgradebutton
        v-for="column in 3"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"/>
    </div>
    
  </div>
</template>

<style scoped>
.c-breakinfinity-infotext {
  color: var(--color-text);
  margin: 1.5rem 0 1.5rem;
}
</style>
