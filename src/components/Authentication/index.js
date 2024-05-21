import axios from "axios";
import { Fragment, useState } from "react";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom"
import Loader from "../UI/Loader"

  const AuthenticationIndex = () => {
    const [details, setDetails] = useState({
        email:"",
        password:""
    })
    const [loader, setLoader] = useState(false)
    const params = useParams()
    const handleInput = e => {       
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmission = e => {
        e.preventDefault();
        console.log(details); 
        if(params.type === "signup"){
            signupWithEmailAndPassword()
        }
    }

    const signupWithEmailAndPassword = async () => {
        setLoader(true)
        try{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdUkRgZoi3Z8V0AgwRBHLgUE-uGhR19H0`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            })
            console.log(response);            
        }
        catch(error) {
            console.log(error.response);
        }   
        finally{
            setLoader(false)
        }   
    } 
 
    console.log(params  );
    return (
        <Fragment>
            <div className="authentication-container">
            <div className="authentication-container--box">
                <div className="tab-selector">
                   <NavLink exact to= {"/login"}><h3>Login</h3></NavLink>
                   <NavLink exact to= {"/signup"}><h3>Signup</h3></NavLink>
                </div>
                <form autoComplete={"off"} onSubmit={handleSubmission}>
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter Email" value={details.email} onChange={handleInput}/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter Password" value={details.password} onChange={handleInput}/>
                    </div>
                    <div className="button-wrap">
                        <button className="login-button">
                        {params.type ==="login"? "Login" : "Signup"}
                        </button>
                    </div>
                </form>
            </div>
            </div>
            {loader && <Loader/>}
        </Fragment>    
    )
  }

  export default AuthenticationIndex