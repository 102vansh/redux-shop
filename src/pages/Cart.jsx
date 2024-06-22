import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../redux/Slice'

const Cart = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector((state) => state.products)
    console.log(cart)
const removecart = (id) =>{
dispatch(deleteCart(id))
console.log('clicked')
}

  return (
    <>
{
    cart.length > 0 ? <div className='cart-container'>
        {
            cart.map((item) => {
                console.log(item)
                return <div className='cart'>
                <img src={item.image} alt="" />
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                    <button onClick={() =>removecart(item.id)}>Remove</button>
                </div>
            })
        }
    </div>

    
    : <h1>Cart is empty</h1>
}
<h3>Total cart value:</h3>
{
    cart.reduce((acc, item) => acc + item.price, 0)
}
<h3>Total cart items:{cart.length}</h3>
<button className='cart'>Checkout</button>
    </>
  )
}


export default Cart