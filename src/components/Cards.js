import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Slider from 'react-slick';

const Cards = () => {

    const settings = {
      arrow: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };


    return (
        <div className="cards-container col-100 floatLft">
            <h1>Check out these EPIC Destinations!</h1>
            <ul className="cardListing col-100 floatLft">
               <Slider {...settings}>

                <CardItem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon jungle'
                path='/services'
                />
                <CardItem
                src='images/img-8.jpg'
                text='Explore the beach face resort with luxurious beds and spa'
                path='/services'
                />
               <CardItem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon jungle'
                path='/services'
               />
               <CardItem
                src='images/img-8.jpg'
                text='Explore the beach face resort with luxurious beds and spa'
                path='/services'
               />

               </Slider>
            </ul>
        </div>
    )
}

export default Cards
