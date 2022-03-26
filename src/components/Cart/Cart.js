import React from 'react';
import Member from '../Member/Member';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    for (const engineer of cart) {

        total += engineer.price;
    }
    // const clearAll = () =>{

    // }
    return (
        <div className="">
            <div>
                <h3>Courses</h3>
                <h5>Total: {props.cart.length}</h5>

                <br />
                <p>Price: $ {total.toFixed(2)}</p>
            </div>
            <div className="members__container mt-3">
                {cart.map((member) => (
                    <Member key={member.name} member={member} />
                ))}
            </div>
            <div className='d-flex justify-content-between' >
                <button className="btn btn-primary">Choose One</button>
                <button className="btn btn-primary">Choose Again</button>

            </div>
        </div>
    );
};

export default Cart;