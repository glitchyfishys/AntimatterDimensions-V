<script>
import preinfinityupgradebutton from "./preinfinityupgrade";
  
export default {
  name: "glitcheternity",
  components: {
    preinfinityupgradebutton
  },
  methods: {
    id(row, column) {
      return (row - 1) * 3 + column - 1;
    }
  },
  computed: {
    upgrades: () => eternityUGs.all
  }
};
  
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-eternity-infotext">
      this is the biggest threshold
      <br>
      get a many as you can
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
.c-eternity-infotext {
  color: var(--color-text);
  margin: 1.5rem 0 1.5rem;
}
</style>
