import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon'
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
            <a href="https://www.instagram.com/" target="_blank" className='items'>
                <FaSquareInstagram  className="icons"/>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank"  className='items'>
                <FaLinkedin className="icons" />
            </a>
            <a href="https://github.com/aditi-jangra" target="_blank"  className='items'>
                <FaGithub className="icons" />
            </a>
            <a href='https://www.facebook.com/' target='_blank' className='items'>
                <FaFacebook className="icons" />
            </a>
            <a href="https://gitlab.com/users/sign_in" target="_blank" className='items'>
                <FaSquareGitlab className="icons" />
            </a>
            <a href="mailto:webdevmastery@gmail.com" target="_blank" className='items'>
                <SiGmail className="icons" />
            </a>
        </div>
        </div>
    </>
  )
}

export default Contact;