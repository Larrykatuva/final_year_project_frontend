import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillCaretDown} from 'react-icons/ai'

const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link>Services <AiFillCaretDown/></Link>
                </li>
                <li>
                    <Link>Help</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default navbar
