import React, { useEffect, useState } from "react";
import styleNotes from "./Notes.module.css";
import NewNotes from "./new-note";
import List from "./List";


export default function Notes (){
    let id = localStorage.getItem("userId").replace(/\"/g,"");
    // console.log(id);
    
    const [notes,setNotes]= useState([])
    const getNotes = async ()=>{
        const response = await fetch(`http://localhost:8000/notes/${id}`)
        const result = await response.json()
        setNotes(result)
    }
    useEffect(()=>{
        getNotes();
    },[])

    return (
        <div>
            <div className={styleNotes.section}>
                <section>
                    <h1>Notes</h1>
                </section>
                <section className={styleNotes.sectionFlex}>
                    {/* <div className={styleNotes.sectionForms}>
                        < NewNotes />
                    </div> */}
                    <div className={styleNotes.containerNotes}>
                            <table className={styleNotes.table}>
                                <tr>
                                    <th colSpan="2">Notes</th>
                                    <th>Edit/Delete</th>
                                </tr>
                        <List>
                                <Notes />
                        </List>
                            </table>
                    </div>
                </section>
            </div>
        </div>
    );
}