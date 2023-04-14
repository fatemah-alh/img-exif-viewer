import React,{ useState,useEffect } from 'react'
import MainView from './MainView'
import MainModel from './MainModel'
interface Props{

}

const MainController:React.FC<Props>=(props)=>{
    const model=MainModel()
    const initialImgs=model.images
    const [imgs,setImgs]=useState(initialImgs);
    const [selectedImg,setSelectedImg]=useState(null);
    /*
    useEffect(() => {
        setImgs(initialImgs);
      }, []);
    */

    const handlePrev=()=>{

    }
    const handleNext=()=>{
        
    }
    const handleRotate=()=>{

    }
    const handleUpload=()=>{

    }
    return(
        <React.Fragment>
            <MainView handleNext={handleNext}
                      handlePrev={handlePrev}
                      handleRotate={handleRotate}
                      handleUpload={handleUpload} 
                      imgs={imgs}/>
        </React.Fragment>
    )
}

export default MainController;