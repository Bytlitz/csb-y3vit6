/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 180.91666666666666,
        y: -130.70927661430136
      }),
      new Costume("costume2", "./Sprite13/costumes/costume2.svg", {
        x: 180.91666666666666,
        y: -130.70927161430137
      }),
      new Costume("costume3", "./Sprite13/costumes/costume3.svg", {
        x: 180.91666666666666,
        y: -125.2610632172217
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

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
    this.goto(304, 78);
    while (true) {
      if (
        this.stage.vars.Highscore == 100 ||
        this.stage.vars.Highscore > 100 ||
        this.stage.vars.OfSkinsUnlocked == 4 ||
          this.stage.vars.OfSkinsUnlocked > 4
      ) {
        if (this.stage.vars.OfSkinsUnlocked < 4) {
          this.stage.vars.OfSkinsUnlocked = 4;
        }
        if (this.stage.vars.Skin == 5) {
          this.costume = "costume1";
        } else {
          this.costume = "costume2";
        }
      } else {
        this.costume = "costume3";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.stage.vars.Highscore == 100 ||
      this.stage.vars.Highscore > 100 ||
      this.stage.vars.OfSkinsUnlocked == 4 ||
        this.stage.vars.OfSkinsUnlocked > 4
    ) {
      this.costume = "costume1";
      this.stage.vars.Skin = 5;
    } else {
      null;
    }
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveShop2() {
    this.visible = false;
  }
}
