

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
    let style={}
    if ([90,-90,-270, 270].includes(rotation)){
        console.log("rotation",rotation)
        style={
          maxWidth:'77vh',
        }
    }
    return(
        <React.Fragment>
            <Box sx={{paddingTop:1,paddingBottom:1,paddingRight:1}}>
                <Box  sx={{maxHeight: '77vh',width:'100%',justifyContent:'center',display:'flex',
                                                        
                }}>
                    <Image  
                            src={src}
                            alt="Main Img"
                            width={500}
                            height={560}
                            style={{ ...style,
                                    maxHeight: '77vh',
                                    transform: `rotate(${rotation}deg) `,
                                    objectFit: 'scale-down',
                                    width:"100%",
                                }}
                            
                            priority
                            />
                            </Box>
            </Box>
        </React.Fragment>
    )
}

export default ImgView;
