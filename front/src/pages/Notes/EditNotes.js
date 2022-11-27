import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import styleNotes from "./Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";


const EditNotes = (props) => {
    console.log(props);
    /* var URLactual = window.location;
    var noteId = URLactual.pathname.split(":")
    console.log(noteId[1]); */

    const params = useParams("");
    console.log(params);

    
    
    const [note, setNote] = useState({title:"", description:""});
    // const [fetched, setFetched] = useState(false);

    const id = params.id.replace(":","");
    console.log(id);

    useEffect(() => {
        const getNote = async () => {
            await fetch(`http://localhost:8000/notes/${id}`)
                .then(async (response)=>{

                    const result = await response.json();
                    console.log(result);
                    if (result) {
                        setNote(result);
                    }
                    else{
                        window.location.href=`/notes`;
                    }
                }).catch(()=>{window.location.href=`/notes`;})
        };
        getNote();
    }, []);

    

    console.log(note);

    
    const saveNote = async ()=>{
        await fetch(`http://localhost:8000/notes/edit/${id}`, {
            method: 'PATCH',
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
                        <form onSubmit={onSubmit}>
                            <div className={styleNotes.container}>
                                <div>
                                    <input type="text" name="title" value={note.title} onChange={(e)=>setNote((value)=>{return {...value, title: e.target.value}})} placeholder="Title" autoFocus></input>
                                </div>
                                <div>
                                    <input type="text" name="description" value={note.description} onChange={(e)=>setNote((value)=>{return {...value, description: e.target.value}})} placeholder="Description" className={styleNotes.input}></input>
                                </div>
                                <button id="submit"  className={styleNotes.buttonAppTranslate} >Create</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
};
export default EditNotes;
