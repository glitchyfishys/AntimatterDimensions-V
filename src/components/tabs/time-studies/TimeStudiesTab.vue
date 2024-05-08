<script>
import { STUDY_TREE_LAYOUT_TYPE, TimeStudyTreeLayout } from "./time-study-tree-layout";
import DilationTimeStudy from "./DilationTimeStudy";
import ECTimeStudy from "./ECTimeStudy";
import EnslavedTimeStudy from "./EnslavedTimeStudy";
import HiddenTimeStudyConnection from "./HiddenTimeStudyConnection";
import NormalTimeStudy from "./NormalTimeStudy";
import PrimaryButton from "@/components/PrimaryButton";
import SecretTimeStudy from "./SecretTimeStudy";
import TimeStudyConnection from "./TimeStudyConnection";
import TriadTimeStudy from "./TriadTimeStudy";
export default {
  name: "TimeStudiesTab",
  components: {
    PrimaryButton,
    NormalTimeStudy,
    ECTimeStudy,
    EnslavedTimeStudy,
    DilationTimeStudy,
    TriadTimeStudy,
    SecretTimeStudy,
    TimeStudyConnection,
    HiddenTimeStudyConnection
  },
  data() {
    return {
      respec: player.respec,
      layoutType: STUDY_TREE_LAYOUT_TYPE.NORMAL,
      vLevel: 0,
      renderedStudyCount: 0,
      renderedConnectionCount: 0,
      isEnslaved: false,
      delayTimer: 0,
      allowECcomplete: false,
      ECreq: [],
      remaine: 60,
    };
  },
  computed: {
    layout() {
      return TimeStudyTreeLayout.create(this.layoutType);
    },
    allStudies() {
      return this.layout.studies;
    },
    studies() {
      return this.allStudies.slice(0, this.renderedStudyCount);
    },
    allConnections() {
      return this.layout.connections;
    },
    connections() {
      return this.allConnections.slice(0, this.renderedConnectionCount);
    },
    treeStyleObject() {
      return {
        width: `${this.layout.width}rem`,
        height: `${this.layout.height}rem`
      };
    },
    respecClassObject() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-primary-btn--respec-active": this.respec
      };
    }
  },
  watch: {
    respec(newValue) {
      player.respec = newValue;
    },
    vLevel() {
      // When vLevel changes, we recompute the study tree because of triad studies
      this.$recompute("layout");
    }
  },
  created() {
    const incrementRenderedCount = () => {
      let shouldRequestNextFrame = false;
      if (this.renderedStudyCount < this.allStudies.length) {
        this.renderedStudyCount += 2;
        shouldRequestNextFrame = true;
      }
      if (this.renderedConnectionCount < this.allConnections.length) {
        this.renderedConnectionCount += 2;
        shouldRequestNextFrame = true;
      }
      if (shouldRequestNextFrame) {
        this.renderAnimationId = requestAnimationFrame(incrementRenderedCount);
      }
    };
    incrementRenderedCount();
    // CSS controlling the fade in/out for the Enslaved study is an animation happening over the course of 1 second.
    // Removing it normally via key-switching ends up getting rid of it immediately without animating, which we do if it
    // wasn't purchased - otherwise it animates to the unbought state and then remove it after the animation finishes.
    this.on$(GAME_EVENT.REALITY_RESET_AFTER, () => {
      this.delayTimer = player.celestials.enslaved.hasSecretStudy
        ? Date.now()
        : 0;
    });
    // Scroll to top because time studies tab is rendered progressively
    // and we don't want the player to see empty space while it's loading.
    document.body.scrollTop = 0;
  },
  beforeDestroy() {
    cancelAnimationFrame(this.renderAnimationId);
  },
  methods: {
    update() {
      this.respec = player.respec;
      this.layoutType = STUDY_TREE_LAYOUT_TYPE.current;
      this.vLevel = Ra.pets.v.level;
      this.isEnslaved = Enslaved.isRunning || Date.now() - this.delayTimer < 1000;
      this.allowECcomplete = PlayerProgress.realityUnlocked();
      this.ECreq = [undefined,"1e20", "1e20", "1e20", "1e40", "1e50", "1e60", "1e70", "1e80", "1e100","1e150","1e1300","1e1400","1e1E300"];
      this.remaine = EternityChallenges.remainingCompletions;
    },
    studyComponent(study) {
      switch (study.type) {
        case TIME_STUDY_TYPE.NORMAL: return NormalTimeStudy;
        case TIME_STUDY_TYPE.ETERNITY_CHALLENGE: return ECTimeStudy;
        case TIME_STUDY_TYPE.DILATION: return DilationTimeStudy;
        case TIME_STUDY_TYPE.TRIAD: return TriadTimeStudy;
      }
      throw "Unknown Time Study type";
    },
    exportStudyTree() {
      if (player.timestudy.studies.length === 0) {
        GameUI.notify.error("You cannot export an empty Time Study Tree!");
      } else {
        copyToClipboard(GameCache.currentStudyTree.value.exportString);
        GameUI.notify.info("Exported current Time Studies to your clipboard");
      }
    },
    ECc(){
      if(this.isEnslaved) return GameUI.notify.error("can't be used in the Namelessones' reality",3000)
      if(Effarig.isRunning && Effarig.currentStage < 4) return GameUI.notify.error("can't be used in the Effarig's reality, untill reality layer is complete",3000)
      let h=0;
      for(let i=1; i <= 12; i++){
        if(!Currency.eternityPoints.gte(this.ECreq[i])) break;
        if(player.eternityChalls["eterc" + i] < 5 || player.eternityChalls["eterc" + i] == undefined) {
          player.eternityChalls["eterc" + i] = 5;
        }
          h = i;
      }
       if(!Currency.eternityPoints.gte("1e4000")) h == 12 ?  GameUI.notify.eternity("All EC's are completed",3000) : GameUI.notify.eternity("full completed EC's up to " + (h) + ", next ec" + (h+1) + " at " + format( new Decimal(this.ECreq[h+1])) + " EP",3000);
    },
  }
}
</script>
<template>
  <div class="l-time-studies-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="exportStudyTree"
      >
        Export tree
      </PrimaryButton>
      <PrimaryButton
        :class="respecClassObject"
        @click="respec = !respec"
      >
        Respec Time Studies on next Eternity
      </PrimaryButton>
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        onclick="Modal.studyString.show({ id: -1 })"
      >
        Import tree
      </PrimaryButton>


    <span v-if="allowECcomplete">
      <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="ECc"
        >
        <span v-if="isEnslaved">
        broken by compaction of this reality
        </span>
        <span v-else>
        complete EC's
        </span>
        
      </PrimaryButton>
    </span>
      
    </div>
    <div
      class="l-time-study-tree l-time-studies-tab__tree"
      :style="treeStyleObject"
    >
      <component
        :is="studyComponent(setup.study)"
        v-for="(setup) in studies"
        :key="setup.study.type.toString() + setup.study.id.toString()"
        :setup="setup"
      />
      <SecretTimeStudy :setup="layout.secretStudy" />
      <EnslavedTimeStudy
        v-if="isEnslaved"
        :setup="layout.enslavedStudy"
      />
      <svg
        :style="treeStyleObject"
        class="l-time-study-connection"
      >
        <TimeStudyConnection
          v-for="(setup, index) in connections"
          :key="'connection' + index"
          :setup="setup"
        />
        <HiddenTimeStudyConnection :setup="layout.secretStudyConnection" />
        <HiddenTimeStudyConnection
          v-if="isEnslaved"
          :setup="layout.enslavedStudyConnection"
          :is-enslaved="isEnslaved"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped>
</style>
