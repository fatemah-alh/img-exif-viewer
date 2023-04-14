import React from 'react';

import { Button} from '@mui/material';

interface Props {
    handlePrev:React.MouseEventHandler<HTMLButtonElement> // set date, fetch data
   
}
const handlePrev=()=>{}
const PrevButton: React.FC<Props> = (props) => {

return (
   
            <Button  onClick={props.handlePrev}  variant="contained" >{'<'} </Button>
         
);}

export default PrevButton;
