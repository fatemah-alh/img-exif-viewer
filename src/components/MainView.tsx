import React,{ useState,useEffect } from 'react';
import {Button, Grid  } from '@mui/material';
import  ExifView from './ExifView'
import ImgView from './ImgView';
import Bar from './Bar';
import ListImgs from './ListImgs';
interface Props{
    imgs:string[],
    imgsPaths:string[],
    selectedImg:number,
   
    handlePrev: React.MouseEventHandler<HTMLButtonElement>;
    handleNext: React.MouseEventHandler<HTMLButtonElement>;
    handleRotate:React.MouseEventHandler<HTMLButtonElement>;
    handleUpload:React.ChangeEventHandler<HTMLInputElement>
}

const MainView:React.FC<Props>=(props)=>{
    return(
        <React.Fragment>
            
           <Bar handleNext={props.handleNext} 
                handlePrev={props.handlePrev}  
                handleRotate={props.handleRotate}
                handleUpload={props.handleUpload}/>
            <Grid container >
                <Grid item lg={8} md={8} xs={6}>
                    <ImgView imgs={props.imgs}  selectedImg={props.selectedImg}/>
                    <ListImgs imgs={props.imgs} selectedImg={props.selectedImg}/>
                </Grid>
                <Grid item lg={4} md={4} xs={6} sx={{padding:2}}>
                    <ExifView imgsPaths={props.imgsPaths}  selectedImg={props.selectedImg} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default MainView;