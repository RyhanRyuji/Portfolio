import React from 'react';
import './Header.css';
import Profile from './pp.png'
import{FaGithub,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'



function Header() {

    return(
        <div className="header">
          
            <img className="profilepic" src={Profile} alt="profile"/>
            <div className="name">Al Ryhan <br/> Abi</div>
            <div className="icon">
                <a href={""}><FaGithub className='gith' size="2em"/></a>
                <a href={""}><FaInstagram className='insta' size="2em"/></a>
                <a href={""}><FaTwitter className='twitt' size="2em" /></a>
                <a href={""}><FaLinkedinIn className='linked' size="2em"/></a>
            </div>
        </div>
    );
}
export default Header;