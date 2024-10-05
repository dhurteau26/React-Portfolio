
import '../styles/Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0cc18ed4-3196-4cb4-bce6-1e7a05fb155e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Submitted!",
            text: "Your message has been sent!",
            icon: "success"
          });
        }
      };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder="Enter your name" name='name' required />
                </div>
                <div className='input-box'>
                    <label>Email Adress </label>
                    <input type="email" className="field" placeholder="Enter your email" name='email' required />
                </div>
                <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name="message"  className="field mess" placeholder='Enter your message'></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}



export default Contact