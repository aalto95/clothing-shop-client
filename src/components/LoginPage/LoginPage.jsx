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
           <NavLink to="/"><h1 className={styles}>Grocery Store</h1></NavLink>
           <div className={styles.formWrapper}>
               <form action="" className={styles.loginForm} onSubmit={onFormSubmit}>
                   <label htmlFor="username">USERNAME:</label>
                   <input type="text" name="username" onChange={props.onLoginChange} value={props.login}/>
                   <label htmlFor="password">PASSWORD:</label>
                   <input type="text" name="password" onChange={props.onPasswordChange} value={props.password}/>
                   <input type="submit" className={styles.submitBtn} value="LoginPage" disabled={!props.password && !props.login}/>
               </form>
           </div>
       </div>
    )
}

export default LoginPage