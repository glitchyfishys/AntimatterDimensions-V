<script>
import preinfinityupgradebutton from "./preinfinityupgrade";
  
export default {
  name: "glitchreality",
  components: {
    preinfinityupgradebutton
  },
  methods: {
    id(row, column) {
      return (row - 1) * 7 + column - 1;
    }
  },
  computed: {
    upgrades: () => realityUGs.all
  }
};
  
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-reality-infotext">
      here we are
      <br>
      the end is nigh
      <br>
      the most powerfull
    </div>
  
      <div
      v-for="row in 2"
      :key="row"
      class="l-reality-upgrade-grid__row">
        
      <preinfinityupgradebutton
        v-for="column in 7"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"/>
    </div>
    
  </div>
</template>

<style scoped>
.c-reality-infotext {
  color: var(--color-text);
  margin: 1.5rem 0 1.5rem;
}
</style>
