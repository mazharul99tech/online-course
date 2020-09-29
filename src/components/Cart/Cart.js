import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const cart = props.cart;
    const totalCoursePrice = cart.reduce((total, course) => total + course.price, 0);
    return (
        <div>
            <h5>Course Cart: {cart.length}</h5>
            <h4>Course Total Amount: ${totalCoursePrice}</h4>
        </div>
    );
};

export default Cart;