import React from 'react';
import '../../App.css';
import { Button } from '../Button';

const Services = () => {
    return (
        <React.Fragment>
            <div className="sectionBanner col-100 floatLft">
                <div className="bannerContent col-100 floatLft">
                    <h1>Welcome to Services</h1>
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn-large'>Get Started</Button>
                </div>
            </div>
           
        </React.Fragment>
    )
}

export default Services
