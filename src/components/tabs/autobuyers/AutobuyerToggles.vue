<script>
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "AutobuyerToggles",
  components: {
    PrimaryButton,
    PrimaryToggleButton
  },
  data() {
    return {
      isDoomed: false,
      autobuyersOn: false,
      ADbulk: false,
      ADs: [],
      maxed: false,
      showContinuum: false,
      disableContinuum: false,
      allAutobuyersDisabled: false
    };
  },
  watch: {
    autobuyersOn(newValue) {
      player.auto.autobuyersOn = newValue;
    },
    disableContinuum(newValue) {
      if (ImaginaryUpgrade(21).isLockingMechanics && !newValue) {
        ImaginaryUpgrade(21).tryShowWarningModal();
        return;
      }
      Laitela.setContinuum(!newValue);
    }
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.autobuyersOn = player.auto.autobuyersOn;
      this.ADbulk = player.auto.antimatterDims.all.filter(auto => auto.mode == 1).length > 0;
      this.ADs = Autobuyer.antimatterDimension.zeroIndexed;
      this.showContinuum = Laitela.isUnlocked;
      this.disableContinuum = player.auto.disableContinuum;
      this.allAutobuyersDisabled = Autobuyers.unlocked.every(autobuyer => !autobuyer.isActive);
      
      this.maxed = true;
      let m = 0;
      this.ADs.forEach(ad => {
        if(ad.bulk >= 512 && ad.interval <= 100) m++;
        if(m == 8) this.maxed = false;
      })
    },
    bulk() {
      if(this.ADbulk) {
       player.auto.antimatterDims.all.every(x => x.mode = 10)
      }
      else{
        player.auto.antimatterDims.all.every(x => x.mode = 1)
      }
    },
    upmax() {
      if(this.admaxed) return;
      for (const ab of this.ADs) {
        if(ab.isUnlocked) {
          if(!ab.interval <= 100) ab.upgradeInterval();
          if(ab.interval <= 100 && ab.bulk < 512) ab.upgradeBulk();
        }
      }
    },
    toggleAllAutobuyers() {
      for (const autobuyer of Autobuyers.unlocked) {
        autobuyer.isActive = this.allAutobuyersDisabled;
      }
    }
  }
};
</script>

<template>
  <div class="c-subtab-option-container">
    <PrimaryToggleButton
      v-model="autobuyersOn"
      on="Pause autobuyers"
      off="Resume autobuyers"
      class="o-primary-btn--subtab-option"
    />
    
    <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="toggleAllAutobuyers()">
      {{ allAutobuyersDisabled ? "Enable" : "Disable" }} all autobuyers
    </PrimaryButton>
    
      <PrimaryButton
      class="o-primary-btn--subtab-option"
      @click="bulk()">
        AD buy {{ ADbulk ? "max" : "single" }}
    </PrimaryButton>
    
    <span v-if="isDoomed">
      <PrimaryButton
        v-if="showContinuum"
        class="o-primary-btn--subtab-option"
      >
        Continuum is disabled
      </PrimaryButton>
      
    </span>
    <span v-else>
      <PrimaryToggleButton
        v-if="showContinuum"
        v-model="disableContinuum"
        on="Enable Continuum"
        off="Disable Continuum"
        class="o-primary-btn--subtab-option"
      />
    </span>

    <span v-if="maxed">
        <PrimaryButton
          class="o-primary-btn--subtab-option"
          @click="upmax()">
          upgrade all AD autobuyers
        </PrimaryButton>
    </span>
  </div>
  
</template>

<style scoped>

</style>
