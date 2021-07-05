import styles from './LoginPage.module.css'
import React from "react";
import {NavLink, Redirect} from "react-router-dom";


const LoginPage = (props) => {
    let onFormSubmit = (e) => {
        e.preventDefault()
        setTimeout(props.onFormSubmit, 500)
    }


    return (
       <div className={styles.loginComponent}>
           { props.isLogged && <Redirect to='/admin'/> }
           <div className={styles.formWrapper}>
               <form action="" className={styles.loginForm} onSubmit={onFormSubmit}>
                   <input
                       type="text"
                       name="username"
                       placeholder="username"
                       onChange={props.onLoginChange}
                       value={props.login}
                   />
                   <input
                       type="text"
                       name="password"
                       placeholder="password"
                       onChange={props.onPasswordChange}
                       value={props.password}
                   />
                   <input type="submit" className={styles.submitBtn} value="Log in" disabled={!props.password && !props.login}/>
               </form>
           </div>
       </div>
    )
}

export default LoginPage
