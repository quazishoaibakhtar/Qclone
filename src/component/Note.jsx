import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

 const ondelete2 = () => {
  props.ondelete(props.id)
 }

 
  return <div>
    
    <div className="w-[120px]   bg-black text-white rounded-sm mt-10 text-xs  ">
<p className=" py-2 px-2">{props.title}</p>
<p className=" py-2 px-2">{props.content}</p>
<div className="ml-14">

<Button variant="outlined-none" color="error">
<DeleteIcon className="text-red-800" onClick={ondelete2}/>
</Button>
</div>

    </div>
  </div>;
};

export default Note;
