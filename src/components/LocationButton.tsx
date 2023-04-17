import React from 'react';

import { Button} from '@mui/material';
import {ImLocation} from 'react-icons/im'

interface Props {
    enable:boolean,
    handleClick:React.MouseEventHandler<HTMLButtonElement>//set date, fetch data
}
const LocationButton: React.FC<Props> = (props) => {

return (
    <Button  onClick={props.handleClick} variant="contained" startIcon={<ImLocation />} sx={[!props.enable&&{pointerEvents:'none',opacity:0.5}]}>Show</Button>
         
);}
export default LocationButton;