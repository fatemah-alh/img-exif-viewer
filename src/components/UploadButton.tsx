import React from 'react';

import { Button} from '@mui/material';
import {AiOutlineUpload} from 'react-icons/ai'
interface Props {
  
    handleUpload:React.ChangeEventHandler<HTMLInputElement> // set date, fetch data
   
}
const UploadButton: React.FC<Props> = (props) => {

return (
   <React.Fragment>
        <input
            accept="image/*"
            hidden
            id="contained-button-file"
            multiple
            type="file"
            onChange={props.handleUpload}
        />
        <label htmlFor="contained-button-file">
            <Button  startIcon={<AiOutlineUpload></AiOutlineUpload>} 
                     variant="contained" 
                     
                     component="span">
            Upload
            </Button>
        </label> 
  </React.Fragment>
         
);}
export default UploadButton;