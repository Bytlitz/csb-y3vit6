/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite15 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite15/costumes/costume1.svg", {
        x: 294.5,
        y: 184.74948529411756
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite15/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 326);
  }

  *whenIReceiveDead() {
    this.goto(0, 326);
    /* TODO: Implement data_hidevariable */ null;
    this.visible = true;
    for (let i = 0; i < 32; i++) {
      this.y += -10;
      yield;
    }
    /* TODO: Implement data_showvariable */ null;
    this.broadcast("button");
  }

  *whenIReceiveMenu() {
    /* TODO: Implement data_hidevariable */ null;
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = false;
  }
}
