import { WidgetsRounded } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="http://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src="https://pbs.twimg.com/profile._images.124011999041155"
                alt="Netflix "
            />
        </div>
    );
}

export default Nav;
