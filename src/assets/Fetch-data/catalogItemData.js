import jostikM from "../Images/jostik-main.jpg";
import jostikO from "../Images/jostik-ol.jpg";
import jostikD from "../Images/jostik-old.jpg";
import jostikOp from "../Images/jostik.oposite.jpg";
import imgRating from "../Images/five.png";
import asusM from "../Images/asus-main.png";
import asusOld from "../Images/asus-old.png";
import asusorqa from "../Images/asus-orqa.png";
import asusLeft from "../Images/asus-left.png";

import monitorM from "../Images/monitor-main.jpg";
import monitorBack from "../Images/monitor-back.jpg";
import monitorLeft from "../Images/monito-left.jpg";
import monitorTop from "../Images/monitor-top.jpg";

const CatalogItemData = [
  {
    id: 1,
    img1: jostikO,
    img2: jostikOp,
    img3: jostikD,
    img4: jostikM,
    title: "HAVIT HV-G92 Gamepad",
    text: "ROG Strix SCAR 17 SE model year 2022, running the Windows 11 Pro operating system. Its configuration includes an Intel Core i9-12950HX processor, an ",
    rating: imgRating,
    price: 100,
    shopQuantity: 150,
  },
  {
    id: 2,
    img1: asusOld,
    img2: asusLeft,
    img3: asusorqa,
    img4: asusM,
    title: "HAVIT HV-G92 Gamepad",
    text: "ROG Strix SCAR 17 SE model year 2022, running the Windows 11 Pro operating system. Its configuration includes an Intel Core i9-12950HX processor, an ",
    rating: imgRating,
    price: 100,
    shopQuantity: 500,
  },
  {
    id: 3,
    img1: monitorBack,
    img2: monitorLeft,
    img3: monitorTop,
    img4: monitorM,
    title: "IPS LCD Gaming Monitor",
    text: "ROG Strix SCAR 17 SE model year 2022, running the Windows 11 Pro operating system. Its configuration includes an Intel Core i9-12950HX processor, an ",
    rating: imgRating,
    price: 100,
    shopQuantity: 500,
  },
];

export default CatalogItemData;
