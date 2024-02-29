// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartActions';
import './cart.css'; // Import CSS file for additional styling
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    // Logging all the items stored in the Redux state
    useEffect(() => {
        console.log("All items in the store:", cartItems);
    }, [cartItems]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        toast.success(`Product Removed from cart`);

    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId));
        toast.success(`Product Quantity Updated, Prices May Change Accordingly`);
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId));
        toast.success(`Product Quantity Updated, Prices May Change Accordingly`);
    };

    return (<>
        <Header />
        <ToastContainer />

        <div class='cart__main'>
    <div class="container">
        <h2 class='mt-4'>Your Cart</h2>
       
            <div class="cart">
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <div class='cart-item'>
                        <div class='cart-item-image'>
                            <img class="img-fluid" src={item.images[2] ? item.images[1] : item.thumbnail} alt={item.title} />
                        </div>

                        <div class='cart-item-details'>
                            <h6>Product : {item.title}</h6>
                            <p>{item.description}</p>
                        </div>

                        <div class='cart-item-controls'>
                            <div class='cart-item-price'>
                                <p><b>Price: $</b>{item.price}</p>
                            </div>

                            <div class='cart-item-quantity'>
                                <div class="quantity-buttons">
                                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    {item.quantity}
                                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                </div>
                            </div>

                            <div class='cart-item-price'>
                                <p><b>Item Total:</b>${item.price * item.quantity}</p>
                            </div>


                            <div class='cart-item-remove'>
                                <button class="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
      

        </div>
    </div>
</div>

        <Footer />
        </>
    );
};

export default Cart;

