import React, {useEffect} from "react";
import AdminPage from "./AdminPage";
import {connect} from "react-redux";
import {fetchAllItems} from "../../redux/admin-reducer";

const AdminPageContainer: React.FC = () => {
    useEffect(props.fetchAllItems, [])
    return (
        <AdminPage {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAdmin: state.loginPage.isAdmin,
        items: state.adminPage.items,
        isFetching: state.productsPage.isFetching
    }
}

let mapDispatchToProps = {
    fetchAllItems
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminPageContainer)
