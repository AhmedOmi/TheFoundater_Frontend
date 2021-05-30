import styled from 'styled-components'


const SubDiv = styled.div`
margin-left: 50px;
.field{
    display: flex;
}
.wrapper{
  height: 60px;
  width: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
}
.wrapper .btn-1{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 70%;
    width: 50%;
    color: #fff;
    background: black;
    font-size: 13px;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    transition: 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
    }
.wrapper .btn-1:active{
  transform: scale(0.9);
}
#click:checked ~ .btn-1{
  height: 40px;
  width: 100px;
  opacity: 0;
  pointer-events: none;
}
.wrapper .field{
  height: auto;
  width: auto;
  opacity: 0;
  pointer-events: none;
  position: relative;
  transition: 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
}
#click:checked ~ .field{
    width: 300px;
    opacity: 1;
    pointer-events: auto;
}

.wrapper .field .inputEmail{
  background: #f8f3eb;
  height: 100%;
  font-size: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
}
.wrapper .field input::placeholder{
  color: #999;
  font-size: 15px;
}
.wrapper .field .btn-2{
    position: absolute;
    top: 60%;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  line-height: 40px;
  background: black;
  height: 40px;
  width: 50px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}
.wrapper .field .btn-2:active{
  transform: translateY(-50%) scale(0.9);
}
.wrapper #click{
  display: none;
}
.text-danger{
    font-size:14px;
    font-weight:bold;
    font-family: 'Ubuntu', sans-serif;
}
`;
export default SubDiv;