import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import styleNotes from "./Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faRefresh } from "@fortawesome/free-solid-svg-icons";

const AllNotes = () => {
    let id = localStorage.getItem("userId").replace(/\"/g, "");

    const [notes, setNotes] = useState([]);
    const [fetched, setFetched] = useState(false);

    console.log(notes);

    const deleteItem = (noteId) =>{
        console.log(noteId, notes);
        setNotes ((current)=> current.filter((value)=>value._id !== noteId))
        
    }

    useEffect(() => {
        const getNotes = async () => {
            const response = await fetch(`http://localhost:8000/notes/by_user/${id}`);
            const result = await response.json();
            if (result) {
                setNotes(result);
                setFetched(true);
            }
        };
        getNotes();
    }, []);
    useEffect(() => {
    }, [fetched]);

    return (
        <div>
            <div className={styleNotes.section}>
                <section>
                    <h1>Notes</h1>
                </section>
                <section className={styleNotes.sectionFlex}>
                    <div>
                        <Link to={`/notes/new-note`}>
                            Nueva nota <FontAwesomeIcon icon={faCirclePlus} className={styleNotes.faPlus}/>
                        </Link>
                    </div>
                    <table className={styleNotes.table}>
                        <thead>
                            <tr>
                                <th colSpan="2">Notes</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetched &&
                                notes.map((note) => {
                                    // console.log(note);
                                return <List data={note} key={note._id} onDelete={()=>{deleteItem(note._id)}}/>;
                                })}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default AllNotes;
