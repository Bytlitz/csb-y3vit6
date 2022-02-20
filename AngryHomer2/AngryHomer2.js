/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AngryHomer2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("angry homer", "./AngryHomer2/costumes/angry homer.svg", {
        x: 144.33333333333331,
        y: 41.666666666666714
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
    this.visible = true;
    this.goto(-49, 147);
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
