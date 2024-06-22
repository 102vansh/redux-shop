import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, addProduct, deleteCart } from '../redux/Slice'
import { useState } from 'react'

const Home = () => {
    const dispatch = useDispatch()
    const[loading, setLoading] = useState(false)

    const products = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data)
            dispatch(addProduct(response.data))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        products()
    }, [])

const addtocarts = (getitem) => {
    console.log('clicked')
    dispatch(addCart(getitem))
}
const removecart = (id) => {
    dispatch(deleteCart(id))
}

    const { product } = useSelector((state) => state.products)
    const{cart} = useSelector((state) => state.products)


    if(loading){
        return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    }
    return (
        <div className='home'>
            <h1>Products</h1>
            <div className='products-grid'>
                {product.map((item) => {
                    return (
                        <div className='card' key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p> Price: $ {item.price}</p>
                            <button onClick={ cart.indexOf(item) === -1 ? () => addtocarts(item):()=> removecart}>{cart.indexOf(item) === -1 ? 'Add to cart' : 'Remove from cart'}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
