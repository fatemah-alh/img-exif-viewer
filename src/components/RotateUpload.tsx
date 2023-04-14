import React from 'react';

import { Button} from '@mui/material';
import {AiOutlineRotateRight} from 'react-icons/ai'
interface Props {
    handleRotate:React.MouseEventHandler<HTMLButtonElement>//set date, fetch data
}
const RotateButton: React.FC<Props> = (props) => {

return (
    <Button onClick={props.handleRotate} variant="contained" startIcon={<AiOutlineRotateRight size={16}/>}> Rotate</Button>
          
         
);}
export default RotateButton;