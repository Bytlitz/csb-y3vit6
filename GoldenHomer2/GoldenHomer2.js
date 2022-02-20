/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GoldenHomer2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("golden homer", "./GoldenHomer2/costumes/golden homer.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "SHOP2" }, this.whenIReceiveShop2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop)
    ];
  }

  *whenIReceiveShop2() {
    this.goto(-161, 147);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
