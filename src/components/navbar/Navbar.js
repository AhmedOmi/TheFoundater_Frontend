import NavStyle from "./NavStyle";
function HamburgerNav(){
    return (
       <NavStyle>
           <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/stories">Stories</a></li>
               <li><a href="/about">About Us</a></li>
               <li><a href="/contact">Contact Us</a></li>
           </ul>
       </NavStyle>
    )
}

export default HamburgerNav;