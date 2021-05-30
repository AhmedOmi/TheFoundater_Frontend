import React, { Component } from "react";
import FooterComponent from './FooterStyle';
import { SocialIcon } from 'react-social-icons';
class Footer extends Component {
    render() {
        return (
            <FooterComponent>
                <div className='logo'>
                    <a href='/'><img src={process.env.PUBLIC_URL + '../images/logo.svg'} alt="theFoundaterLogo" /></a>
                </div>
                <div className="copyright">
                    <p>Created with Love By Ahmed Omar Miladi @ 2021 email:Ahmedomarmiledi@gmail.com</p>
                </div>
                <div className="Social" >
                    <ul>
                        <li><SocialIcon url="http://twitter.com/#" bgColor="black" network="twitter" fgColor="white"/></li>
                        <li><SocialIcon url="http://instagram.com/#"  bgColor="black" network="instagram" fgColor="white"/></li>
                        <li><SocialIcon url="http://facebook.com/#"  bgColor="black" network="facebook" fgColor="white"/></li>
                        <li><SocialIcon url="https://www.linkedin.com/company/the-foundater"  bgColor="black" network="linkedin" fgColor="white"/></li>
                    </ul>
                </div>
            </FooterComponent>
        )
    }
}
export default Footer;