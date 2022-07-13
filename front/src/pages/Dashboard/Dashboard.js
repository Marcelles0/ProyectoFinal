import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import styleDashboard from "./Dashboard.module.css";


export default function Dashboard (){
    const params = useParams("");
    const [formValues, setFormValues] = useState({ userName: "", email: "", password: ""});

    const handleInputChange = (e) => {
        //Ingresamos los campos del formulario
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        
        //Comprobacion del campo tipo checkbox
        if(e.target.checked){
            setFormValues((prev) => ({...prev, [e.target.name]: e.target.value }));
        }
    };
    let email = localStorage.user;
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8001/dashboard/${email}`,{
          method: "PUT",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => {
            // if(data.resultado==="ok"){
            //     navigate(`/${props.lang}/enviado`, { replace: true });
            // }
            // else{
            //     navigate(`/${props.lang}/no-enviado`, { replace: true });
            // }
        }).catch((error) => {
            // navigate(`/${props.lang}/no-enviado`, { replace: true });
        });
      };

    return (
        <div className={styleDashboard.section}>
            <section>
                <h1>Dashboard</h1>
            </section>
            <section className={styleDashboard.noColor}>
                <div className={styleDashboard.container}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <div>
                                    <div>User Name</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Email</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Password</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Change User Name</div>
                                    <input id="userName" type="text" name="userName" placeholder="New User Name" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <div>Change Email</div>
                                    <input id="email" type="email" name="email" placeholder="New Email" onChange={handleInputChange} />
                                </div>
                                <div>
                                    <div>Change Password</div>
                                    <input id="password" type="password" name="password" placeholder="New Password" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div><button type="submit">Update</button></div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}