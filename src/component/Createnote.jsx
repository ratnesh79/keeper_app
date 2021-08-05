import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function CreatNote(props){
    const [data,setdata]=useState({
        title:'',
        content:''
    });
    const input=(event)=>{
        // const data=event.target.value;
        // const name=event.target.name;
        const {name,value}=event.target;
   setdata((prewVal)=>{
       return {
           ...prewVal,
           [name]:value,

       }
    })
    console.log(data)
    }
    const addnote=()=>{
props.passnote(data)
setdata({
    title:"",
    content:""
})
    }
    return <>
    <div className="main_note">
    <form className="form_main_note">
        <input type="text" placeholder="Title" 
        autoComplete="off"
         onChange={input}
          value={data.title}
          name="title" ></input>
        <textarea rows="3"
         cols="32"
          placeholder="Write a Note.."  
          onChange={input} 
          value={data.content}
          name="content"
          ></textarea>
        <Button variant="contained" className="btn" onClick={addnote}> <AddIcon /></Button>
    </form>
      </div>
      </>
}
export default CreatNote;