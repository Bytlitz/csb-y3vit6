/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("", "./Button2/costumes/.svg", {
        x: 59.00000000000003,
        y: 36
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "FADE" }, this.whenIReceiveFade),
      new Trigger(Trigger.BROADCAST, { name: "rank" }, this.whenIReceiveRank)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-139, -90);
    this.visible = true;
  }

  *whenIReceivePlay() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = false;
  }

  *whenIReceiveMainMenu() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveFade() {
    this.visible = true;
  }

  *whenIReceiveRank() {
    this.visible = false;
  }
}
