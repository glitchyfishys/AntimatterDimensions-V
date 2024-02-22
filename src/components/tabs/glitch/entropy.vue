<script>

export default {
  name: "Entropy",
  }
};
</script>

<template>
    <div class="c-entropy-infotext">
      Every completed row of purchased upgrades increases your Glyph level by {{ formatInt(1) }}.
    </div>
    <div
      v-for="row in 0"
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
