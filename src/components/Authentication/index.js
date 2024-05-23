import { Fragment, useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom/cjs/react-router-dom"
import Loader from "../UI/Loader"
import { useDispatch } from "react-redux";
import { loginwithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/authentication";

  const AuthenticationIndex = () => {
    const [details, setDetails] = useState({
        email:"",
        password:""
    })
    const [loader, setLoader] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory() 

    const handleInput = e => {       
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        return () => {
            setLoader(false)
            setDetails({
                email: "",
                password: ""
            })
        }
    }, [])

    const handleSubmission = e => {
        e.preventDefault();
        console.log(details); 
        if(params.type === "signup"){
            setLoader(true)
            dispatch(signupWithEmailAndPassword(details, data => {
                if (data.error){
                    console.log(data.error);                   
                    alert("There is an error")
                }
                else{
                    console.log("Signup Successful!");
                    history.replace("/")
                }
                setLoader(false)
            }))
        }
        else if (params.type === "login"){
            setLoader(true)
            dispatch(loginwithEmailAndPassword(details, data => {
                if (data.error){
                    console.log(data.response);
                    alert(data?.response?.data?.error?.message || "There is an error")
                }
                else{
                    console.log("Login Successful!");
                    history.replace("/")
                }
                setLoader(false)
            }))
        }
    }
    
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