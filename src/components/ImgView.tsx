

import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import {Button, Grid ,Box } from '@mui/material';

interface Props{
      img:string,
      rotation:number
}

const ImgView:React.FC<Props>=(props)=>{
    let src =props.img
    let rotation=props.rotation;
    return(
        <React.Fragment>

        <Box  sx={{padding:2, width: 'auto',maxHeight: '560px'}}>
            <Image  
                    id="id-main-img"
                    src={src}
                    alt="Main Img"
                    width={400}
                    height={400}
                    
                    style={{transform: `rotate(${rotation}deg)`}}
                    priority
                    />
        </Box>
       
        </React.Fragment>
    )
}

export default ImgView;
