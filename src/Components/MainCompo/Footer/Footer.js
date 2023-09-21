import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../Footer/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer mt-5 w-100 bg-white' >
        <div className="footer-wrapper container ">
            <div className="row p-5">
                <div className="col-3 card footercard">
                    <div className="heading">
                    <h4>Get To Now</h4>
                    </div>
                    <ul className='nav-ulf' >
                        <Link className='text-decoration-none text-dark' to='/about'>About Us</Link>
                        <li>Board Of direaction</li>
                        <li>Press Release</li>
                        <li>Our Awards</li>
                    </ul>
                    </div>
                <div className="col-3  card footercard">
                    <div className="heading">
                    <h4>Services</h4>
                    </div>
                    <ul className='nav-ulf' >
                        <li>Plan B</li>
                        <li>Baggages</li>
                        <li>Gift Vauchers</li>
                        <li>Refund Claim</li>
                    </ul>
                </div>
                <div className="col-3 card footercard">
                    <div className="heading">
                    <h4>Quick Links</h4>
                    </div>
                    <ul className='nav-ulf' >
                        <li>Offers</li>
                        <li>Careers</li>
                        <li>Advice With us</li>
                        <li>Destinations</li>
                    </ul>
                </div>
                <div className="col-3 card footercard">
                    <div className="heading">
                    <h4>Social</h4>
                    </div>
                    <ul className='nav-ulf SocialUi' >
                        <Link className='SocialLogo' to='www.instagram.com' > {<FaInstagram/>}</Link>
                        <Link className='SocialLogo' to='www.facebook.com' >{<FaFacebook/>}</Link>
                        <Link className='SocialLogo' to='www.twitter.com' >{<FaTwitter/>}</Link>
                        <Link className='SocialLogo' to='www.linkedIn.com' >{<FaLinkedinIn/>}</Link>
                    </ul>
                </div>
            </div>
                <div className="copyRight d-flex justify-content-center align-items-center text-bg-dark p-2 rounded">
                    <h5>All Copy Right Reserved @2023</h5>
                </div>
        </div>
    </div>
  )
}

export default Footer
