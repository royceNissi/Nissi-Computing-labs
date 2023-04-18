import {ContactForm} from '../components/Contact'
export const Form=()=>{
    return(
        <>
            <div className="contact-form-container">
                <ContactForm/>
                <div className="address-container">
                    <h6 className="sub-heading">Office Address</h6>
                    <p className="address">#74, Patel Ram Reddy Rd, Domlur I Stage, Bengaluru Karnataka, India - 560071</p>
                    <h6 className="sub-heading">E-mail</h6>
                    <p className="email-address">info@nissiagency.com</p>
                    <h6 className="sub-heading">Phone</h6> 
                    <p className="phone-number">+91 8088100900</p>
                </div>
            </div>
        </>
    )
}