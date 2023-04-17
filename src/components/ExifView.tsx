import React,{ useState,useEffect,useRef} from 'react'
import exifr from 'exifr' 
import { Typography ,Box } from '@mui/material'

interface Props{
    imgsPaths:string[]
    selectedImg:number,
  
}

const ExifView:React.FC<Props>=(props)=>{
    const [data,setData]=useState({'gps':""})

   
    useEffect( ()=>{
        let src =props.imgsPaths[props.selectedImg]
        console.log(src);
        (async () => {
           
            let output = await exifr.parse(src);
            console.log("exif",output)
            setData(output);
            })();
                 
       
    }, [props.imgsPaths,props.selectedImg])

    
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