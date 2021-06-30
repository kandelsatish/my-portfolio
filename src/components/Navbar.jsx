import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Navbar.css'
import { FaGithub, FaLinkedin, FaFacebook,FaBars,FaTimesCircle } from "react-icons/fa";
export default function Navbar() {
    const [toogle,setToogle]=React.useState(false);
    const doToogle=toogle?"toogle":null;
    return (
        <header>
            <div className="bars" onClick={()=>setToogle(!toogle)}>
                <FaBars color={"white"} size={25}/>
            </div>
            <div className="logo">
                <Link to="/"><h1>Satish</h1></Link>
            </div>
            <nav>
                <ul className={`nav-links ${doToogle}`} >
                    <li><Link to="/posts">Blog</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="close" onClick={()=>setToogle(!toogle)}><FaTimesCircle size={30} color={"white"}/></li>
                </ul>
                <ul className="nav-icons">
                    <li><Link to={{ pathname: "https://www.linkedin.com/in/satish-kandel-00220516b/" }} target="_blank"><FaLinkedin size={30} color={"white"} className="icon"/></Link></li>
                    <li><Link to={{ pathname: "https://github.com/kandelsatish" }} target="_blank"><FaGithub size={30} color={"white"} className="icon"/></Link></li>
                    <li><Link to={{ pathname: "https://www.facebook.com/satish.kadel.3" }} target="_blank"><FaFacebook size={30} color={"white"} className="icon"/></Link></li>
                </ul>
            </nav>
        </header>
    )
}
