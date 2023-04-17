

import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import {Grid} from '@mui/material';


interface Props{
      imgs:string[],
      selectedImg:number,
     
}

const ListImgs:React.FC<Props>=(props)=>{
    return(
        <React.Fragment>

        <Grid container sx={{padding:2,alignContent:'center'}}>
            {props.imgs.map((img,key)=>{
                
                return (<Grid item  key={key} sx={[key==props.selectedImg&&{border: '2px solid #1976d2'},{padding:'5px'}]}>
                            <Image
                                src={img}
                                alt="Next.js Logo"
                                width={50}
                                height={50}
                                priority
                                />
                        </Grid>)}
                )
            }
        </Grid>
        </React.Fragment>
    )
}

export default ListImgs;
