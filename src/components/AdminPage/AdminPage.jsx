import styles from './AdminPage.module.css'
import React from "react";
import Error403 from "../Error403/Error403";
import Preloader from "../Preloader/Preloader";

const AdminPage = (props) => {

    let renderTable = () => {
        return props.items.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.brand}</td>
                    <td>{item.color}</td>
                    <td>{item.sex}</td>
                </tr>
            )
        })
    }

    if (!props.isAdmin) return <Error403 />
    if (props.isFetching) return <Preloader />

    return (
        <section className={styles.adminPage}>
            <table>
                <tbody>
                <tr className={styles.firstRow}>
                    <td>id</td>
                    <td>title</td>
                    <td>type</td>
                    <td>brand</td>
                    <td>color</td>
                    <td>sex</td>
                </tr>
                {renderTable()}
                </tbody>
            </table>
        </section>
    )

}

export default AdminPage
