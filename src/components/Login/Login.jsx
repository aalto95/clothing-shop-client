import styles from './Login.module.css'
import React from "react";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    let onFormSubmit = (e) => {
        e.preventDefault()
        setTimeout(props.onFormSubmit, 500)
    }


    return (
       <div className={styles.loginComponent}>
           { props.isLogged && <Redirect to='/admin'/> }
               <form action="" className={styles.loginForm} onSubmit={onFormSubmit}>
                   <label htmlFor="name">Username</label>
                   <input type="text" name="name" onChange={props.onLoginChange} value={props.login}/>
                   <label htmlFor="password">Password</label>
                   <input type="text" name="password" onChange={props.onPasswordChange} value={props.password}/>
                   <input type="submit" />
               </form>
       </div>
    )
}

export default Login