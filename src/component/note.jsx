import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

function Note(props){
    const deletenote=()=>{
        props.delete(props.id);
    }
    return <>
    <div className="Note">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <Button variant="contained" className="btn" onClick={deletenote}>
        <DeleteIcon />

        </Button> 
    </div>
    </>
}
export default Note;