import React,{ useState,useEffect } from 'react'
import  ExifView from './ExifView'
import ImgView from './ImgView';
import CustomBar from './Bar';
interface Props{

}

const MainView:React.FC<Props>=()=>{
    return(
        <React.Fragment>
           <CustomBar />
            <ImgView/>
            <ExifView />
        </React.Fragment>
    )
}

export default MainView;