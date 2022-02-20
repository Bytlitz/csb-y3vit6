/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.svg", {
        x: 48.311042722839545,
        y: 26.56967996749711
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

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
    this.goto(-123, -92);
    this.visible = false;
  }

  *whenIReceiveButton() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("MAIN MENU");
    this.broadcast("menu");
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceivePlay() {
    this.visible = false;
  }
}
