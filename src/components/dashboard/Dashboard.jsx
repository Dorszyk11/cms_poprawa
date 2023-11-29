import "./Dashboard.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const {
    section1Image,
    setImageInSection1,
    boxColor,
    setColorInBox,
    boxImage,
    setBoxImage,
    sectionOrder,
    setSectionByOrder,
    footerText,
    setTextInFooter,
    sectionColor,
    setSectionColor,
    boxTopic,
    setBoxTopic,
  } = useContext(AppContext);

  const setImageInSection1Hanlder = (e) => {
    const imageNumber = Number(e.target.name);
    const imageValue = e.target.value;

    section1Image[imageNumber] = imageValue;

    setImageInSection1(section1Image);
  };

  const setColorInBoxHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxColorValue = e.target.value;

    boxColor[boxNumber] = boxColorValue;

    setColorInBox(boxColor);
  };

  const setSectionByOrderHandler = (e) => {
    const sectionNumber = Number(e.target.name);
    const sectionNumberValue = e.target.value;

    sectionOrder[sectionNumber] = sectionNumberValue;
    setSectionByOrder(sectionOrder);
  };

  const setTextInFooterHandler = (e) => {
    const footerNumber = Number(e.target.name);
    const footerNumberValue = e.target.value;
    footerText[footerNumber] = footerNumberValue;
    setTextInFooter(footerText)
  }
  const setBoxImageHanlder = (e) => {
    const imageInBoxNumber = Number(e.target.name);
    const imageInBoxValue = e.target.value;

    boxImage[imageInBoxNumber] = imageInBoxValue;

    setBoxImage(boxImage);
  };
  const setSectionColorHandler = (e) => {
    const sectionNumber = Number(e.target.name);
    const sectionColorValue = e.target.value;

    sectionColor[sectionNumber] = sectionColorValue;

    setSectionColor(sectionColor);
  };
  const setBoxTopicHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxNumberValue = e.target.value;
    boxTopic[boxNumber] = boxNumberValue;
    setBoxTopic(boxTopic)
  }
  return (
    <div className="dashboard-container">
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="sections-order">
            <h4>Descrioptions Order</h4>
            <div className="sections-inputs">
            <div className="element">
              <p>1</p>
              <input
                onChange={(e) => setSectionByOrderHandler(e)}
                defaultValue={sectionOrder[1]}
                type="number"
                min={1}
                max={3}
                name="1"
              /></div>
              <div className="element">
              <p>2</p>
              <input
                onChange={(e) => setSectionByOrderHandler(e)}
                defaultValue={sectionOrder[2]}
                type="number"
                min={1}
                max={3}
                name="2"
              /></div>
              <div className="element">
              <p>3</p>
              <input
                onChange={(e) => setSectionByOrderHandler(e)}
                defaultValue={sectionOrder[3]}
                type="number"
                min={1}
                max={3}
                name="3"
              /></div>
            </div>
            <div className="section-background-color">
              <h4>Section Background Color</h4>
            <div className="element">
              <p>1</p>
              <input
                onChange={(e) => setSectionColorHandler(e)}
                defaultValue={sectionColor[1]}
                type="color"
                name="1"
              /></div>
              <div className="element">
              <p>2</p>
              <input
                onChange={(e) => setSectionColorHandler(e)}
                defaultValue={sectionColor[2]}
                type="color"
                name="2"
              /></div>
            </div>
          </div>
      <div className="section-settings">
        <div className="image-link">
          <h2>Section 1 - Image</h2>
          <div className="inputs">
            <h4>Image link</h4>
            <div className="element">
            <p>1</p>
            <input
              onChange={(e) => setImageInSection1Hanlder(e)}
              defaultValue={section1Image[1]}
              type="text"
              name="1"
              placeholder="enter url"
            /></div>
          </div>
        </div>
          <div className="box-colors">
            <h2>Section 2 - Boxes</h2>
            <div className="color-input">
            <h4>Boxes colors</h4>
            <div className="element">
              <p>2</p>
              <input
                onChange={(e) => setColorInBoxHandler(e)}
                defaultValue={boxColor[1]}
                type="color"
                name="2"
              /></div>
              <div className="element">
              <p>2</p>
              <input
                onChange={(e) => setColorInBoxHandler(e)}
                defaultValue={boxColor[2]}
                type="color"
                name="2"
              /></div>
              <div className="element">
              <p>3</p>
              <input
                onChange={(e) => setColorInBoxHandler(e)}
                defaultValue={boxColor[3]}
                type="color"
                name="3"
              /></div>
            </div>
            <h4>Boxes links</h4>
            <div className="element">
            <p>1</p>
            <input
              onChange={(e) => setBoxImageHanlder(e)}
              defaultValue={boxImage[1]}
              type="text"
              name="1"
              placeholder="enter url"
            /></div>
            <div className="element">
            <p>2</p>
            <input
              onChange={(e) => setBoxImageHanlder(e)}
              defaultValue={boxImage[2]}
              type="text"
              name="2"
              placeholder="enter url"
            /></div>
            <div className="element">
            <p>3</p>
            <input
              onChange={(e) => setBoxImageHanlder(e)}
              defaultValue={boxImage[3]}
              type="text"
              name="3"
              placeholder="enter url"
            /></div>
            <div className="box-topic">
              <h4>Boxes Topics</h4>
            <div className="element">
           <p>1</p>
           <input defaultValue={boxTopic[1]} onChange={(e) => setBoxTopicHandler(e)} name="1" type="text" 
           placeholder="enter text"/>
           </div>
           <div className="element">
           <p>2</p>
           <input defaultValue={boxTopic[2]} onChange={(e) => setBoxTopicHandler(e)} name="2" type="text" 
           placeholder="enter text"/>
           </div>
           <div className="element">
           <p>3</p>
           <input defaultValue={boxTopic[3]} onChange={(e) => setBoxTopicHandler(e)} name="3" type="text" 
           placeholder="enter text"/>
           </div>
            </div>
          </div>
          <div className="footer-text">
            <h2>Section 3 - Footer</h2>
            <h4>Footer texts</h4>
          <div className="element">
           <p>1</p>
           <input defaultValue={footerText[1]} onChange={(e) => setTextInFooterHandler(e)} name="1" type="text" 
           placeholder="enter text"/>
           </div>
           <div className="element">
           <p>2</p>
           <input defaultValue={footerText[2]} onChange={(e) => setTextInFooterHandler(e)} name="2" type="text" 
           placeholder="enter text"/>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;