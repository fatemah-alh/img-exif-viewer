import React,{ useState,useEffect } from 'react'
import {Button, Grid  } from '@mui/material';

import NextButton from './NextButton';
import PrevButton from './PrevButton';
import {AiOutlineRotateRight,AiOutlineUpload} from 'react-icons/ai'

interface Props{
    handlePrev: React.MouseEventHandler<HTMLButtonElement>;
    handleNext: React.MouseEventHandler<HTMLButtonElement>;
    handleRotate:React.MouseEventHandler<HTMLButtonElement>;
    handleUpload:React.MouseEventHandler<HTMLButtonElement>
}

const CustomBar:React.FC<Props>=(props)=>{

    //rotoation button
    //upload new files
//Geolocation

    return(
        <Grid container  sx={{paddingLeft:2,paddingRight:2}} >
            <Grid item lg={4}>
                <Button onClick={props.handleUpload} startIcon={<AiOutlineUpload></AiOutlineUpload>}>Upload</Button>
                <Button onClick={props.handleRotate} startIcon={<AiOutlineRotateRight size={16}/>}> Rotate</Button>
            </Grid>
            <Grid item lg={4}>
                <PrevButton handlePrev={props.handlePrev}/>
                <NextButton handleNext={props.handleNext} />
            </Grid>
        

        </Grid>
    )
}

export default CustomBar;