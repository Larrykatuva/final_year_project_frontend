import React from 'react'
import Kitui from '../../assets/logos/kitui.jfif'
import { Link } from 'react-router-dom'
import {VscSignIn} from "react-icons/vsc"

const top = () => {
    return (
        <div className="nav-top">
            <img src={Kitui} alt="" />
            <ul>
                <li>
                    <Link className="btn btn-primary">SignUp</Link>
                    <Link className="btn btn-warning">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default top
