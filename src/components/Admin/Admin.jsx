import styles from './Admin.module.css'
import React from "react";

const Admin = (props) => {

    if (props.isLogged) {
        return (
            <div>
                HERE WILL BE AN ADMIN PAGE
            </div>
        )
    }
    return (
        <div>
            FORBIDDEN. ERROR 403
        </div>
    )
}

export default Admin