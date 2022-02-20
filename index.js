import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Title from "./Title/Title.js";
import Button from "./Button/Button.js";
import PlayButtonHitbox from "./PlayButtonHitbox/PlayButtonHitbox.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Homer from "./Homer/Homer.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import GoldenHomer from "./GoldenHomer/GoldenHomer.js";
import AngryHomer from "./AngryHomer/AngryHomer.js";
import ColdHomer from "./ColdHomer/ColdHomer.js";
import NeonHomer from "./NeonHomer/NeonHomer.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Sprite19 from "./Sprite19/Sprite19.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import Sprite21 from "./Sprite21/Sprite21.js";
import GoldenHomer2 from "./GoldenHomer2/GoldenHomer2.js";
import Button4 from "./Button4/Button4.js";
import Button5 from "./Button5/Button5.js";
import Sprite22 from "./Sprite22/Sprite22.js";
import Sprite23 from "./Sprite23/Sprite23.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import AngryHomer2 from "./AngryHomer2/AngryHomer2.js";
import Sprite24 from "./Sprite24/Sprite24.js";
import Sprite25 from "./Sprite25/Sprite25.js";
import AngryHomer3 from "./AngryHomer3/AngryHomer3.js";
import Sprite26 from "./Sprite26/Sprite26.js";
import Sprite27 from "./Sprite27/Sprite27.js";
import AngryHomer4 from "./AngryHomer4/AngryHomer4.js";
import Sprite28 from "./Sprite28/Sprite28.js";
import Sprite29 from "./Sprite29/Sprite29.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Title: new Title({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Button: new Button({
    x: -139,
    y: -93,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  PlayButtonHitbox: new PlayButtonHitbox({
    x: -139,
    y: -93,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  Button2: new Button2({
    x: -139,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true
  }),
  Button3: new Button3({
    x: -139,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: 300,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 88.66995073891626,
    visible: false
  }),
  Sprite6: new Sprite6({
    x: -55,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false
  }),
  Homer: new Homer({
    x: -40,
    y: -40,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  GoldenHomer: new GoldenHomer({
    x: 186,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  AngryHomer: new AngryHomer({
    x: -49,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  ColdHomer: new ColdHomer({
    x: 68,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  NeonHomer: new NeonHomer({
    x: -161,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: -160,
    y: -135,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: -121,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite4: new Sprite4({
    x: -1,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite7: new Sprite7({
    x: 119,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite8: new Sprite8({
    x: 239,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite11: new Sprite11({
    x: 64,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  Sprite12: new Sprite12({
    x: 184,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  Sprite13: new Sprite13({
    x: 304,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  Sprite14: new Sprite14({
    x: 300,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite15: new Sprite15({
    x: 0,
    y: 326,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite16: new Sprite16({
    x: -123,
    y: -92,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite17: new Sprite17({
    x: 113,
    y: -92,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite18: new Sprite18({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite19: new Sprite19({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite20: new Sprite20({
    x: -121,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite21: new Sprite21({
    x: -56,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  GoldenHomer2: new GoldenHomer2({
    x: -161,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Button4: new Button4({
    x: 120,
    y: 17,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Button5: new Button5({
    x: 120,
    y: 17,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true
  }),
  Sprite22: new Sprite22({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite23: new Sprite23({
    x: -55,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite10: new Sprite10({
    x: -56,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  AngryHomer2: new AngryHomer2({
    x: -49,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite24: new Sprite24({
    x: -1,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite25: new Sprite25({
    x: 64,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  AngryHomer3: new AngryHomer3({
    x: 79,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite26: new Sprite26({
    x: 119,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite27: new Sprite27({
    x: 184,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  AngryHomer4: new AngryHomer4({
    x: 186,
    y: 147,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false
  }),
  Sprite28: new Sprite28({
    x: 239,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite29: new Sprite29({
    x: 304,
    y: 78,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
