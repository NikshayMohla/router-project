import React from 'react'
import logo from "../assets/Logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    let navigate=useNavigate()
    return (
        <div className='flex justify-evenly items-center px-4 py-2'>
            <Link to="/">
                <img src={logo} alt="LOGO" width={160} height={32} loading='lazy' />
            </Link>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-4'>
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">
                            <button className="btn">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn">
                                SignUp
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/dashboard">
                            <button className="btn">
                                Dashboard
                            </button>
                        </Link>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                            navigate("/")
                        }} className="btn">
                            LogOut
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
