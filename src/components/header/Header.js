import React, { Component } from "react";
import HeaderComponent from './HeaderStyle'; 
import Subscribe from "../subscribe/Subscribe";
import Burger from "../burgerbutton/ButtonBurger";
class Header extends Component{
    render(){
        return(
            <HeaderComponent>
                <div className='logo'>
                    <a href='/'><img src={process.env.PUBLIC_URL + '../images/logo.svg'} alt="theFoundaterLogo"/></a>
                </div>
                <div className="info_header">
                    <p>Call Us(+216)27202548/ info@thefoundater.com</p>
                </div>
                <div className="subscribe">
                    <Subscribe />
                </div>
                <div className="Navbar" >
                <Burger />
                </div>
            </HeaderComponent>
        )
    }
}
export default Header;