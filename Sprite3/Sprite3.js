/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 249,
        y: 190
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.able = 0;
  }

  *whenIReceivePlay() {
    this.goto(0, 0);
    this.effects.ghost = 99;
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenthisspriteclicked() {
    this.broadcast("flap");
    this.broadcast("go");
    this.visible = false;
  }

  *whenIReceiveGo() {
    this.stage.vars.able = "yes";
  }

  *whenIReceiveDead() {
    this.stage.vars.able = 0;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
