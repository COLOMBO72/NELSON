import React from "react"
import f from '../FormsControls/FormsControls.module.css'
import { Field } from "redux-form";

const FormControl = ({ input, meta, child, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={f.formControl + " " + (showError ? f.error : "")}>
            <div>{props.children}</div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const createField = (placeholder, component, validate, name, props = {}) => (
    <Field className={f.formField}
        name={name}
        placeholder={placeholder}
        component={component}
        validate={validate}
        {...props} />)


