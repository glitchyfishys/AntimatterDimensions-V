<script>
export default {
  name: "ChallengeRecordsList",
  props: {
    name: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: true
    },
    times: {
      type: Array,
      required: true
    }
  },
  computed: {
    timeSum() {
      let y = new Decimal(0);
      this.times.forEach(x => y = y.add(x));
      return y;
    },
    completedAllChallenges() {
      return this.timeSum.lt(Number.MAX_VALUE);
    }
  },
  methods: {
    timeDisplayShort,
    completionString(time) {
      return time.lt(Number.MAX_VALUE)
        ? `record time: ${timeDisplayShort(time)}`
        : "has not yet been completed";
    }
  }
};
</script>

<template>
  <div>
    <br>
    <div
      v-for="(time, i) in times"
      :key="i"
    >
      <span>{{ name }} {{ start + i }} {{ completionString(time) }}</span>
    </div>
    <br>
    <div v-if="completedAllChallenges">
      Sum of {{ name }} record times: {{ timeDisplayShort(timeSum) }}
    </div>
    <div v-else>
      You have not completed all {{ name }}s yet.
    </div>
  </div>
</template>
