/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("5227011", "./Stage/costumes/5227011.svg", {
        x: 297.00782268578894,
        y: 184.36505867014327
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "flap" }, this.whenIReceiveFlap),
      new Trigger(Trigger.BROADCAST, { name: "DEAD" }, this.whenIReceiveDead)
    ];

    this.vars.myVariable = 8;
    this.vars.check = 0;
    this.vars.score = 0;
    this.vars.highscore = 0;
    this.vars.Highscore = 4;
    this.vars.Skin = 1;
    this.vars.able = 0;
    this.vars.DataChecked = 0;
    this.vars.ableDeath = "yes";
    this.vars.aaaa = 0;
    this.vars.chance = 78;
    this.vars.OfSkinsUnlocked = 0;
    this.vars.SkinUn = 0;
    this.vars.chhhance = 14;
  }

  *whenGreenFlagClicked() {
    this.effects.color = 0;
    this.costume = 5227011;
    while (true) {
      this.vars.SkinUn = this.vars.OfSkinsUnlocked;
      this.vars.OfSkinsUnlocked = this.vars.SkinUn;
      yield;
    }
  }

  *whenIReceiveFlap() {
    while (true) {
      if (this.vars.score > this.vars.Highscore) {
        this.vars.Highscore = this.vars.score;
      }
      this.vars.SkinUn = this.vars.OfSkinsUnlocked;
      this.vars.OfSkinsUnlocked = this.vars.SkinUn;
      yield;
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
