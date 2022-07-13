import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styleRegister from "./Register.module.css";


export default function Register (){
    const navigate = useNavigate();
    //useState para almacenar los datos del formulario
    const [formValues, setFormValues] = useState({
        userName: "",
        email: "",
        password: "",
      });
    
      //Funcion para insertar o modificar el registro al endpoint POST / PUT
      const handleSubmit = (e) => {
        var valorP1 = document.getElementById("Password").value;
        var valorP2 = document.getElementById("Password2").value;
        if (valorP1===valorP2){
          e.preventDefault();
          console.log(formValues);
          fetch(`http://localhost:8001/login/new`, {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              //console.log(data.data.token)
              //Esta parte adaptarla para node con express
              if(data.code===401){
                alert('Error, datos incorrecto');
              }
              else{
  
                window.location.href="/dashboard";
                //navigate(`/dashboard`, { replace: true });
              }
              //FIN Esta parte adaptarla para node con express
              
            });
        } else {
          alert('Error, las contraseñas no coinciden');
        }
      };
    
      //Funcion para actualizar los useState correspondiente a cada input
      const handleInputChange = (e) => {
        //Ingresamos los campos del formulario
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };




    return (
        <div className={styleRegister.section}>
            <section>
                <h1>Register</h1>
            </section>
            <section className={styleRegister.noColor}>
                <div className={styleRegister.container}>
                    <form onSubmit={handleSubmit}>
                        <div>

                            <div>
                                <div>
                                    <div>User Name</div>
                                    <input id="Name" type="text" name="userName" placeholder="User Name" onChange={handleInputChange} required autoFocus></input>
                                </div>
                                <div>
                                    <div>Email</div>
                                    <input id="Email" type="text" name="email" placeholder="Email" onChange={handleInputChange} required></input>
                                </div>
                                <div>
                                    <div>Password</div>
                                    <input id="Password" type="password" name="password" placeholder="Password" onChange={handleInputChange} required></input>
                                </div>
                                <div>
                                    <div>Confirm Password</div>
                                    <input id="Password2" type="password" name="password" placeholder="Confirm Password" onChange={handleInputChange} required></input>
                                </div>
                            </div>
                            <div className={styleRegister.blueLink}>
                                <input className={styleRegister.checkbox} id="rememberCheck" type="checkbox"></input>
                                <label>By signing up for JSTranslator, you agree to our <Link to={`/register`}>Terms of Service</Link> and <Link to={`/register`}>Privacy Policy.</Link></label>
                                <button id="submit" className={styleRegister.buttonRegister}>Register</button>
                                <div>You Have Account? <Link to={`/login`}>Log In</Link></div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}