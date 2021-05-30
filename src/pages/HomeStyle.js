import styled from "styled-components";
export const LatestStyle = styled.div`
.latest{
    display: flex;
    justify-content: center;
    width:100%;
}
h1{
    border-bottom:1px solid black;
}
`;
export const StyledContent = styled.div`
height:auto;
width:auto;
margin:20px 100px;
display:flex;
h1{
    text-align: center;
}
h3{
    font-size:30px;
    font-family: 'Lobster', cursive;
}
article{
    width:80%;
    height:auto;
    display:flex;

}
.firstDiv{
    width:25%;
    height:auto;
    border-right: 2px solid rgba(0, 0, 0, .04);
    margin-right:10px;
}
.articleDiv{
    width:75%;
    height:auto;

}

p {
    margin-left:5px;
    margin-right:40px;
    color:black;
    font-size:16px;
    font-family: 'GFS Neohellenic', sans-serif;
}
img{
    width:90%;
    height:20%;
}
aside{
    width:25%;
    height:auto;
    border-left: 2px solid rgba(0, 0, 0, .04);
}
@media screen and (max-width: 992px) {
    width:100%;
    margin:0;
        display:block;
        article{
            width:100%;
            height:auto;
            display:block;
        }
        aside{
            width:100%;
            height:auto;
            border-left: none;
        }
        .firstDiv{
            width:100%;
            height:auto;
            border-right: none;
            margin-right:10px;
        }
        .articleDiv{
            width:100%;
            height:auto;
        
        }
  }
`;