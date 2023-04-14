

import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import {Button, Grid ,Box } from '@mui/material';
import exifr from 'exifr' 
interface Props{
      imgs:string[]
}

const ImgView:React.FC<Props>=(props)=>{
    return(
        <Box sx={{padding:2}}>
            {props.imgs.map((img,key)=>{
                //let {latitude, longitude}=await exifr.gps('./myimage.jpg')
                exifr.parse(img)
                .then(output => console.log(output))
                return <Image
                        key={key}
                        src={require('../../public'+img)}
                        alt="Next.js Logo"
                        width={400}
                        height={400}
                        priority
                        />}
                )
            }
        </Box>
    )
}

export default ImgView;
