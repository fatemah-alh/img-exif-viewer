import React,{ useState,useEffect,useRef } from 'react'
import MainView from './MainView'
import MainModel from './MainModel'
import { GPSdata } from './interfaces'
import exifr from 'exifr' 
interface Props{

}

const MainController:React.FC<Props>=(props)=>{
    const model=MainModel()
    const initialImgs=model.images
    const initialImgsPaths=model.imagesPaths
    const [imgs,setImgs]=useState(initialImgs);
    const [imgsPaths,setImgsPath]=useState(initialImgsPaths)
    const [selectedImg,setSelectedImg]=useState(0);
    const [exifData,setExifData]=useState({'gps':""})
    const [ gpsData,setGpsData]=useState<GPSdata|undefined>()
    const [rotation,setRotation]=useState(0)
    const handlePrev=(e:React.MouseEvent)=>{
        let newIndex=selectedImg-1
        
        if(newIndex < 0){
            newIndex=imgs.length-1
            console.log('newIndex',newIndex)
        }
        setSelectedImg(newIndex)
        setRotation(0)

    }
    const handleNext=()=>{
        let newIndex=selectedImg+1
        if(newIndex>imgs.length-1){
            newIndex=0
            console.log('newIndex',newIndex)
        }
        setSelectedImg(newIndex)
        setRotation(0)
    }
    const handleRotate=()=>{
        let newRotate=rotation + 90
        if(newRotate>=360){
            newRotate=- 360
        }
        setRotation(newRotate)
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
            setRotation(0)
        } 
    }
    const handleLocation=(event:React.MouseEvent)=>{
       
        window.open("https://maps.google.com?q="+gpsData?.latitude+","+gpsData?.longitude );
    }
    // handleExifData
    
    useEffect( ()=>{
        let src =imgsPaths[selectedImg]
        console.log(src);
        (async () => {
           
            let output = await exifr.parse(src);
            let g = await exifr.gps(src)
            if (g){
                    console.log('gps', g);
                    setGpsData(g)
                    }
            else{
                setGpsData(undefined);
            }
            setExifData(output);
            console.log(output)
            })();
                 
       
    }, [imgsPaths,selectedImg])

    return(
        <React.Fragment>
            <MainView  
                      handleNext={handleNext}
                      handlePrev={handlePrev}
                      handleRotate={handleRotate}
                      handleUpload={handleUpload} 
                      selectedImg={selectedImg}
                      imgs={imgs}
                      exifData={exifData}
                      gpsData={gpsData}
                      rotation={rotation}
                      handleLocation={handleLocation}
                      />
        </React.Fragment>
    )
}

export default MainController;