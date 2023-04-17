import React,{ useState,useEffect } from 'react'
import {Button, Grid,ButtonGroup } from '@mui/material';

import NextButton from './NextButton';
import PrevButton from './PrevButton';
import UploadButton from './UploadButton';
import RotateButton from './RotateUpload';
import LocationButton from './LocationButton';

interface Props{
    handlePrev: React.MouseEventHandler<HTMLButtonElement>;
    handleNext: React.MouseEventHandler<HTMLButtonElement>;
    handleRotate:React.MouseEventHandler<HTMLButtonElement>;
    handleUpload:React.ChangeEventHandler<HTMLInputElement>;
    handleLocation:React.MouseEventHandler<HTMLButtonElement>;
    enabelGps:boolean
}

const CustomBar:React.FC<Props>=(props)=>{
//<LocationButton handleClick={props.handleLocation} enable={props.}/>
    

    return(
        <Grid container   sx={{paddingLeft:2,paddingRight:2,paddingTop:1}} >
            <Grid item lg={7} md={8} >
                <ButtonGroup>
                    <UploadButton handleUpload={props.handleUpload}/>
                    <RotateButton handleRotate={props.handleRotate}/>
                    <LocationButton handleClick={props.handleLocation} enable={props.enabelGps}/>
                </ButtonGroup>
                
            </Grid>
            <Grid item lg={3} md={3}>
                <ButtonGroup>
                    <PrevButton handlePrev={props.handlePrev} />
                    <NextButton handleNext={props.handleNext}  />
                </ButtonGroup>
            </Grid>
           
        

        </Grid>
    )
}

export default CustomBar;