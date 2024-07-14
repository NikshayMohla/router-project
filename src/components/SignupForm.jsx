import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"




const SignupForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        LastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const changeHandler = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const [showPassword, setshowPassword] = useState(false)

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form action="">
                <div>
                    <label htmlFor="">
                        <p>First Name <sup>*</sup></p>
                    </label>
                    <input
                        required
                        type="text"
                        name='firstname'
                        onChange={changeHandler} placeholder='Enter First Name'
                        value={formData.firstName} />
                    <label htmlFor="">
                        <p>Last Name <sup>*</sup></p>
                    </label>
                    <input
                        required
                        type="text"
                        name='lastname'
                        onChange={changeHandler} placeholder='Enter last Name'
                        value={formData.LastName} />
                </div>
                <label htmlFor="">
                    <p>Email Address <sup>*</sup></p>
                </label>
                <input
                    required
                    type="email"
                    name='email'
                    onChange={changeHandler} placeholder='Enter email'
                    value={formData.email} />
                <div>
                    <label htmlFor="">
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler} placeholder='Enter password'
                            value={formData.password}
                        />

                        <span onClick={() => setshowPassword((prev) => !prev)}>
                            showPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)
                        </span>
                    </label>
                    <label htmlFor="">
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='Confirmpassword'
                            onChange={changeHandler} placeholder='Confirm password'
                            value={formData.confirmPassword}
                        />

                        <span onClick={() => setshowPassword((prev) => !prev)}>
                            showPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)
                        </span>
                    </label>
                </div>
                <button>Create Account</button>

            </form>
        </div>
    )
}

export default SignupForm
