import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styleLogin from "./Login.module.css";


export default function Login (){
    const navigate = useNavigate();
    //useState para almacenar los datos del formulario
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
      });
    // let user;
      //Funcion para insertar o modificar el registro al endpoint POST / PUT
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formValues);
        fetch(`http://localhost:8000/login/`, {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // user = data.data.user;
            // console.log(data.data.user)
            //Esta parte adaptarla para node con express
            console.log(data);
            if(data.code===403){
              alert(data.error);
            }
            else{
                localStorage.setItem("token", data.data.token);
                localStorage.setItem("userId", JSON.stringify(data.data.user[0]._id));
                // console.log(data.data.user[0]._id);
              // window.location.href="/dashboard";
              console.log(data);
              navigate(`/dashboard/${data.data.user[0]._id}`, { replace: true });
            }
            //FIN Esta parte adaptarla para node con express
            
          });
      };
    
      //Funcion para actualizar los useState correspondiente a cada input
      const handleInputChange = (e) => {
        //Ingresamos los campos del formulario
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    return (
        <div className={styleLogin.section}>
            <section>
                <h1>Login</h1>
            </section>
            <section className={styleLogin.noColor}>
                <form onSubmit={handleSubmit}>
                    <div className={styleLogin.container}>
                        <div>
                            <div>
                                <div>
                                    <div>Email Address</div>
                                    <input id="Email" type="text" placeholder="Email" name="email" onChange={handleInputChange} required autoFocus></input>
                                </div>
                                <div>
                                    <div>Password</div>
                                    <input id="Password" type="password" placeholder="Password" name="password" onChange={handleInputChange} required></input>
                                </div>
                            </div>
                            {/* <div className={styleLogin.row}>
                                <div>
                                    <input className={styleLogin.checkbox} id="rememberCheck" type="checkbox"></input>
                                    <label>Remember Me</label>
                                </div>
                                <div><Link to={`/login`}> Forgot Password?</Link></div>
                            </div> */}
                            <button id="submit" className={styleLogin.buttonLogin}>Login</button>
                            <div className={styleLogin.blueLink}>Don't Have an Account? <Link to={`/register`}>Register Now</Link></div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}