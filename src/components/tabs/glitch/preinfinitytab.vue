<script>

export default {
  name: "preinfinity",
  data(){
    return{
      upgradebits: 0
    }
  },
  update(){
    return{
      upgradebits: player.glitch.upgradebits
    }
  },
  methods: {
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  },
  computed: {
    upgrades: () => preinfinityUG.all
  }
};
  
</script>

<template>
  <div>
    <div class="c-preinfinity-infotext">
      hello destroyer.
    </div>
  
      <div
      v-for="row in 2"
      :key="row"
      class="preinfinityUG_row">
        
      <preinfinityUB
        v-for="column in 2"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"/>
    </div>
    
  </div>
</template>

<style scoped>
.c-reality-upgrade-infotext {
  color: var(--color-text);
  margin: -1rem 0 1.5rem;
}
</style>
