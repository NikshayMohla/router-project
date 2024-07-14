import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successfully");
        navigate("/dashboard");
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="email">
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='random@random.com'
                    name='email'
                />
            </label>
            <label htmlFor="password">
                <p>Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Your Password'
                    name='password'
                />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
                <Link to="/forgot-password">
                    <p>Forgot Password</p>
                </Link>
            </label>
            <button>Sign In</button>
        </form>
    );
};

export default LoginForm;
