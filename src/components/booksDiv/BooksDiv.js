import React from 'react'
import './booksdiv.css'
import { useDispatch } from 'react-redux'
import { addToCartReducer } from '../../reduxToolkit/bookslice';
const BooksDiv = ({author,img,title,price}) => {
  const dispatch = useDispatch();
  const addToCart = ()=>{
    const obj = {
      author,
      img, //using this as id
      title,
      price
    }
    dispatch(addToCartReducer(obj));
  }
  return (
    <div className='books-div'>
        <h2>Author: {author}</h2>
        <img src={`https://covers.openlibrary.org/b/id/${img}-S.jpg`} alt='book-img' />
        <p>{title}</p>
        <p>Description:- {`This book ${title} is written by ${author}.`}</p>
        <span>Price: {price===0?'1000':price}</span>
        <button onClick={(e)=>addToCart(e)}>Add to Cart</button>
    </div>
  )
}

export default BooksDiv