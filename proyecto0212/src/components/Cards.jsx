import React from 'react';

const Cards = () => {
    return (
        <>
            
            <div>
                <div className="card text-white bg-dark mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Primary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-dark mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Secondary card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-dark mb-3" style={{ maxWidth: '20rem' }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Success card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Cards;
