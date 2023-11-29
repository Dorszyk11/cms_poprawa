import { useContext } from 'react';
import './Section3.scss';
import { AppContext } from '../../context/app.context';

const Footer = () => {
    const { footerText, sectionColor } = useContext(AppContext)
    return(
        <div className="footer-container container" style={{ backgroundColor: sectionColor[2] }}>
            <h2>{footerText[1]}<span>{footerText[2]}</span></h2>
        </div>
    )
}
export default Footer;