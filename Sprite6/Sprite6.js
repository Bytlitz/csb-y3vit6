/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 99.5,
        y: 83.5
      }),
      new Costume("costume2", "./Sprite6/costumes/costume2.svg", {
        x: -16.5,
        y: 55.5
      }),
      new Costume("costume3", "./Sprite6/costumes/costume3.svg", {
        x: 37.5,
        y: 78.5
      }),
      new Costume("costume5", "./Sprite6/costumes/costume5.svg", {
        x: 107.5,
        y: 70.5
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costume = this.stage.vars.check;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.score = 0;
  }

  *whenIReceivePlay() {
    this.effects.ghost = 99;
    this.visible = true;
    while (true) {
      this.goto(this.sprites["Sprite5"].x, this.sprites["Sprite5"].y);
      yield;
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
