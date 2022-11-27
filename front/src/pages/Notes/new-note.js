import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleNotes from "./Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";


export default function NewNotes (){
    console.log("hola");
    // const userId = localStorage.getItem("userId").replace(/\"/g, "");
    const userId = localStorage.getItem("userId").slice(1, -1);
    const [note, setNote]= useState({
        title:'',
        description:''
        // userId: id
    })

    // let userId = localStorage.getItem("userId");
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
                'Content-Type': 'application/json',
                authorization: userId
            }
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        saveNote();
        window.location.href=`/notes`;
    }

    return (
        <div>
            <div className={styleNotes.section}>
                <section>
                    <h1>Notes</h1>
                </section>
            
                <section className={styleNotes.sectionForms}>
                    <div>
                        <Link to={`/notes`}>
                            Mis notas <FontAwesomeIcon icon={faArrowRotateLeft} className={styleNotes.faPlus}/>
                        </Link>
                    </div>
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
                </section>

            </div>
        </div>
    );
}