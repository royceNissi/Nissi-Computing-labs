import NissiLogo from '../assests/nissi-white.png';
export default function Footer(){
    return(
        <div className='footer'>
            <hr/>
            <img src={NissiLogo} alt="" width='130px' className='nissi-logo--white'/>
            <div>
                <h5>Contact us</h5>
                <p>address</p>
                <p>phone</p>
                <p>email</p>
            </div>
            <div>
                <h5>Connect with us</h5>
                <p>twitter</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}