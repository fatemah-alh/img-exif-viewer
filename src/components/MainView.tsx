import React,{ useState,useEffect } from 'react';
import {Button, Grid  } from '@mui/material';
import  ExifView from './ExifView'
import ImgView from './ImgView';
import Bar from './Bar';
interface Props{
    imgs:string[],
    handlePrev: React.MouseEventHandler<HTMLButtonElement>;
    handleNext: React.MouseEventHandler<HTMLButtonElement>;
    handleRotate:React.MouseEventHandler<HTMLButtonElement>;
    handleUpload:React.MouseEventHandler<HTMLButtonElement>
}

const MainView:React.FC<Props>=(props)=>{
    return(
        <React.Fragment>
            
           <Bar handleNext={props.handleNext} 
                handlePrev={props.handlePrev}  
                handleRotate={props.handleRotate}
                handleUpload={props.handleUpload}/>
            <Grid item lg={9}>
                <ImgView imgs={props.imgs}/>
            </Grid>
            <Grid item lg={3}>
                <ExifView />
            </Grid>
            
        </React.Fragment>
    )
}

export default MainView;