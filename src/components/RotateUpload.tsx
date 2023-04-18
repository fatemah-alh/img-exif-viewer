import React from 'react';
import { styled } from '@mui/material/styles';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

import { Button} from '@mui/material';
import {AiOutlineRotateRight} from 'react-icons/ai'
interface Props {
    handleRotate:React.MouseEventHandler<HTMLButtonElement>//set date, fetch data
}
const RotateButton: React.FC<Props> = (props) => {
    const breakpoint= 'sm'
return (
    <Button onClick={props.handleRotate} 
            variant="contained" 
            startIcon={<AiOutlineRotateRight />}
            
            
    > 
            Rotate
    </Button>
          
         
);}
export default RotateButton;