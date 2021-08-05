 
import './App.css';
import Header from './component/header'
import Footer from './component/footer'
import CreatNote from './component/Createnote'
import Note from './component/note'
import { useState } from 'react';
function App() {
  const [additem,setadditem]=useState([]);
  const addNote=(note)=>{
    setadditem((prewData)=>{
 return [...prewData,note]
    })
    console.log(note)
  }
  const onDelete=(id)=>{
    setadditem((olddata)=>
      olddata.filter((val,index)=>{
        return index !==id;
      })
    );
  };

  return (
   <>
  <Header />
  <CreatNote  passnote={addNote} />
  {additem.map((vale,index)=>{
    return  (
      <Note 
      key={index}
      id={index}
      title={vale.title}
      content={vale.content}
      delete={onDelete}
    />
    );
  })}
  {/* <Footer /> */}
  </>
   
  ) 
}

export default App;
