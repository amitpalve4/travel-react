import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

const CardItem = (props) => {
    return (
        <React.Fragment>

            <li className="cards__items">
                <Link className="cards__item__link" to={props.path}>
                    <div className="imgWrp">
                        <img src={props.src} alt="Travel Info" />
                        <div className="imgInfo">
                            <h5 className="cards__text">{props.text}</h5>
                        </div>
                    </div>
                </Link>
            </li>

        </React.Fragment>
    )
}

export default CardItem
