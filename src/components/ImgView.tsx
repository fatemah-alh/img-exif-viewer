

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
            <Box  sx={{ paddingTop:1,paddingBottom:1,paddingRight:1}}>
                <Image  
                        src={src}
                        alt="Main Img"
                        width={500}
                        height={560}
                        style={{ maxHeight: '80vh',
                                 width:'100%',
                                 objectFit: 'scale-down',
                                 transform: `rotate(${rotation}deg)`,
                               }}
                        priority
                        />
            </Box>
        </React.Fragment>
    )
}

export default ImgView;
