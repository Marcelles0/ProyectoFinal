import React, { useState } from "react";
import styleNotes from "./Notes.module.css";


export default function NewNotes (){
    const [note, setNote]= useState({
        title:'',
        description:''
    })

    const handleChange = (e)=>{
        let newNote = {
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
        }
        // console.log(newNote);
        setNote({...note,...newNote});
        // console.log(note);
    }
    const saveNote = async ()=>{
        await fetch(`http://localhost:8000/notes/new-note`, {
            method: 'POST',
            mode:'cors',
            body: JSON.stringify(note),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        saveNote();
    }

    return (
            <div>
                <form onSubmit={onSubmit}/* action="/notes/new-note" method="POST" */>
                    <div className={styleNotes.container}>
                        <div>
                            <input type="text" name="title" onChange={handleChange} placeholder="Title" autoFocus></input>
                        </div>
                        <div>
                            <input type="text" name="description" onChange={handleChange} placeholder="Description" className={styleNotes.input}></input>
                        </div>
                        <button id="submit"  className={styleNotes.buttonAppTranslate} >Create</button>
                    </div>
                </form>
            </div>
    );
}