import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './style.css';   

function NavBar () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false)

    return(

        <>

            <header className="header" id="header">
                <nav className="nav" id="nav">
                    <Link onClick={closeMenu} to="/" className="nav-logo">Logo</Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <div className="hamburger-container">
                            <div onClick={handleClick} className="hamburger">
                                <div className="linha"></div>
                                <div className="linha"></div>
                                <div className="linha"></div>
                            </div>
                        </div>
                        <li className="nav-item"><Link onClick={handleClick} to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link onClick={handleClick} to="/Animes" className="nav-link">Animes</Link></li>
                        <li className="nav-item"><Link onClick={handleClick} to="/Mangas" className="nav-link">Mangas</Link></li>
                        <li className="nav-item"><Link onClick={handleClick} to="/Jogos" className="nav-link">Jogos</Link></li>
                    </ul>
                    <div onClick={handleClick} className="hamburger">
                        <div className="linha"></div>
                        <div className="linha"></div>
                        <div className="linha"></div>
                    </div>
                </nav>
            </header>

        </>

    )

}

export default NavBar;