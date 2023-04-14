import React from 'react';

import { Button} from '@mui/material';

interface Props {
    handleNext:React.MouseEventHandler<HTMLButtonElement>//set date, fetch data
}
const NextButton: React.FC<Props> = (props) => {

return (
    <Button  onClick={props.handleNext} variant="contained" >{'>'}</Button>
         
);}
export default NextButton;