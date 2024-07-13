import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'


const Navbar = (props) => {

    let IsLoggedIn = props.IsLoggedIn;
    let setIsLoggedIn = props.setsIsLoggedIn;

    return (
        <div className='flex justify-evenly'>
            <Link to="/">
                <img src={logo} alt="LOGO" width={160} height={32} loading='lazy' />
            </Link>

            <nav>
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className='flex ml-3 mr-5 gap-3'>
                {!IsLoggedIn &&
                    <Link to="/Login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                {!IsLoggedIn &&
                    <Link to="/Signup">
                        <button>
                            SignUp
                        </button>
                    </Link>
                }
                {IsLoggedIn &&
                    <Link to="/Logout" >
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}>
                            LogOut
                        </button>
                    </Link>
                }
                {IsLoggedIn &&
                    <Link to="/Dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
