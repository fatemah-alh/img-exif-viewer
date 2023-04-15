import React,{ useState,useEffect} from 'react'
import exifr from 'exifr' 
import { Typography ,Box } from '@mui/material'

interface Props{
    imgs:string[]
    selectedImg:number,
    ViewElement:React.RefObject<HTMLImageElement>
}

const ExifView:React.FC<Props>=(props)=>{
    const [data,setData]=useState({'gps':""})
    
    useEffect( ()=>{
        console.log(props.ViewElement)
        let {current}=props.ViewElement
        let data1={'gps':""}
        if(current!=null){
            (async () => {
                let output = await exifr.parse(current);
                console.log("exif",output)
                setData(output);
              })();
        }
        
        
    }, [props.ViewElement])

    
   // exifr.parse(props.imgs[props.selectedImg]).then(output => console.log(output))
   //: {data[key as keyof typeof data].toString()}
    return(
        <React.Fragment>
        <Box>
                    Exif data
                </Box>
        <Box sx={{  height:'30rem',
                    overflowY: "scroll",
                    }}>
                
                { data&&Object.keys(data).map((key,i) =>

                    {  
                        return (data[key as keyof typeof data]!=null&& <Box key={i} sx={{display:'flex'}}>
                        <Typography sx={{fontWeight:600,color:'blue'}}>{key}:</Typography>
                        <Typography>{data[key as keyof typeof data].toString()}</Typography>
                    </Box>)})
                
                }
        </Box>
        </React.Fragment>
    )
}

export default ExifView;