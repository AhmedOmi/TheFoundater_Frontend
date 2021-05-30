import { ContactS } from "./ContactStyle";
import { useState } from 'react';
import axios from "axios";

function Contact() {
    const url = 'https://thefoundaterbackend.azurewebsites.net/contact/'
    const [data, setData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        message: "",
    })
    const submit = async(e) => {
        e.preventDefault();
        await axios.post(url, {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            message: data.message,
        })
            .then(res => {
                console.log(res.data)
            })

    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <ContactS>

            <form onSubmit={e => { submit(e) }}>

                <h1> . KEEP IN TOUCH . </h1>
                <div className="underline"></div>
                <label>
                    <input type="email" name="email" value={data.email} placeholder="Email Adress" onChange={e => handle(e)} />
                </label>
                <label>
                    <input className="firstName" type="text" name="firstName" value={data.firstName} placeholder="First Name" onChange={e => handle(e)} />
                </label>
                <label>
                    <input className="lastName" type="text" name="lastName" value={data.lastName} placeholder="Last Name" onChange={e => handle(e)} />
                </label>
                <label>
                    <input type="text" name="phone" value={data.phone} placeholder="Phone Number" onChange={e => handle(e)} />
                </label>
                <label>
                    <textarea id="message" name="message"
                        rows="5" cols="33" value={data.message} placeholder="Contact us" onChange={e => handle(e)}>
                    </textarea>
                </label>
                <label>
                    <input className='submitButton'
                        type='submit'
                        value='submit'
                    />
                </label>
            </form>
        </ContactS >
    )
}

export default Contact;