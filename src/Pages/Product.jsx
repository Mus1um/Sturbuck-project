import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InsideProduct from '../Components/InsideProduct';

function Product() {
    const {id} =useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchingData()
      },[])
    function fetchingData() {
        axios.get(`http://localhost:3000/coffee/${id}`).then((res) => {
          setData(res.data);
        });
      }
  return (
    <div className="product-page">
    <InsideProduct data={data} />
    </div>
  )
}

export default Product
