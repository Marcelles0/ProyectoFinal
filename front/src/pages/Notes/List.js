import React from "react";
import styleNotes from "./Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function List (props){

    console.log(props, props.data);

    const deleteNote = async(id)=>{
        await fetch(`http://localhost:8000/notes/${id}`,{
            method: "DELETE",
            mode: "cors"
        })
        props.onDelete();
    }

    return(
        // <div>
        //     {/* <div>Title
        //         <textarea type="text" name="title" readOnly value={props.data.title}></textarea>
        //     </div>
        //     <div>Description
        //         <textarea  type="text" name="description" readOnly rows="4" value={props.data.description}></textarea>
        //     </div>
        //     <button id="submit" className={styleNotes.buttonNotes} >Edit</button>
        //     <button id="submit" className={styleNotes.buttonNotes} >Delete</button>
        //      */}
        //     <table className={styleNotes.table}>
        //         <tr>
        //             <th colSpan="2">Notes</th>
        //             <th>Edit/Delete</th>
        //         </tr>
                <tr>
                    <td><h4>{props.data.title}</h4></td>
                    <td>{props.data.description}</td>
                    <td>
                        <Link to={`/notes/edit/:${props.data._id}`}>
                            <button className={styleNotes.none}>
                                <FontAwesomeIcon icon={faPen} className={styleNotes.faIcons2}/>
                            </button>
                        </Link>
                        
                            <button className={styleNotes.none} onClick={(e)=>deleteNote(props.data._id)}>
                                <FontAwesomeIcon icon={faTrash} className={styleNotes.faIcons}/>
                            </button>
                        
                    </td>
                </tr>
        //     </table>
            
        // </div>
    )
}