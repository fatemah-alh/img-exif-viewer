import React,{ useState,useEffect,useRef } from 'react'
import MainView from './MainView'
import MainModel from './MainModel'
 
interface Props{

}

const MainController:React.FC<Props>=(props)=>{
    const model=MainModel()
    const initialImgs=model.images
    const [imgs,setImgs]=useState(initialImgs);
    const [selectedImg,setSelectedImg]=useState(0);
    const  ViewElement = useRef<HTMLImageElement>(null)
    


   

    const handlePrev=()=>{

    }
    const handleNext=()=>{
        
    }
    const handleRotate=()=>{


    }
    const handleUpload=(event:React.ChangeEvent<HTMLInputElement>)=>{
       const  files=event.target.files ;
       if (files && files.length > 0){
            let arrayFiles=[]
            for (let i = 0; i < files.length; i++) {
                arrayFiles.push( URL.createObjectURL(files[i]));
            }
            setImgs( arrayFiles)
            setSelectedImg(0)
        } 
    }

    return(
        <React.Fragment>
            <MainView  
                      handleNext={handleNext}
                      handlePrev={handlePrev}
                      handleRotate={handleRotate}
                      handleUpload={handleUpload} 
                      selectedImg={selectedImg}
                      ViewElement={ViewElement}
                      imgs={imgs}
                      />
        </React.Fragment>
    )
}

export default MainController;