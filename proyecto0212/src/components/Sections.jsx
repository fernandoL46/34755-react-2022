import React from 'react';

const Sections = () => {
    return (
        <>
           
                <li className="nav-item">
                    <a className="nav-link active" href="#">Quienes somos?
                        <span className="visually-hidden">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">iniciar sesion</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                
           
        </>
    );
}

export default Sections;
