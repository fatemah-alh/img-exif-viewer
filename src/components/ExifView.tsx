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
    
    useEffect(()=>{
        console.log(props.ViewElement)
        let {current}=props.ViewElement
        let data1={'gps':""}
        if(current!=null){
            console.log("dentro if",current)
            exifr.parse(current).then(output => {console.log(output); setData(output); data1=output
            })
            if(data1.gps){
                console.log(data1.gps)
            }
        }
        
        
    }, [props.ViewElement])

   // exifr.parse(props.imgs[props.selectedImg]).then(output => console.log(output))
   //: {data[key as keyof typeof data].toString()}
    return(
        <Box>
       
       { data&&Object.keys(data).map((key,i) =>

             {  
                return (data[key as keyof typeof data]!=null&& <Box key={i} sx={{display:'flex'}}>
                <Typography sx={{fontWeight:600,color:'blue'}}>{key}:</Typography>
                <Typography>{data[key as keyof typeof data].toString()}</Typography>
            </Box>)})
       
       }
        </Box>
    )
}

export default ExifView;