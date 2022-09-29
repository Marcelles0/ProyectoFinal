import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import styleDashboard from "./Dashboard.module.css";
// import Login from "../Login/Login";

// const Model = require('../../../../../back/Model/loginModel');

export default function Dashboard() {
    const params = useParams("");
    // console.log(params);
    const [formValues, setFormValues] = useState({
        userName: "",
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const handleInputChange = (e) => {
        //Ingresamos los campos del formulario
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

        //Comprobacion del campo tipo checkbox
        if (e.target.checked) {
            setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    }; /* 
    Model.find({
        'email': localStorage.email
    }).exec().then((result)=>{
        console.log(result._id);
    }) */
    // let email = localStorage.user;
    // console.log(email);
    // console.log(Login.user);
    // let userId = localStorage.getItem("id").substring('(',')')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        // fetch(`http://localhost:8000/dashboard/:${email}`, {
        //     method: "PUT",
        //     body: JSON.stringify(formValues),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // if(data.resultado==="ok"){
        //         //     navigate(`/${props.lang}/enviado`, { replace: true });
        //         // }
        //         // else{
        //         //     navigate(`/${props.lang}/no-enviado`, { replace: true });
        //         // }
        //     })
        //     .catch((error) => {
        //         // navigate(`/${props.lang}/no-enviado`, { replace: true });
        //     });
    };

    /* const handleSubmit2 = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/dashboard/:${email}`, {
            method: "DELETE",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }; */

    useEffect(() => {
        console.log(params);
        console.log(`http://localhost:8000/login/${params.id}`);
        fetch(`http://localhost:8000/login/${params.id}`, {
            method: "GET",
            //   body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.data.user)
                //Esta parte adaptarla para node con express
                if (data.error) {
                    alert("Error, datos incorrecto");
                } else {
                    setFormValues({
                        userName: data.data.userName,
                        email: data.data.email,
                        password: "",
                    });
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
                }
                //FIN Esta parte adaptarla para node con express
            });
    }, [params.id]);
    if (isLoading) {
        return (
            <div className={styleDashboard.section}>
                <section>
                    <h1>Dashboard</h1>
                </section>
                <section className={styleDashboard.noColor}>
                    <h3>Cargando...</h3>
                </section>
            </div>
        );
    }

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
                                {/* <div>
                                    <div>User Name</div>
                                    <div>{/* {Login.user.userName} </div>
                                </div>
                                <div>
                                    <div>Email</div>
                                    <div></div>
                                </div>
                                <div>
                                    <div>Password</div>
                                    <div></div>
                                </div> */}
                                <div>
                                    <div>Change User Name</div>
                                    <input
                                        id="userName"
                                        type="text"
                                        name="userName"
                                        placeholder="New User Name"
                                        onChange={handleInputChange}
                                        value={formValues.userName}
                                    />
                                </div>
                                <div>
                                    <div>Change Email</div>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="New Email"
                                        onChange={handleInputChange}
                                        value={formValues.email}
                                    />
                                </div>
                                <div>
                                    <div>Change Password</div>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="New Password"
                                        onChange={handleInputChange}
                                        value={formValues.password}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className={styleDashboard.fixButton}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <form onSubmit={handleSubmit2}>
                        <div>
                            <button
                                type="submit"
                                className={styleDashboard.fixButton}
                            >
                                Delete Account
                            </button>
                        </div>
                    </form> */}
                </div>
            </section>
        </div>
    );
}
