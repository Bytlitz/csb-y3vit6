/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite17/costumes/costume1.svg", {
        x: 48.43970440157261,
        y: 26.055033252564954
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite17/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "button" },
        this.whenIReceiveButton
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement data_hidevariable */ null;
    this.goto(113, -92);
    this.visible = false;
  }

  *whenIReceiveButton() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Play");
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = false;
  }
}
