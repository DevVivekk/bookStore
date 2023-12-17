import React from 'react'
import { useSelector } from 'react-redux';
import './checkout.css'
import { useNavigate } from 'react-router-dom';
const CheckOutPage = () => {
    const navigate = useNavigate();
    const {orders} = useSelector((state) => state.state);
    if(orders.length===0){
        return(
            <h1>Please add to cart before you checkout!</h1>
        )
    }
  return (
    <div className='checkout'>
        <h1>You have successfully checked out!</h1>
        <p>Your Order Date: {orders[0].date} :-</p>
        <div className='my-orders'>
        {
            orders&&orders.map((item,index)=>{
                return(
                    <div key={index} className='checkout-orders'>
                    <p>Book Name: {item.title}</p>
                    <p>Quantity Purchased: {item.quantity}</p>
                    <p>Price: {item.price * item.quantity}</p>
                    <button onClick={()=>navigate(`/orderdata/${item.img}`)}>View Order</button>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default CheckOutPage