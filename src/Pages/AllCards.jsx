import  axios  from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AllCards() {
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
fetchAllData()
    },[])
    function fetchAllData() {
        axios
          .get(`http://localhost:3000/giftcard`)
          .then(res=>{
           const selectedData=res.data.map(card=>card.category===id)
          console.log(selectedData);
      })
      }
  return (
    <div>
      slam
    </div>
  )
}

export default AllCards
