import React from 'react'
import '../booksDiv/booksdiv.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const OrderData = ({author,img,title,price}) => {
    const {cart} = useSelector((state)=>state.state)
    const params = useParams();
    console.log(cart)
    console.log(params.orderid)
  return (
    <div className='books-div'>
    {
        cart.map((item,index)=>{
            return(
                item.img===Number(params.orderid)? <div>
                <h2>Author: {item.author}</h2>
                <img src={`https://covers.openlibrary.org/b/id/${item.img}-S.jpg`} alt='book-img' />
                <p>{item.title}</p>
                <p>Description:- {`This book ${item.title} is written by ${item.author}.`}</p>
                <span>Price: {index*1000+(index+1)*1000}</span>
                </div>:null
            )
        })
    }
    </div>
  )
}

export default OrderData