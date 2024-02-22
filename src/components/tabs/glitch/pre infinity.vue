<script>

export default {
  name: "preinfinity"
  data(){
    return{
      upgradebits: 0,
      upgarades: []
    }
  },
  update(){
    return{
      upgradebits: player.glitch.upgradebits,
      upgarades: []
    }
  },
  
};
</script>

<template>
    <div class="c-preinfinity-infotext">
      hello destroyer.
    </div>
      <div
      v-for="row in 5"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <RealityUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
  
</template>

<style scoped>
.c-reality-upgrade-infotext {
  color: var(--color-text);
  margin: -1rem 0 1.5rem;
}
</style>
