import React from 'react';
import './Homepage.css';
import '../../App.css';
import { Button } from '../Button';
import Cards from '../Cards';

export const Homepage = () => {
    return (
        <React.Fragment>
            <div className="sectionBanner col-100 floatLft">
                <div className="bannerContent col-100 floatLft">
                    <h1>Welcome to Travel World</h1>
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn-large'>Get Started</Button>
                </div>
            </div>
            <div className="sectionExplore col-100 floatLft">
                <div className="wrapper">
                    <Cards />
                </div>
            </div>
        </React.Fragment>
    )
}
