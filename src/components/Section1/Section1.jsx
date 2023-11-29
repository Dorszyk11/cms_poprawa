import "./Section1.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Section1 = () => {
  const { section1Image } = useContext(AppContext);
  return (
        <div className="picture">
          <img src={section1Image[1]} alt="" />
        </div>
  );
};

export default Section1;