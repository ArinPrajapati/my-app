import PropTypes from 'prop-types';
import React from 'react';
import {
    Link
} from "react-router-dom";



export default function Nabar(props) {


    const colorFtheme = (event) => {
        console.log(event.target.innerText);

        let colorFthemeVar = props.colorTheme(event.target.innerText);
        return colorFthemeVar;
    }

    return (

        <nav className={`navbar navbar-expand-lg bg-${props.mode} bg-body-tertiary`} data-bs-theme={`${props.mode}`} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <button type="button" className="btn btn-primary mx-2" onClick={colorFtheme}>Blue</button>
                    <button type="button" className="btn btn-secondary mx-2  " onClick={colorFtheme}>Gray</button>
                    <button type="button" className="btn btn-success mx-2 " onClick={colorFtheme}>Green</button>
                    <button type="button" className="btn btn-warning mx-2" onClick={colorFtheme}>Yellow</button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/home'>{props.tabOne}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.tabTwo}</Link>
                        </li>


                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}

                </div>
                <div className="form-check form-switch mx-5">
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
                </div>
            </div>
        </nav>

    )
}

Nabar.propTypes = {

    title: PropTypes.string.isRequired,
    tabOne: PropTypes.string,
    tabTwo: PropTypes.string,


};


Nabar.defaultProps = {
    title: "Set title here",
    tabOne: "Tab 1",
    tabTwo: "Tab 2",
};



