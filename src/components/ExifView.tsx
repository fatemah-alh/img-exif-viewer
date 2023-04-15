import React,{ useState,useEffect } from 'react'
import exifr from 'exifr' 
import { Typography } from '@mui/material'

interface Props{
    imgs:string[]
    selectedImg:number
}

const ExifView:React.FC<Props>=(props)=>{
    let data=[]
    console.log(props.imgs[props.selectedImg])
   // exifr.parse(props.imgs[props.selectedImg]).then(output => console.log(output))
    return(
        <React.Fragment>
        {
            
        }
        </React.Fragment>
    )
}

export default ExifView;