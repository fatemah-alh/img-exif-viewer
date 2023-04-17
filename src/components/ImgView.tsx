

import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import {Button, Grid ,Box } from '@mui/material';

interface Props{
      imgs:string[]
      selectedImg:number,
}

const ImgView:React.FC<Props>=(props)=>{
    let src =props.imgs[props.selectedImg]
    return(
        <React.Fragment>

        <Box  sx={{padding:2, width: 'auto',maxHeight: '560px'}}>
            <Image  
                    id="id-main-img"
                    src={src}
                    alt="Main Img"
                    width={400}
                    height={400}
                    priority
                    />
        </Box>
       
        </React.Fragment>
    )
}

export default ImgView;
