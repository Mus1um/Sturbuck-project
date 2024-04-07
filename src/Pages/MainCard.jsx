import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function MainCard() {
    const {id}=useParams()
    console.log(id);
  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link to="/gift" underline="hover" style={{color:"#00000094"}} >
          Gift
        </Link>
        <Typography style={{color:"#00000094",fontWeight:'600'}}>Create eGift</Typography>
      </Breadcrumbs>
      maincard
    </div>
  )
}

export default MainCard
