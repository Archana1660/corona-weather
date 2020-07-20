import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="container">
            <div className="card"> 
                <Link to="/signup">New User?? Click here to create new account</Link>
            </div>
            <div className="card">
                <Link to="/signin">Existing User?? Click here to login</Link>
            </div>
        </div>
    )
}

export default LandingPage
