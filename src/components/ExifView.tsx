import React,{ useState,useEffect,useRef} from 'react'
import exifr from 'exifr' 
import EXIF from "exif-js";
import { Typography ,Box } from '@mui/material'

interface Props{
    imgs:string[]
    selectedImg:number,
    ViewElement:React.RefObject<HTMLImageElement>
}

const ExifView:React.FC<Props>=(props)=>{
    const [data,setData]=useState({'gps':""})
    const [element,setElement]=useState<React.RefObject<HTMLImageElement>>()
    console.log(props.ViewElement)
    
    useEffect( ()=>{
        if(props.ViewElement!=element){
            let {current}=props.ViewElement
            let data1={'gps':""}
            setElement(props.ViewElement)
            if(current!=null){
                EXIF.getData(current, function() {
                    var exifData = EXIF.getAllTags(current);
                    if (exifData) {
                        console.log('exifData: ', JSON.stringify(exifData));
                        setData(exifData);
                    } else {
                        console.log("No EXIF data found in image '" + current + "'.");
                    }
                })
                
                /* 
                (async () => {
                    let output = await exifr.parse(current);
                    console.log("exif",output)
                    setData(output);
                  })();
                  */
            }
        }
    }, [props.ViewElement,element])

    
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