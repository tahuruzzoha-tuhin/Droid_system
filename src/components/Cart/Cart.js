import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const engineer of cart){
        
        total += engineer.salary;
    }
    return (
        <div className="container">
            <h3>Engineers</h3>
            <h5>Engineers Total: {props.cart.length}</h5>
            <ul>
                {
                    props.cart.map(engineer=>
                        <ol>Name:{engineer.name}</ol>)
                }
            </ul>
            <br />
            <p>Salary: $ {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;