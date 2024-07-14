import React from 'react';
import frameImage from "../assets/frame.png";
import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {formType === "signup" ? <SignUpForm /> : <LoginForm />}
                <div>
                    <div></div>
                    <p>OR</p>
                </div>
                <button>Sign Up With Google</button>
            </div>
            <div>
                <img src={frameImage} alt="Frame" width={558} height={504} loading='lazy' />
                <img src={image} alt="student" width={558} height={490} loading='lazy' />
            </div>
        </div>
    );
};

export default Template;
