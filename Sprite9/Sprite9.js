/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 180.91666666666666,
        y: -130.70927661430136
      }),
      new Costume("costume2", "./Sprite9/costumes/costume2.svg", {
        x: 180.91666666666666,
        y: -130.70927161430137
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "SHOP2" }, this.whenIReceiveShop2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
    this.goto(0, 0);
    while (true) {
      if (this.stage.vars.Skin == 1) {
        if (!(this.stage.vars.Skin > 1)) {
          this.costume = "costume1";
        }
      } else {
        this.costume = "costume2";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.costume = "costume1";
    this.stage.vars.Skin = 1;
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveShop2() {
    this.visible = false;
  }
}
