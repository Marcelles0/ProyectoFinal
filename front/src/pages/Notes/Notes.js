import React, { useEffect, useState } from "react";
import styleNotes from "./Notes.module.css";
import NewNotes from "./new-note";
import List from "./List";


export default function Notes (){
    
    const [notes,setNotes]= useState([])
    const getNotes = async ()=>{
        const response = await fetch(`http://localhost:8000/notes`)
        const result = await response.json()
        setNotes(result)
    }
    useEffect(()=>{
        getNotes();
    },[])

    return (
        <div>
            {/* {errors ? (
                <div></div>
            ): <div></div>
            } */}
            
            <div className={styleNotes.section}>
                <section>
                    <h1>Notes</h1>
                </section>
                <section className={styleNotes.sectionFlex}>
                    <div className={styleNotes.sectionForms}>
                        < NewNotes />
                    </div>
                    
                    <div className={styleNotes.containerNotes}>
                        <div>Title
                            <textarea type="text" name="title" placeholder="Title" ></textarea>
                        </div>
                        <div>Description
                            <textarea  type="text" name="description" placeholder="Description" rows="4"></textarea>
                        </div>
                        <button id="submit" className={styleNotes.buttonNotes} >Edit</button>
                        <button id="submit" className={styleNotes.buttonNotes} >Delete</button>
                    </div>
                    <div className={styleNotes.containerNotes}>
                        <div>Title
                            <textarea type="text" name="title" placeholder="Title" ></textarea>
                        </div>
                        <div>Description
                            <textarea  type="text" name="description" placeholder="Description" rows="4"></textarea>
                        </div>
                        <button id="submit" className={styleNotes.buttonNotes} >Edit</button>
                        <button id="submit" className={styleNotes.buttonNotes} >Delete</button>
                    </div>
                    <div className={styleNotes.containerNotes}>
                        <div>Title
                            <textarea type="text" name="title" placeholder="Title" ></textarea>
                        </div>
                        <div>Description
                            <textarea  type="text" name="description" placeholder="Description" rows="4"></textarea>
                        </div>
                        <button id="submit" className={styleNotes.buttonNotes} >Edit</button>
                        <button id="submit" className={styleNotes.buttonNotes} >Delete</button>
                    </div>
                    
                    
                </section>
            </div>
        </div>
    );
}