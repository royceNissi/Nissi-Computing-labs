import NissiLogo from '../assests/nissi-white.png';
import building  from '../assests/icons/bulding.png';
export const Footer=()=>{
    return(
        <div className='footer'>
            <hr/>
            <div className='footer__flex--direction-col'>
                <img src={NissiLogo} alt="" width='130px' 
                    className='nissi-logo nissi-logo--white'/>
                <div className='address-container'>
                        <img className='address__icon'src={building} alt="" width={'30px'}/>
                        <p className='address__text'>
                            #74, Patel Ram Reddy Rd,
                            Domlur I Stage, Bengaluru
                            Karnataka, India - 560071
                            info@nissiagency.com
                            +91 8088100900
                        </p>
                </div>
            </div>
            <div className='footer__flex--direction-col'>
                <h5>Get to know us</h5>
                <p>home</p>
                <p>about</p>
                <p>Our work</p>
            </div>
            <div className='footer__flex--direction-col'>
                <h5>Connect with us</h5>
                <p>Twitter</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}