import HamburgerNav from "../navbar/Navbar";
import { useState } from "react";
import { Twirl as Hamburger } from 'hamburger-react'
function Burger() {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            {
       isOpen?<div><HamburgerNav/></div>:null
     }
        </div>
    )
}

export default Burger;