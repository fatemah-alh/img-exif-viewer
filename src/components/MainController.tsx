import React,{ useState,useEffect,useRef } from 'react'
import MainView from './MainView'
import MainModel from './MainModel'
 
interface Props{

}

const MainController:React.FC<Props>=(props)=>{
    const model=MainModel()
    const initialImgs=model.images
    const initialImgsPaths=model.imagesPaths
    const [imgs,setImgs]=useState(initialImgs);
    const [imgsPaths,setImgsPath]=useState(initialImgsPaths)
    const [selectedImg,setSelectedImg]=useState(0);
    
    


   

    const handlePrev=(e:React.MouseEvent)=>{
        let newIndex=selectedImg-1
        console.log('newIndex',newIndex)
        if(newIndex < 0){
            newIndex=imgs.length-1
            console.log('newIndex',newIndex)
        }
        setSelectedImg(newIndex)

    }
    const handleNext=()=>{
        let newIndex=selectedImg+1
        if(newIndex>imgs.length-1){
            newIndex=0
        }
        setSelectedImg(newIndex)
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
            setImgsPath(arrayFiles)
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
                      imgs={imgs}
                      imgsPaths={imgsPaths}
                      />
        </React.Fragment>
    )
}

export default MainController;