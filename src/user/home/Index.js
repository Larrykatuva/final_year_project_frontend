import React from 'react'
import Top from '../includes/Top'
import Navbar from '../includes/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import BG from '../../assets/BG.jpg'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="user-home">
            <Top/>  
            <Navbar/> 
            <section className="showcase"
                style={{backgroundImage: `url(${BG})`,}}>
            </section> 
            <section className="showcase-layer">
                <div className="content">
                    <h3>Welcome to Government Self Service Portal</h3>
                    <p>Access all National government and county services though our self service online portal which is available 24/7. Your queries will be analyzed and responses given accordingly within 24hrs.</p>
                    <Link>Register Now &#8594;</Link>
                </div>
            </section>
        </div>
    )
}

export default index
