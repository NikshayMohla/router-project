import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from 'react-router-dom'


const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }
    const [showPassword, setshowPassword] = useState(false)
    return (
        <form action="">
            <label htmlFor="">
                <p>Email Address<sup>*</sup></p>
                <input required type="text" value={formData.email}
                    onChange={changeHandler}
                    placeholder='random@random.com' name='email' />
            </label>
            <label htmlFor="">
                <p>Email Address<sup>*</sup></p>
                <input required type={showPassword ? ("text") : ("passwords")} value={formData.password} onChange={changeHandler} placeholder='Enter Your Password' name='password' />

                <span onClick={() => setshowPassword((prev) => !prev)}>
                    showPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)
                </span>
                <Link to="">
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>Sign In</button>

        </form>
    )
}

export default LoginForm
