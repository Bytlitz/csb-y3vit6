/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayButtonHitbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlayButtonHitbox/costumes/costume1.svg", {
        x: 48.57692499999999,
        y: 85.096155
      })
    ];

    this.sounds = [new Sound("pop", "./PlayButtonHitbox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay),
      new Trigger(Trigger.BROADCAST, { name: "Play" }, this.whenIReceivePlay2),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "MAIN MENU" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "FADE" }, this.whenIReceiveFade)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-139, -93);
    /* TODO: Implement looks_gotofrontback */ null;
    this.effects.ghost = 99;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("Play");
  }

  *whenIReceivePlay() {
    this.visible = false;
  }

  *whenIReceivePlay2() {
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
}
