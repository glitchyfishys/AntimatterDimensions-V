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
  <div>
    <div class="c-preinfinity-infotext">
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
.c-preinfinity-infotext {
  color: var(--color-text);
  margin: 2rem 0 1.5rem;
}
</style>
