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
  methods: {
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  }
};
</script>

<template>
    <div class="c-preinfinity-infotext">
      hello destroyer.
    </div>
      <div
      v-for="row in 2"
      :key="row"
      class="preinfinityUG_row"
    >
      <preinfinityUB
        v-for="column in 2"
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
