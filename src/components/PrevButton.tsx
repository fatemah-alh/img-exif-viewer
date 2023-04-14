import React from 'react';

import { Button} from '@mui/material';

interface Props {
  
    handlePrev:React.MouseEventHandler<HTMLButtonElement> // set date, fetch data
   
}
const PrevButton: React.FC<Props> = (props) => {

return (
   
            <Button  onClick={props.handlePrev}  >{'<'} </Button>
         
);}
export default PrevButton;