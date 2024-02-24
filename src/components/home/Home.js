import React, { useLayoutEffect, useState } from 'react';
import { getBookData } from '../../reduxToolkit/bookslice';
import { useDispatch, useSelector } from 'react-redux';
import BooksDiv from '../booksDiv/BooksDiv';
import './home.css'
const Home = () => {
    const dispatch = useDispatch();
    const {data,loading} = useSelector((state) => state.state);
    useLayoutEffect(() => {
        dispatch(getBookData());
    }, [dispatch]);
    const [myfilter,setMyfilter] = useState(0);
    if(loading){
        return(
            <h1>Please take a sip while we fetch your Books!! It takes little bit of time to fetch from the third party provider.</h1>
        )
    }
    return (
        <div className='home-div'>
        <select onChange={(e)=>setMyfilter(e.target.value)}>
            <option value={""}>Filter by first_publish_year</option>
            {data.docs&&data.docs.map((item,index)=>{
                return(
                    <option key={index} value={item.first_publish_year}>{item.first_publish_year}</option>
                )
            })}
        </select>
        <div className='home-books'>
            {
                data.docs&&!myfilter?data.docs.map((item,index)=>{
                
                    return(
                        <div key={index}>
                        {item.cover_i?<BooksDiv price={index*1000+(index+1)*1000} img={item.cover_i} title={item.title} author={item.author_name} />:null}
                        </div>
                    )
                })
            :
            data.docs &&data.docs.filter((ite=>{
                return(ite.first_publish_year === Number(myfilter))})).map((item, index) => {
            return (
                <div key={item}>
                    {item.cover_i ? (
                        <BooksDiv
                            price={index * 1000 + (index + 1) * 1000}
                            img={item.cover_i}
                            title={item.title}
                            author={item.author_name}
                        />
                    ):null
                    }
                </div>
            );
        })
            }
        </div>
        </div>
    );
};

export default Home;
