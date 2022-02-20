/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite23/costumes/costume1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume2", "./Sprite23/costumes/costume2.svg", {
        x: -47.05715214851779,
        y: -1.154041056825264
      }),
      new Costume("costume3", "./Sprite23/costumes/costume3.svg", {
        x: 31.737086092715316,
        y: -0.12278937824385139
      }),
      new Costume("costume5", "./Sprite23/costumes/costume5.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite23/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap2),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap3),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gamble" },
        this.whenIReceiveGamble
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.score = 0;
  }

  *whenIReceivePlay() {
    this.visible = false;
  }

  *whenIReceiveDead() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveFlap() {
    this.visible = true;
    while (true) {
      this.goto(this.sprites["Sprite5"].x, this.sprites["Sprite5"].y);
      yield;
    }
  }

  *whenIReceiveFlap2() {
    this.visible = true;
  }

  *whenIReceiveFlap3() {
    this.visible = true;
    while (true) {
      if (this.costumeNumber == 3) {
        this.stage.vars.chhhance = this.random(1, 25);
        if (this.stage.vars.chhhance == 7) {
          this.visible = true;
        } else {
          this.visible = false;
        }
        yield* this.back();
        return;
      } else {
        null;
      }
      this.costume = this.stage.vars.check;
      yield;
    }
  }

  *whenIReceiveFlap4() {
    this.visible = true;
    while (true) {
      this.costume = this.stage.vars.check;
      if (this.costumeNumber == 3) {
        this.stage.vars.aaaa = "yes";
      } else {
        this.stage.vars.aaaa = 0;
      }
      yield;
    }
  }

  *whenIReceiveGamble() {
    this.stage.vars.chance = this.random(1, 100);
    if (this.stage.vars.chance == 2) {
      this.stage.vars.OfSkinsUnlocked += 1;
    }
  }

  *back() {
    if (this.costumeNumber == 3) {
      this.stage.vars.chhhance = this.random(1, 25);
      if (this.stage.vars.chhhance == 7) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    } else {
      null;
    }
  }
}
