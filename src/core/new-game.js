import * as ADNotations from "@antimatter-dimensions/notations";

export const NG = {
  startNewGame() {
    GameEnd.creditsClosed = false;
    GameEnd.creditsEverClosed = false;
    player.isGameEnd = false;
    // We set this ASAP so that the AD tab is immediately recreated without END formatting, and any lag which could
    // happen is instead hidden by the overlay from the credits rollback
    player.celestials.pelle.doomed = false;

    // This is where we "confirm" a speedrun as completed and store all its information into the previous run prop
    // before resetting everything.
    const speedrun = player.speedrun;
    if (speedrun.isActive) {
      player.speedrun.previousRuns[player.records.fullGameCompletions + 1] = {
        isSegmented: speedrun.isSegmented,
        usedSTD: speedrun.usedSTD,
        startDate: speedrun.startDate,
        name: speedrun.name,
        offlineTimeUsed: speedrun.offlineTimeUsed,
        records: [...speedrun.records],
        achievementTimes: JSON.parse(JSON.stringify(speedrun.achievementTimes)),
        seedSelection: speedrun.seedSelection,
        initialSeed: speedrun.initialSeed,
      };

      // For the sake of keeping a bounded savefile size, we only keep a queue of the last 100 full runs. The earliest
      // this will feasibly become an issue from nonstop speedruns is around 2030; I guess we can revisit it at that
      // point if we really need to, but I suspect this limit should be high enough
      const prevRunIndices = Object.keys(speedrun.previousRuns).map(k => Number(k));
      if (prevRunIndices.length > 100) player.speedrun.previousRuns[prevRunIndices.min()] = undefined;
    }

    // Modify beaten-game quantities before doing a carryover reset
    player.records.fullGameCompletions++;
    GlyphAppearanceHandler.unlockSet();
    this.restartWithCarryover();

    // The ending animation ends at 12.5, although the value continues to increase after that. We set it to a bit above
    // 12.5 when we start the rollback animation to hide some of the unavoidable lag from all the reset functions
    GameEnd.removeAdditionalEnd = true;
    GameEnd.additionalEnd = 15;
    // Without the delay, this causes the saving (and its notification) to occur during the credits rollback
    setTimeout(() => GameStorage.save(), 10000);
  },

  // Reset the game, but carry over some post-completion stats. We also call this when starting a speedrun, so make sure
  // any stats which are updated due to completion happen in startNewGame() instead of in here
  restartWithCarryover() {
    const backUpOptions = JSON.stringify(player.options);
    // This can't be JSONed as it contains sets
    const secretUnlocks = player.secretUnlocks;
    const secretAchievements = JSON.stringify(player.secretAchievementBits);
    // We don't backup the whole player.reality.automator object because it contains "state",
    // which could lead to some edge cases where it starts when it shouldn't (ie before it's unlocked)
    // It's easier to do something like this to avoid it entirely.
    const automatorConstants = JSON.stringify(player.reality.automator.constants);
    const automatorConstantSort = JSON.stringify(player.reality.automator.constantSortOrder);
    const automatorScripts = JSON.stringify(player.reality.automator.scripts);
    const fullCompletions = player.records.fullGameCompletions;
    const fullTimePlayed = player.records.previousRunRealTime + player.records.realTimePlayed;
    const glyphCosmetics = JSON.stringify(player.reality.glyphs.cosmetics);
    const speedrunRecords = JSON.stringify(player.speedrun.previousRuns);
    const hasSpeedrun = player.speedrun.isUnlocked;
    const presets = JSON.stringify(player.timestudy.presets);
    const companions = JSON.stringify(Glyphs.allGlyphs.filter(g => g.type === "companion"));
    const celglitch = JSON.stringify(player.celestials.glitch);
    const glitch = JSON.stringify(player.glitch);
    const ach = JSON.stringify(player.achievementBits);

    const teresa = JSON.stringify(player.celestials.teresa);
    const effarig = JSON.stringify(player.celestials.effarig);
    const nameless = JSON.stringify(player.celestials.enslaved);
    const v = JSON.stringify(player.celestials.v);
    const ra = JSON.stringify(player.celestials.ra);
    const laitela = JSON.stringify(player.celestials.laitela);
    
    const glitchsave = GlitchRealityUpgrades.all[15].isBought;
    
    Modal.hideAll();
    Quote.clearAll();
    GameStorage.hardReset();
    player.options = JSON.parse(backUpOptions);
    // We need to force this one to be true because otherwise the player will be unable to select their glyphs
    // until they can auto-reality
    player.options.confirmations.glyphSelection = true;
    player.secretUnlocks = secretUnlocks;
    player.secretAchievementBits = JSON.parse(secretAchievements);
    player.reality.automator.constants = JSON.parse(automatorConstants);
    player.reality.automator.constantSortOrder = JSON.parse(automatorConstantSort);
    player.reality.automator.scripts = JSON.parse(automatorScripts);
    player.records.fullGameCompletions = fullCompletions;
    player.records.previousRunRealTime = fullTimePlayed;
    ui.view.newUI = player.options.newUI;
    ui.view.news = player.options.news.enabled;
    player.reality.glyphs.cosmetics = JSON.parse(glyphCosmetics);
    player.speedrun.previousRuns = JSON.parse(speedrunRecords);
    player.speedrun.isUnlocked = hasSpeedrun;
    player.timestudy.presets = JSON.parse(presets);
    JSON.parse(companions).forEach(g => {
      Glyphs.addToInventory(g);
    });
    Themes.find(Theme.currentName()).set();
    Notations.all.find(n => n.name === player.options.notation).setAsCurrent();
    ADNotations.Settings.exponentCommas.min = 10 ** player.options.notationDigits.comma;
    ADNotations.Settings.exponentCommas.max = 10 ** player.options.notationDigits.notation;
    player.lastUpdate = Date.now();

    if(glitchsave) {
      player.celestials.glitch = JSON.parse(celglitch);
      player.glitch = JSON.parse(glitch);
      player.celestials.glitch.riftforce = new Decimal(0);
      player.break = true;
      player.eternities = new Decimal(100);
      player.realities = 10000;
      player.reality.upgReqs = 1024;
      player.reality.upgradeBits = 1024;
      player.achievementBits = JSON.parse(ach);
      applyRUPG10();
      if(player.records.fullGameCompletions > 0) player.celestials.enslaved = JSON.parse(nameless);
      if(player.records.fullGameCompletions > 1) {
        player.celestials.v = JSON.parse(v);
        player.celestials.ra = JSON.parse(ra);
        player.celestials.ra.charged = new Set([
        "36Mult","galaxyBoost","resetBoost","18Mult","timeMult","dimMult","passiveGen","resetMult","timeMult2","unspentBonus","45Mult","27Mult"]);
      }
      if(player.records.fullGameCompletions > 2) player.celestials.effarig = JSON.parse(effarig);
      if(player.records.fullGameCompletions > 4) player.celestials.teresa = JSON.parse(teresa);
      if(player.records.fullGameCompletions > 5) player.celestials.laitela = JSON.parse(laitela);

      if(player.records.fullGameCompletions > 0) {player.reality.perks = new Set([0,201,10,40,57,202,30,12,41,70,71,31,203,14,13,101,100,
                    55,104,56,60,54,204,15,17,51, 102,42,53,52,107,105,61,72,205,16,80,43,106,62,73,302,81,44,303,82,103,45,83,46,301]);
        player.blackHole.forEach( i => {i.intervalUpgrades=160; i.intervalUpgrades=160; i.unlocked=true});
        player.reality.upgReqs = 67108800;
        Currency.antimatter.reset()
        Currency.infinityPoints.reset()
        Currency.eternityPoints.reset()
        Currency.eternities.reset();
      }
      
      GameStorage.save();
      GameStorage.load();
    }
    
  }
};
