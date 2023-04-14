import React,{ useState,useEffect } from 'react'
import {Button, Grid  } from '@mui/material';

import NextButton from './NextButton';
import PrevButton from './PrevButton';
import UploadButton from './UploadButton';
import RotateButton from './RotateUpload';


interface Props{
    handlePrev: React.MouseEventHandler<HTMLButtonElement>;
    handleNext: React.MouseEventHandler<HTMLButtonElement>;
    handleRotate:React.MouseEventHandler<HTMLButtonElement>;
    handleUpload:React.ChangeEventHandler<HTMLInputElement>
}

const CustomBar:React.FC<Props>=(props)=>{

    //rotoation button
    //upload new files
//Geolocation

    return(
        <Grid container   sx={{paddingLeft:2,paddingRight:2,paddingTop:1}} >
            <Grid item lg={1.5} >
                <UploadButton handleUpload={props.handleUpload}/>
            </Grid>
            <Grid item lg={1.5} >
                <RotateButton handleRotate={props.handleRotate}/>
            </Grid>
            <Grid item lg={1.5} > </Grid>
            <Grid item lg={1}>
                <PrevButton handlePrev={props.handlePrev} />
            </Grid>
            <Grid item lg={1} >
                <NextButton handleNext={props.handleNext}  />
            </Grid>
        

        </Grid>
    )
}

export default CustomBar;