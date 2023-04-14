

import React,{ useState,useEffect } from 'react'
import Image from 'next/image'

interface Props{

}

const ImgView:React.FC<Props>=()=>{
    return(
        <React.Fragment>
            
            <Image
                
                src="/imgs/1.jpg"
                alt="Next.js Logo"
                width={400}
                height={100}
                priority
                />
            
        </React.Fragment>
    )
}

export default ImgView;
