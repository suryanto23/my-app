import React from 'react'
import { Link } from "react-router-dom";

import "./navbar.css"

function Navbar() {
    return (
        <div className="navigasi">
            
            <Link to = "/">Soal-1</Link>
            <Link to="/product">Soal-2</Link>

        </div>
    )
}

export default Navbar
