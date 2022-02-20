/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 149.99772948719996,
        y: 295
      }),
      new Costume("costume3", "./Sprite5/costumes/costume3.svg", {
        x: 45.99484500829996,
        y: 290
      }),
      new Costume("costume2", "./Sprite5/costumes/costume2.svg", {
        x: 69.9955095478,
        y: 346.5
      }),
      new Costume("costume4", "./Sprite5/costumes/costume4.svg", {
        x: 204.00075258060002,
        y: 310.9996166292001
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu2),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu3),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.check = 0;
    /* TODO: Implement data_hidevariable */ null;
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
    this.goto(300, 0);
  }

  *whenIReceiveGo() {
    /* TODO: Implement data_showvariable */ null;
    this.goto(300, 0);
    this.costume = "costume1";
    this.stage.vars.check = 1;
    this.visible = true;
    while (true) {
      this.x += -10;
      if (
        this.x == -270 ||
        this.x == -288 ||
        this.x == -258 ||
        this.x == -328 ||
        this.x == -400 ||
        this.x == -254 ||
        this.x == -316
      ) {
        this.visible = false;
        this.costume = this.random(1, 4);
        this.stage.vars.check = this.costumeNumber;
        this.goto(300, 0);
        this.visible = true;
      }
      yield;
    }
  }

  *whenIReceiveMenu() {
    this.visible = false;
  }

  *whenIReceiveMenu2() {
    this.visible = false;
  }

  *whenIReceiveMenu3() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
