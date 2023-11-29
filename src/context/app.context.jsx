import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [section1Image, setImageInSection1] = useState({
    1: "https://media.defense.gov/2015/Mar/04/2001021034/-1/-1/0/140909-F-BM801-016.JPG",
  });
  const [boxColor, setColorInBox] = useState({
    1: "#00ff00",
    2: "#EE0405",
    3: "#0E4BEF",
  });
const [boxImage, setBoxImage] = useState({
    1: "https://cdna.artstation.com/p/assets/images/images/039/502/596/large/punit-padhiyar-black6.jpg?1626105561",
    2: "https://mcn-images.bauersecure.com/wp-images/4705/1440x960/2023_bmw_s1000rr_01.jpg?mode=max&quality=90&scale=down",
    3: "https://images8.alphacoders.com/120/1203030.jpg",
})
const [boxTopic, setBoxTopic] = useState({
  1: "Kawasaki Ninja H2R",
  2: "BMW S1000RR",
  3: "Yamaha R1",
})

  const [sectionOrder, setSectionByOrder] = useState({
    1: "1",
    2: "2",
    3: "3",
  });
const [sectionColor, setSectionColor] = useState({
  1: "#D3D3D3",
  2: "#D3D3D3",
})

  const [footerText, setTextInFooter] = useState({
    1: "Made by",
    2: "Tymoteusz Tymendorf"
  });
  
  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};