/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite26 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite26/costumes/costume1.svg", {
        x: 116.25,
        y: 78.4221
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite26/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "SHOP2" }, this.whenIReceiveShop2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShop2() {
    this.visible = true;
    this.goto(119, 20);
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = false;
  }
}
