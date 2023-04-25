import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required, maxLengthCreator, minLengthCreator } from '../../utils/validators';
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import l from '../Login/Login.module.css'
import styleerror from '../Common/FormsControls/FormsControls.module.css'
import { createField } from "../Common/FormsControls/FormsControls";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <div className={l.loginBlock}>
            <div className={l.header}>Join us</div>
            <form onSubmit={handleSubmit}>
                <div className={l.inputFields}>
                    {createField ("Email", Input, [required, maxLengthCreator(20), minLengthCreator(1)], "email")}
                    {createField("password", Input, [required, maxLengthCreator(20), minLengthCreator(6)], "password", 'password')}
                    
                </div>
                <div className={l.rememberMe}>
                    <Field name={"rememberMe"} type={"checkbox"} component={Input} />
                    <div>remember me</div>
                </div>
                {error && <div className={styleerror.form_summary_error}>{error}</div>}
                <button>Login</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);