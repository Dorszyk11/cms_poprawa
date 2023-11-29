import "./Section2.scss";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";
const Boxes = () => {
  const { boxColor, boxImage, sectionColor, boxTopic } = useContext(AppContext);

  return (
    <div id="boxes" className="container">
      <div className="boxes" style={{ backgroundColor: sectionColor[1] }}>
       <div className="box" style={{ backgroundColor: boxColor[1] }}>
        <div className="image-cointainer">
            <img src={boxImage[1]} alt="" />
          </div>
          <h2>{boxTopic[1]}</h2>
          <ul>
            <li>310 koni mechanicznych</li>
            <li>0-100kmph - 2,5s</li>
            <li>waga - 216 kg</li>
            <li>v max - 400kmph</li>
            <li>pojemność silnika - 999cm3</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColor[2] }}>
          <div className="image-cointainer">
            <img src={boxImage[2]} alt="" />
          </div>
          <h2>{boxTopic[2]}</h2>
          <ul>
            <li>210 koni mechanicznych</li>
            <li>0-100kmph - 3,21s</li>
            <li>waga - 204</li>
            <li>v max - 303kmph</li>
            <li>pojemność silnika - 999cm3</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColor[3] }}>
        <div className="image-cointainer">
            <img src={boxImage[3]} alt="" />
          </div>
          <h2>{boxTopic[3]}</h2>
          <ul>
            <li>222 koni mechanicznych</li>
            <li>0-100kmph - 2,9s</li>
            <li>waga - 201 Kg</li>
            <li>v max - 299kmph</li>
            <li>pojemność silnika - 998cm3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boxes;