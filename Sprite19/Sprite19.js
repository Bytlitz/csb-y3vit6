/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite19 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite19/costumes/costume1.svg", {
        x: -199.58333666666664,
        y: 177.750015
      }),
      new Costume("costume2", "./Sprite19/costumes/costume2.svg", {
        x: -199.58333666666664,
        y: 177.750005
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite19/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.costume = "costume1";
    this.visible = true;
    this.goto(0, 0);
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.broadcast("SHOP2");
      this.costume = "costume2";
      return;
    } else {
      this.broadcast("shop");
      this.costume = "costume1";
      return;
    }
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }
}
