import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import '../home/home.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookData } from '../../reduxToolkit/bookslice';
const Navbar = () => {
    const {cart} = useSelector((state) => state.state);
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const params = useParams();
   const handlechange  = (item)=>{
    if(typeof params ==='object' && Object.keys(params).length === 0){
        navigate('/')
    }
    dispatch(getBookData(item))
   }
  return (
    <div className='header-div'>
            <div className='input-div'><input type="text" placeholder='search book by title' onChange={(e)=>handlechange(e.target.value)} /></div>
            <div className='header-svg'>
            <CiShoppingCart onClick={()=>navigate("/cart")} size={'4rem'} color='white' />
            <span className='header-cart-no'>{cart.length}</span>
            </div>
        </div>
  )
}

export default Navbar