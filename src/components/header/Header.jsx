import './Header.scss';
import { useContext } from 'react';
import { AppContext } from './../../context/app.context';
import { Link } from 'react-router-dom';

const Header = () => {
    const { logged, setLogged } = useContext(AppContext);
    const logout = () => {
        setLogged(false);
    }
    return(
        <div className="header-container container">
            <h1 className="logo">#<span>Motocykle</span>_życiem</h1>
            <ul className="menu">
                {!logged && <li><a href="/admin">Zaloguj</a></li>}
                {logged && <li><a href="/" onClick={() => logout()}>Wyloguj</a></li>}
                {logged && <li className="admin"><Link to='admin'>Admin</Link></li>}
            </ul>
        </div>
    )
}

export default Header;