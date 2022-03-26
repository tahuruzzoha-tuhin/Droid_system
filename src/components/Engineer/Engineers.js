import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import './Engineers.css';

const Engineers = (props) => {

    const { name, image, price, author, details, enrolled } = props.engineer;
    const element = <FontAwesomeIcon icon={faMoneyCheck} />
    return (
        <div className=''>

            <div className="engineer">
                <img className="image img-fluid rounded" src={image} alt="" />
                <h4>{name}</h4>
                <h5>Author:{author}</h5>
                <h5>Enrolled:{enrolled}</h5>
                <h5>Price:${price}</h5>
                <button
                    onClick={() => props.handleAddToCart(props.engineer)}
                    className="btn-regular">{element}Add to Cart</button>
            </div>
        </div>
    );
};

export default Engineers;