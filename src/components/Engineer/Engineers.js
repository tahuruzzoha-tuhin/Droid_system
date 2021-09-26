import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import './Engineers.css';

const Engineers = (props) => {
    console.log(props.engineer);
    const {name, img, role, age, country, salary} = props.engineer;
    const element = <FontAwesomeIcon icon={faMoneyCheck} />
    return (
        <div>
        <div className="engineer">
           <img className="image img-fluid" src={img} alt="" />
           <h3>Name: {name}</h3>
           <h5>Role:{role}</h5>
           <h5>Age:{age}</h5>
           <h5>Country:{country}</h5>
           <h5>Salary:${salary}</h5>
           <button
           onClick={()=> props.handleAddToCart(props.engineer)}
            className="btn-regular">{element}Add to Cart</button>
        </div>
       </div>
    );
};

export default Engineers;