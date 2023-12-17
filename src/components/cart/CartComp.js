import React from 'react'
import './cartcomp.css'
import { useDispatch } from 'react-redux'
import { removeToCart,incrementProduct,decrementProduct } from '../../reduxToolkit/bookslice';
const CartsComp = ({item}) => {
    const dispatch = useDispatch();
    const deleteitem = ()=>{
        dispatch(removeToCart(item.img))
    }
    const incrementProductt = ()=>{
        dispatch(incrementProduct(item.img))
    }
    const decrementProductt = ()=>{
        dispatch(decrementProduct(item.img))
    }
  return (
    <div className='carts-comp'>
        <img src={`https://covers.openlibrary.org/b/id/${item.img}-S.jpg`} alt='book-img' />
        <span>Price: {item.price * item.quantity}</span>
        <div className='incre-cart-buttons'>
        <button onClick={incrementProductt}>+</button>
        <button onClick={decrementProductt}>-</button>
        </div>
        <span>Quanity: {item.quantity}</span>
        <button onClick={deleteitem}>Delete item</button>
    </div>
  )
}

export default CartsComp