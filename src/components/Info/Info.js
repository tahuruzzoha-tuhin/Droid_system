import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Engineers from '../Engineer/Engineers';
import './Info.css';
const Info = () => {
    const [engineers, setEngineers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./teams.JSON')
        .then(res => res.json())
        .then(data => setEngineers(data));
    },[]);

    const handleAddToCart = (engineer) => {
        const newCart = [...cart, engineer];
        setCart(newCart);
    }

    return (
        <div className="info-container">
            <div className="engineers-container">
                {
                    engineers.map(engineer => <Engineers 
                        key={engineer.name}
                        engineer={engineer}
                        handleAddToCart={handleAddToCart}
                        >
                        </Engineers>)
                }
            </div>    

     <div className="cart-container">
         <Cart cart={cart}></Cart>

         </div>   
        </div>
    );
};

export default Info;