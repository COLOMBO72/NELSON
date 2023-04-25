import React from "react";
import Header from '../Header/Header'
import { getAuthUserData } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { logout } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    connect(mapStateToProps,{ logout})
)(HeaderContainer)