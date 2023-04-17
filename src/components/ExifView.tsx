import React,{ useState,useEffect,useRef} from 'react'
import exifr from 'exifr' 
import { Typography ,Box } from '@mui/material'

interface Props{
    exifData:any
}

const ExifView:React.FC<Props>=(props)=>{
    let data=props.exifData

    return(
        <React.Fragment>
            
            <Box sx={{ fontSize:'1.5rem',fontWeight:600,backgroundColor:'#1976d2',paddingLeft:'10px',paddingTop:'6px',paddingBottom:'6px',color:'white',
                       borderTopLeftRadius:'5px',borderTopRightRadius:'5px',
                       boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
        }}>
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
                        <Typography sx={{fontWeight:600,color:'#1976d2',fontSize:"0.9rem"}}>{key}:</Typography>
                        <Typography sx={{fontSize:"0.9rem"}}>{data[key as keyof typeof data].toString()}</Typography>
                    </Box>)})
                
                }
        </Box>
        </React.Fragment>
    )
}

export default ExifView;