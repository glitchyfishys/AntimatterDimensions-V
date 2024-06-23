<script>
import ChallengeRecordsList from "./ChallengeRecordsList";

export default {
  name: "ChallengeRecordsTab",
  components: {
    ChallengeRecordsList
  },
  data() {
    return {
      infinityChallengesUnlocked: false,
      normalChallenges: [],
      infinityChallenges: []
    };
  },
  methods: {
    update() {
      this.infinityChallengesUnlocked = PlayerProgress.infinityChallengeCompleted() || PlayerProgress.eternityUnlocked();
      let n = [];
      n.push(player.challenge.normal.bestTimes);
      this.normalChallenges = n.flat().slice(0);
      
      let i = [];
      i.push(player.challenge.normal.bestTimes);
      this.infinityChallenges = i.flat().slice(0);
    }
  }
};
</script>

<template>
  <div class="l-challenge-records-tab c-stats-tab">
    <ChallengeRecordsList
      :start="2"
      :times="normalChallenges"
      name="Normal Challenge"
    />
    <ChallengeRecordsList
      v-if="infinityChallengesUnlocked"
      :start="1"
      :times="infinityChallenges"
      name="Infinity Challenge"
      class="l-challenge-records-tab__infinity_challenges"
    />
  </div>
</template>
