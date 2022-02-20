/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("TITLE", "./Title/costumes/TITLE.svg", {
        x: 240,
        y: 175.16968325791856
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
      new Trigger(Trigger.BROADCAST, { name: "FADE" }, this.whenIReceiveFade),
      new Trigger(Trigger.BROADCAST, { name: "rank" }, this.whenIReceiveRank)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
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

  *whenIReceiveFade() {
    this.visible = true;
  }

  *whenIReceiveRank() {
    this.visible = false;
  }
}
