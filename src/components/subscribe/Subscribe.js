import React, { useState } from "react";
import SubDiv from "./SubscibeStyle";
import axios from "axios";
const APIurl = 'https://thefoundaterbackend.azurewebsites.net/newsletters/'
function Subscribe() {
    const [data, setData] = useState({
        email: "",
    })
    async function submit(e) {
        e.preventDefault();
        axios.post(APIurl, {
            email: data.email,
        })
            .then(res => {
                console.log(res.data)
            })

    }
    async function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <SubDiv>
            <div className="wrapper">

                <input type="checkbox" id="click" />

                <label className="btn-1" htmlFor="click">Subscribe !</label>
                <div className="field">
                    <form onSubmit={e => { submit(e) }}>
                        <input className="inputEmail" name="email" type="email" placeholder="Email Address" value={data.email}
                            onChange={e => handle(e)} id="email" />
                        <input type="submit" className="btn-2" value="Go" />
                    </form>
                </div>
            </div>
        </SubDiv>
    )
}
export default Subscribe;
