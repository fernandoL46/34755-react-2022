import React from 'react';
import Secciones from '../layouts/Sections';
import Cartwidget from '../layouts/Cartwidget';
import Form from '../layouts/Form';




    function Navbar({ }) {

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">0212 Dark Kitchen</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <Secciones />
                            </ul>
                            <Cartwidget />
                            <hr />
                            <Form busqueda="Que se te antoja?" />

                        </div>
                    </div>
                </nav>

            </>
        );
    }
export default Navbar;

