import React, { useEffect } from 'react';
import { getBookData } from '../../reduxToolkit/bookslice';
import { useDispatch, useSelector } from 'react-redux';
import BooksDiv from '../booksDiv/BooksDiv';
import './home.css'
const Home = () => {
    const dispatch = useDispatch();
    const {data,loading} = useSelector((state) => state.state);
    useEffect(() => {
        dispatch(getBookData());
    }, [dispatch]);
    if(loading){
        return(
            <h1>Please take a sip while we fetch your Books!!</h1>
        )
    }
    return (
        <div className='home-div'>
        <div className='home-books'>
            {
                data.docs&&data.docs.map((item,index)=>{
                    return(
                        <div key={index}>
                        {item.cover_i?<BooksDiv price={index*1000+(index+1)*1000} img={item.cover_i} title={item.title} author={item.author_name} />:null}
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default Home;
