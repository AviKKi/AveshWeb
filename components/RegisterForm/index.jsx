import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password1: Yup.string().required("Required"),
    password2: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    mobile: Yup.string().matches(/[6-9][0-9]{9}/).required("Required"),
    college: Yup.string().required("Required"),
})

const _initial_values = {
    username: "",
    password1: "",
    password2: "",
    email: "",
    mobile: "",
    college: ""
}

export default function RegisterForm(props) {
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: _initial_values,

        onSubmit: props.submitHandler
    })
    return <></>
}