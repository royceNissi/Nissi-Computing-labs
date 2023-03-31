import { Footer } from "../components/Footer"
export const Form=()=>{
    return(
        <>
            <div className="contact-form">
                <div className="contact-form__inputs">
                    <h2 className="contact-header">
                    Contact Us
                    </h2>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea cols="30" rows="5" placeholder="Message">
                    </textarea>
                    <button>Submit</button>
                </div>
                <div className="address-container">
                    <h6 className="address-header">Office Address</h6>
                    <p className="address">#74, Patel Ram Reddy Rd, Domlur I Stage, Bengaluru Karnataka, India - 560071</p>
                    <h6 className="email-header">E-mail</h6>
                    <p className="email-address">info@nissiagency.com</p>
                    <h6 className="phone-header">Phone</h6> 
                    <p className="phone-number">+91 8088100900</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}