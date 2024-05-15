<script>
import preinfinityupgradebutton from "./preinfinityupgrade";
  
export default {
  name: "preinfinity",
  components: {
    preinfinityupgradebutton
  },
  methods: {
    id(row, column) {
      return (row - 1) * 4 + column - 1;
    }
  },
  computed: {
    upgrades: () => preinfinityUGs.all
  }
};
  
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-preinfinity-infotext">
      hello destroyer.
      <br>
      i have some tests for you.
    </div>
  
      <div
      v-for="row in 2"
      :key="row"
      class="l-reality-upgrade-grid__row">
        
      <preinfinityupgradebutton
        v-for="column in 4"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"/>
    </div>
    
  </div>
</template>

<style scoped>
.c-preinfinity-infotext {
  color: var(--color-text);
  margin: 1.5rem 0 1.5rem;
}
</style>
