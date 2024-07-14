import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const changeHandler = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form action="">
                <div>
                    <label htmlFor="firstName">
                        <p>First Name <sup>*</sup></p>
                    </label>
                    <input
                        required
                        type="text"
                        name='firstName'
                        onChange={changeHandler} 
                        placeholder='Enter First Name'
                        value={formData.firstName} 
                    />
                    <label htmlFor="lastName">
                        <p>Last Name <sup>*</sup></p>
                    </label>
                    <input
                        required
                        type="text"
                        name='lastName'
                        onChange={changeHandler} 
                        placeholder='Enter Last Name'
                        value={formData.lastName} 
                    />
                </div>
                <label htmlFor="email">
                    <p>Email Address <sup>*</sup></p>
                </label>
                <input
                    required
                    type="email"
                    name='email'
                    onChange={changeHandler} 
                    placeholder='Enter Email'
                    value={formData.email} 
                />
                <div>
                    <label htmlFor="password">
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name='password'
                            onChange={changeHandler} 
                            placeholder='Enter Password'
                            value={formData.password}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                    <label htmlFor="confirmPassword">
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name='confirmPassword'
                            onChange={changeHandler} 
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    );
};

export default SignupForm;
