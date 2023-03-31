import NissiLogo from '../assests/nissi-white.png';
import { FaRegBuilding,FaTwitter,FaLinkedinIn,FaFacebookF} from "react-icons/fa";
export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer__address-container'>
                    <div className='address'>
                    <img src={NissiLogo} alt="" width='130px'
                className='nissi-logo nissi-logo--white' />
                        <h6> <FaRegBuilding /> Office address</h6>
                        <p className='address__text'>
                            #74, Patel Ram Reddy Rd,
                            Domlur I Stage, Bengaluru
                            Karnataka, India - 560071
                        </p>
                        <h6>E-mail</h6>
                        <p>info@nissiagency.com</p>
                        <h6>Phone</h6>
                        <p>+91 8088100900</p>
                    </div>
                </div>
                <div className='footer__know-us'>
                    <h5>Get to know us</h5>
                    <p>home</p>
                    <p>about</p>
                    <p>Our work</p>
                </div>
                <div className='footer__connect'>
                    <h5>Connect with us</h5>
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