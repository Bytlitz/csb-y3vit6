/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Sprite14/costumes/costume3.svg", {
        x: 180.91666666666666,
        y: -125.26098321722168
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite14/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "rank" }, this.whenIReceiveRank)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
    this.goto(300, 0);
  }

  *whenthisspriteclicked() {
    this.broadcast("MAIN MENU");
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveRank() {
    this.visible = true;
    this.goto(-58, 0);
  }
}
