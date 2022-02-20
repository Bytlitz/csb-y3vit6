/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AngryHomer4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("homer (1)", "./AngryHomer4/costumes/homer (1).png", {
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
    this.visible = true;
    this.goto(186, 147);
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
