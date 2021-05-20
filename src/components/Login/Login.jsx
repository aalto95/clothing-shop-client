import styles from './Login.module.css'
import React from "react";


const Login = (props) => {

    return (
       <div className={styles.loginComponent}>
               <form action="" className={styles.loginForm}>
                   <label htmlFor="name">Username</label>
                   <input type="text" name="name"/>
                   <label htmlFor="password">Password</label>
                   <input type="text" name="password"/>
                   <input type="submit"/>
               </form>
       </div>
    )
}

export default Login