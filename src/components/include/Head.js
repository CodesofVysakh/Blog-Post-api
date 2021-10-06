import React from 'react';
import './Head.css';
import Logo from '../assets/images/moke..png';
import Twitter from '../assets/images/twitter.png';
import Instagram from '../assets/images/instagram.png';


export default function Head() {
    return (
        <header>
            <section className="wrapper">
                <h1><a href="#"><img src={Logo} alt="Logo" /></a></h1>
                <ul>
                    <li><a href="#">Get Signal</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Donate</a></li>
                    <li><a href="#"><img src={Twitter} alt="Social-Media-Icon" /></a></li>
                    <li><a href="#"><img src={Instagram} alt="Social-Media-Icon" /></a></li>
                </ul>
            </section>
        </header>
    )
}
