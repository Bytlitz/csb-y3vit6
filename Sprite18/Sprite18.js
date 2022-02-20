/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.svg", {
        x: 276.5,
        y: 196.75
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite18/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.effects.ghost = 0;
    this.goto(0, 0);
    this.visible = true;
    yield* this.wait(2);
    this.broadcast("FADE");
    for (let i = 0; i < 10; i++) {
      this.effects.brightness += -10;
      yield;
    }
    yield* this.wait(0.2);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
  }
}
