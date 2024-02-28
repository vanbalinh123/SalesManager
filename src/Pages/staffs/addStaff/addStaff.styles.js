import { styled, css } from "styled-components";


export const LayoutAddUpdate = styled.div`
    width: 60%;
    height: 90%;
    background-color: #ffffff;
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 7px;
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 20px 1px grey;
    color: #696969;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TitleLayout = styled.span`
    padding: 35px;
    font-size: 25px;
    font-weight: bold;
`;

export const MainLayout = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 100%;
    margin-bottom: 40px;
`;

//left layout
export const LeftLayout = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const DivImg = styled.div`
    width: 250px;
    /* height: 250px;
    border-radius: 250px; */
    overflow: hidden;
    box-shadow: grey 0px 0px 10px 2px;
    margin-top: 20px;
    border-radius: 10px;
    /* margin: 0 auto; */
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    object-fit: contain;
`;

//right layout
export const RightLayout = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const DivInputs = styled.div`
    flex: 8;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const DivInput = styled.div`
    display: flex;
    gap: 10px;
    flex: 1;
    align-items: center;
    position: relative;
`;

export const SpanNameInput = styled.span`
`;

export const InputAdd = styled.input`
    position: absolute;
    right: 0;
    padding: 10px 15px;
    width: 80%;
    border: none;
    border-radius: 10px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 1px 2px;
    color: #696969;
`;

export const DivSex = styled.div`
    position: absolute;
    right: 0;
    width: 80%;
    border: none;
    color: #696969;
    display: flex;
    gap: 20px;
`;

export const Div = styled.div`
    display: flex;
    //border: 1px solid red;
    justify-content: center;
    gap: 10px;
`;

export const InputSex = styled.input`

`;

export const DivBtns = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
`;

export const Button = styled.button`
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 7px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 2px 6px;
    transition: all 0.3s;
    color: #696969;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
        box-shadow: grey 0px 1px 1px;
    }
`


export const FileInput = styled.input`
  display: none;
`;

export const CustomButton = styled.label`
  /* padding: 10px 20px; */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-top: 30px;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  background-color: #f5f5f5;
  box-shadow: grey 0px 2px 6px;
  transition: all 0.3s;
  color: #696969;
  margin-left: 70px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    box-shadow: grey 0px 1px 1px;
  }


  &::after {
    content: "*";
    color: red;
    padding-left: 10px;
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: red;
  font-style: italic;
`;
