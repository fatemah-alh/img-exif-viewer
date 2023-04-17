import React,{ useState,useEffect,useRef} from 'react'
import exifr from 'exifr' 
import EXIF from "exif-js";
import ExifReader from 'exifreader';
import RNFS from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import { Typography ,Box } from '@mui/material'

interface Props{
    imgs:string[]
    selectedImg:number,
    ViewElement:React.RefObject<HTMLImageElement>
}

const ExifView:React.FC<Props>=(props)=>{
    const [data,setData]=useState({'gps':""})
    console.log(props.ViewElement)
   
    useEffect( ()=>{
        let src =props.imgs[props.selectedImg]
        console.log(src);
        (async () => {
            //const b64Buffer = await RNFS.readFileAssets(src, 'base64') // Where the URI looks like this: "file:///path/to/image/IMG_0123.HEIC"
            //const fileBuffer = decode(b64Buffer)
            //let {current}=props.ViewElement
            // const tags = ExifReader.load(current, {expanded: true});
            let output = await exifr.parse(src);
            console.log("exif",output)
            setData(output);
            })();
                 
       
    }, [props.imgs,props.selectedImg])

    
   // exifr.parse(props.imgs[props.selectedImg]).then(output => console.log(output))
   //: {data[key as keyof typeof data].toString()}
    return(
        <React.Fragment>
            
            <Box sx={{ fontSize:'1.5rem',fontWeight:600,backgroundColor:'blue' }}>
                    Exif data
            </Box>
            <Box sx={{  height:'30rem',
                        overflowY: "scroll",
                        fontSize:"0.7rem",
                        border:'1px solid blue',
                        padding:'10px'
                        }}>
                
                { data&&Object.keys(data).map((key,i) =>

                    {  
                        return (data[key as keyof typeof data]!=null&& <Box key={i} sx={{display:'flex'}}>
                        <Typography sx={{fontWeight:600,color:'blue',fontSize:"0.9rem"}}>{key}:</Typography>
                        <Typography sx={{fontSize:"0.9rem"}}>{data[key as keyof typeof data].toString()}</Typography>
                    </Box>)})
                
                }
        </Box>
        </React.Fragment>
    )
}

export default ExifView;