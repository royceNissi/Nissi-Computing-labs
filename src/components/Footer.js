import NissiLogo from '../assests/nissi-blue-logo.png';
import {FaTwitter,FaLinkedinIn,FaFacebookF} from "react-icons/fa";
export const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={NissiLogo} alt="" width='130px'
                className='nissi-logo ' />
            <div className='footer'>
                <div className='footer__address-container'>
                    <div className='address'>
                        <h6 className='footer-header'>Office address</h6>
                        <p className='address__text'>
                            #74, Patel Ram Reddy Rd,
                            Domlur I Stage, Bengaluru
                            Karnataka, India - 560071
                        </p>
                        <h6 className='footer-header'>E-mail</h6>
                        <p>info@nissiagency.com</p>
                        <h6 className='footer-header'>Phone</h6>
                        <p>+91 8088100900</p>
                    </div>
                </div>
                <div className='footer__know-us'>
                    <h6 className='footer-header'>Get to know us</h6>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our work</p>
                    <p>Contact Us</p>
                </div>
                <div className='footer__connect'>
                    <h6 className='footer-header'>Connect with us</h6>
                    <div className='socials'>
                        <p><FaTwitter/></p>
                        <p><FaFacebookF/></p>
                        <p><FaLinkedinIn/></p>
                    </div>
                </div>
            </div>
            <p className='copyright'>©Nissi Computing Labs 2023</p>
        </div>
    )
}