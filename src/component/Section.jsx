import { Button } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';

const Section = (props) => {
  const [val, setval] = useState({
    title: "",
    content: "",
  });
  
const [open, setopen] = useState(false)


  function handleChange(event) {
    event.preventDefault()
    setval((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  
    console.log(val)
  }
const handlesubmit = (event) => {
  event.preventDefault()
  props.addevent(val)
  setval({
    title: "",
    content: "",
  })
}
const submit = () => {
setopen(true)
}


  return (
    <div>
      <div>
        <form className="md:w-[100vw] h-[40vh] md:bg-black md:flex flex-col  md:justify-center md:items-center" >
        {open && <input
          
            type="text"
            onChange={handleChange}
            className="bg-white outline-none w-[100vw] mt-5 pl-2 py-2 md:w-[40vw] rounded-t-lg"
            placeholder="title"
            value={val.title}
            name="title"
          />}
         
         <textarea
            onClick={submit}
            id=""
            cols="50"
            rows="2"
            className="bg-white outline-none py-2 pl-2  md:w-[40vw] rounded-b-lg"
            placeholder="write a note..."
            onChange={handleChange}
            value={val.content}
            name= "content"
          ></textarea>
         { open && <div className="text-center md:my-5">
          <Button variant="outlined"  onClick={handlesubmit}><DoneIcon/></Button>
          </div>}
        </form>
      </div>
    </div>
  );
};

export default Section;
