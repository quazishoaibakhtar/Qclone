
import { useState } from 'react';
import './App.css';
import Headers from './component/Headers';
import Note from './component/Note';
import Section from './component/Section';


function App() {
  const [data, setdata] = useState([])
  // const addevent = () => {
  //   alert("clicked both are to be sync")
  // }

const pushingdata = (val) => {
  setdata((prevState) => {
    return [...prevState, val]
  })
}

const todelete = (id) => {
  setdata((prevState)  => {
    return data.filter((item, index) => {
      return index !==id
    })
  })
}

  return (
    <div className='w-[100vw] '>
   <Headers/>
  <Section addevent={pushingdata}/>
  <div className='w-[300px] h-[50vh] flex ml-12 gap-5 flex-wrap md:w-[90vw] md:flex md:flex-wrap'>
  {data.map((element, index) => {
    return <Note key={index} id={index} title={element.title} content={element.content} ondelete={todelete}/>
  })}
    </div>
    </div>
  );
}

export default App;
