/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Homer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Homer/costumes/1.png", { x: 47, y: 72 }),
      new Costume("2", "./Homer/costumes/2.svg", {
        x: 24.7222222222222,
        y: 37.083333333333314
      }),
      new Costume("3", "./Homer/costumes/3.svg", {
        x: 25.3333333333334,
        y: 38
      }),
      new Costume("4", "./Homer/costumes/4.svg", {
        x: 26.777777777777743,
        y: 40.166666666666686
      }),
      new Costume("5", "./Homer/costumes/5.svg", {
        x: 26.951760000000036,
        y: 40.42764
      }),
      new Costume("6", "./Homer/costumes/6.svg", {
        x: 27.722083551622234,
        y: 40.41656920271552
      }),
      new Costume("7", "./Homer/costumes/7.svg", { x: 24.5, y: 37 }),
      new Costume("8", "./Homer/costumes/8.svg", {
        x: 25.04427000000001,
        y: 37.42464000000001
      }),
      new Costume("9", "./Homer/costumes/9.svg", {
        x: 25.155149934810964,
        y: 37.732724902216376
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap2),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap3),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay2),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap4),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-40, -40);
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = true;
  }

  *whenIReceiveFlap() {
    this.stage.vars.myVariable = 0;
    while (true) {
      this.stage.vars.myVariable += -1;
      this.y += this.stage.vars.myVariable;
      yield;
    }
  }

  *whenIReceiveFlap2() {
    this.stage.vars.score = 0;
  }

  *whenIReceiveFlap3() {
    while (true) {
      if (this.touching(this.sprites["Sprite5"].andClones())) {
        if (this.stage.vars.ableDeath == "yes") {
          this.visible = false;
          this.broadcast("DEAD");
          /* TODO: Implement stop other scripts in sprite */ null;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay2() {
    this.costume = this.stage.vars.Skin;
    /* TODO: Implement data_hidevariable */ null;
    this.goto(-40, -40);
    this.stage.vars.score = 0;
    while (true) {
      if (this.touching(this.sprites["Sprite6"].andClones())) {
        this.stage.vars.score += 1;
        yield* this.wait(0.3);
      }
      yield;
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveFlap4() {
    while (true) {
      if (this.mouse.down || this.keyPressed("space")) {
        this.stage.vars.myVariable = 10;
        while (!!(this.mouse.down || this.keyPressed("space"))) {
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceivePlay3() {
    this.stage.vars.ableDeath = "yes";
    while (true) {
      if (this.touching(this.sprites["Sprite23"].andClones())) {
        if (this.stage.vars.aaaa == "yes") {
          this.broadcast("gamble");
        } else {
          this.stage.vars.ableDeath = "no";
          yield* this.wait(5);
          this.stage.vars.ableDeath = "yes";
        }
      }
      yield;
    }
  }
}
