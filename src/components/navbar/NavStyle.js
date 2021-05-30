import styled from "styled-components";

const NavStyle = styled.div`
height:300px;
width: 300px;
background-color:black;
position: absolute;
right: 100px;
top: 200px;
display: flex;
justify-content: center;
align-items: center;
text-align:center;

ul{
    list-style:none;
    padding:10px;
    height:auto;
}
li{
    padding-bottom:20px;
}
a{
    text-decoration:none;
    color:white;
    font-weight:bold;
}
@media screen and (max-width: 1000px) {
width:100%;
background-color:black;
position: fixed;
right: 0px;
top: 50px;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
    }
`;

export default NavStyle;