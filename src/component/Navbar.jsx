import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const{cart} = useSelector((store)=>store.products)
  return (
    <div className='navbar'>
<h1>Redux Shop</h1>
<div className='nav-links'>
    <Link to={'/'}>Home</Link>
    <Link to={'/cart'}>Cart <span style={{backgroundColor:"red",color:"white",padding:"5px",borderRadius:"30%",width:"40%"}}>{cart.length}</span></Link>
</div>


    </div>
  )
}

export default Navbar