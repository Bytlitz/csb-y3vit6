/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite22 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite22/costumes/costume1.svg", {
        x: 238.25,
        y: 194.459397779622
      }),
      new Costume("costume2", "./Sprite22/costumes/costume2.svg", {
        x: 238.25,
        y: 192.45959777962202
      }),
      new Costume("costume3", "./Sprite22/costumes/costume3.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume4", "./Sprite22/costumes/costume4.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume5", "./Sprite22/costumes/costume5.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume6", "./Sprite22/costumes/costume6.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume7", "./Sprite22/costumes/costume7.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume8", "./Sprite22/costumes/costume8.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume9", "./Sprite22/costumes/costume9.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume10", "./Sprite22/costumes/costume10.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume11", "./Sprite22/costumes/costume11.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume12", "./Sprite22/costumes/costume12.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume13", "./Sprite22/costumes/costume13.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume14", "./Sprite22/costumes/costume14.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume15", "./Sprite22/costumes/costume15.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume16", "./Sprite22/costumes/costume16.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume17", "./Sprite22/costumes/costume17.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume18", "./Sprite22/costumes/costume18.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume19", "./Sprite22/costumes/costume19.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume20", "./Sprite22/costumes/costume20.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume21", "./Sprite22/costumes/costume21.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume22", "./Sprite22/costumes/costume22.svg", {
        x: 242.32944031643726,
        y: 192.45959777962202
      }),
      new Costume("costume24", "./Sprite22/costumes/costume24.svg", {
        x: 242.2818521743503,
        y: 192.4596
      }),
      new Costume("costume23", "./Sprite22/costumes/costume23.svg", {
        x: 240.32944031643726,
        y: 192.45959777962202
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite22/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "rank" }, this.whenIReceiveRank),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRank() {
    /* TODO: Implement data_showvariable */ null;
    yield* this.checkRank();
    this.visible = true;
  }

  *checkRank() {
    if (this.stage.vars.Highscore == 0 || this.stage.vars.Highscore < 50) {
      this.costume = "costume1";
      return;
    }
    if (this.stage.vars.Highscore == 50 || this.stage.vars.Highscore < 50) {
      this.costume = "costume2";
      return;
    }
    if (this.stage.vars.Highscore == 150 || this.stage.vars.Highscore < 150) {
      this.costume = "costume3";
      return;
    }
    if (this.stage.vars.Highscore == 100 || this.stage.vars.Highscore < 100) {
      this.costume = "costume4";
      return;
    }
    if (this.stage.vars.Highscore == 200 || this.stage.vars.Highscore < 200) {
      this.costume = "costume5";
      return;
    }
    if (this.stage.vars.Highscore == 400 || this.stage.vars.Highscore < 400) {
      this.costume = "costume6";
      return;
    }
    if (this.stage.vars.Highscore == 800 || this.stage.vars.Highscore < 800) {
      this.costume = "costume7";
      return;
    }
    if (this.stage.vars.Highscore == 900 || this.stage.vars.Highscore < 900) {
      this.costume = "costume8";
      return;
    }
    if (this.stage.vars.Highscore == 1000 || this.stage.vars.Highscore < 1000) {
      this.costume = "costume9";
      return;
    }
    if (this.stage.vars.Highscore == 1200 || this.stage.vars.Highscore < 1200) {
      this.costume = "costume10";
      return;
    }
    if (this.stage.vars.Highscore == 1400 || this.stage.vars.Highscore < 1400) {
      this.costume = "costume11";
      return;
    }
    if (this.stage.vars.Highscore == 1600 || this.stage.vars.Highscore < 1600) {
      this.costume = "costume12";
      return;
    }
    if (this.stage.vars.Highscore == 1800 || this.stage.vars.Highscore < 1800) {
      this.costume = "costume13";
      return;
    }
    if (this.stage.vars.Highscore == 2000 || this.stage.vars.Highscore < 2000) {
      this.costume = "costume14";
      return;
    }
    if (this.stage.vars.Highscore == 2400 || this.stage.vars.Highscore < 2400) {
      this.costume = "costume15";
      return;
    }
    if (this.stage.vars.Highscore == 2800 || this.stage.vars.Highscore < 2800) {
      this.costume = "costume16";
      return;
    }
    if (this.stage.vars.Highscore == 3600 || this.stage.vars.Highscore < 3600) {
      this.costume = "costume17";
      return;
    }
    if (this.stage.vars.Highscore == 4000 || this.stage.vars.Highscore < 4000) {
      this.costume = "costume18";
      return;
    }
    if (this.stage.vars.Highscore == 5000 || this.stage.vars.Highscore < 5000) {
      this.costume = "costume19";
      return;
    }
    if (this.stage.vars.Highscore == 6200 || this.stage.vars.Highscore < 6200) {
      this.costume = "costume20";
      return;
    }
    if (this.stage.vars.Highscore == 7000 || this.stage.vars.Highscore < 7000) {
      this.costume = "costume21";
      return;
    }
    if (this.stage.vars.Highscore == 8000 || this.stage.vars.Highscore < 8000) {
      this.costume = "costume22";
      return;
    }
    if (this.stage.vars.Highscore == 9000 || this.stage.vars.Highscore < 9000) {
      this.costume = "costume24";
      return;
    }
    if (
      this.stage.vars.Highscore == 10000 ||
      this.stage.vars.Highscore > 10000
    ) {
      this.costume = "costume23";
      return;
    }
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
    /* TODO: Implement data_hidevariable */ null;
  }
}
