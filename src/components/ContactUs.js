export default function Form(){
    return(
        <div className="contact-form">
            <h3 className="contact-form__header">
                Contact Us
            </h3>
            <form className="contact-form__inputs">
                <input type="text" placeholder="Name" /><br/>
                <input type="email" placeholder="Email" /><br/>
                <input type="text" placeholder="Subject" /><br/>
                <textarea cols="20" rows="10" placeholder="Message">
                </textarea>
            </form>
        </div>
    )
}