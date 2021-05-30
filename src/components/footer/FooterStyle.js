import styled from "styled-components";

const FooterComponent = styled.div `
width:100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
border-top: 2px solid rgba(0, 0, 0, .3);
.logo{
    width:auto;
    height:auto;
   
}
.logo a{
    width:auto;
    height:auto;
}
.logo img{
    width:35%;
}
.copyright p{
    font-size:12px;
    font-weight:bold;
    position:relative;
    right:150px;
}
ul{
    list-style:none;
    display:flex;

}
ul > li{
    margin-left:5px
}
@media screen and (max-width: 1000px) {
width:100%;
display: flex;
text-align: -webkit-center;
border-top: 2px solid rgba(0, 0, 0, .3);
.logo{
    width:100px; 
}
.logo a{
    width:100px;
}
.logo img{
    width:100px;
}
.copyright{
    text-align:center;
}
.copyright p{
    font-weight:bold;
    position:relative;
    left:20%;
    font-size:9px;
}

}
`;
export default FooterComponent;