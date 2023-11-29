import './Home.scss';
import { Header, Section1, Section2, Section3 } from './../../components';
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Home = () => {
    const { sectionOrder } = useContext(AppContext);
    return (
        <div className="home-container">
            <Header/>
            <div style={{order: sectionOrder[1]}}><Section1 /></div>
            <div style={{order: sectionOrder[2]}}><Section2 /></div>
            <div style={{order: sectionOrder[3]}}><Section3 /></div>
        </div>
    )
}
export default Home;