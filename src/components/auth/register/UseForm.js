import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import { useState, useEffect } from "react";
// import ValidateInfo from "./ValidateInfo";

const UseForm = (validate) => {
    const [values, setValues] =  useState({
        firstName:"", 
        lastName:"",
        email: "",
        password: "",
        confirmPassword:""
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values, 
            [name]:  value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    return {handleChange, values, handleSubmit, errors}
}

export default UseForm;