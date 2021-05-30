import styled from "styled-components";

const HeaderComponent = styled.div `
width:100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
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
p{
    font-size:12px;
    font-weight:bold;
    position:relative;
    right:50px;
}
@media screen and (max-width: 1000px) {
width:100%;
display: flex;
padding:0;
margin:0;
justify-content: center;
align-items: center;
.logo{
    min-width:100px;

}
.logo a{
    min-width:100px;
}
.logo img{
    min-width:100px;
}
p{
    font-size:12px;
    font-weight:bold;
    position:relative;
    right:50px;
}
.Navbar{
    position: relative;
    right: 20px;
}
.info_header{
    display:none;
}
}
`;
export default HeaderComponent;