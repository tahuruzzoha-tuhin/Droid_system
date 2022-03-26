import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Engineers from '../Engineer/Engineers';
import './Info.css';
const Info = () => {
    const [engineers, setEngineers] = useState([]);
    const [cart, setCart] = useState([]);
    // const [name, setName] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setEngineers(data));
    }, []);

    const handleAddToCart = (engineer) => {
        let newCart = [...cart, engineer];

        if (newCart.length <= 4) {
            setCart(newCart);
        }
    }
    // const uNameset = (nm) => {
    //     setName(nm);
    // }

    return (
        <div className="info-container">
            <div className="engineers-container">
                {
                    engineers.map(engineer => <Engineers
                        key={engineer.name}
                        engineer={engineer}
                        // uNameset={uNameset(engineer.name)}

                        handleAddToCart={handleAddToCart}
                    >
                    </Engineers>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                    key={cart}
                ></Cart>

            </div>
        </div>
    );
};

export default Info;