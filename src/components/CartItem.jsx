import React from 'react'
import FormatPrice from "../Helpers/FormatPrice"
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

function CartItem({ id, title, image, price, amount }) {
    const {removeItem, setIncrease, setDecrease} = useCartContext();

    return (
        <div className='cart_heading grid grid-five-column'>
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt="image" />
                    </figure>
                </div>
                <div>
                    <p>{title}</p>
                    
                </div>
            </div>
            {/* price */}
            <div className="cart-hide">
                <p>
                    $<FormatPrice price={price} />
                </p>
            </div>
            {/* Quantity */}
            <CartAmountToggle amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)} />

            {/* subtotal */}
            <div className="cart-hide">
                <p>
                    $<FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
            </div>

        </div>
    )
}

export default CartItem