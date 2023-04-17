import React,{ useState,useEffect } from 'react';
import {Button, Grid  } from '@mui/material';
import  ExifView from './ExifView'
import ImgView from './ImgView';
import Bar from './Bar';
import ListImgs from './ListImgs';
import { GPSdata } from './interfaces';
interface Props{
    imgs:string[],
    selectedImg:number,
    exifData:any,
    gpsData:GPSdata|undefined,
    rotation:number,
    handleLocation:React.MouseEventHandler<HTMLButtonElement>;
    handlePrev: React.MouseEventHandler<HTMLButtonElement>;
    handleNext: React.MouseEventHandler<HTMLButtonElement>;
    handleRotate:React.MouseEventHandler<HTMLButtonElement>;
    handleUpload:React.ChangeEventHandler<HTMLInputElement>
}

const MainView:React.FC<Props>=(props)=>{
    return(
        <React.Fragment>
            
           
               
            <Grid container >
                <Grid item lg={8} md={8} xs={7}>
                    <Bar handleNext={props.handleNext} 
                    handlePrev={props.handlePrev}  
                    handleRotate={props.handleRotate}
                    handleUpload={props.handleUpload}
                    handleLocation={props.handleLocation}
                    enabelGps={props.gpsData==undefined?false:true}
                    />
                    <ImgView img={props.imgs[props.selectedImg]} rotation={props.rotation}/>
                    <ListImgs imgs={props.imgs} selectedImg={props.selectedImg}/>
                </Grid>
                <Grid item lg={4} md={4} xs={5} sx={{paddingLeft:2,paddingRight:2,paddingTop:1}}>
                    <ExifView exifData={props.exifData} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default MainView;