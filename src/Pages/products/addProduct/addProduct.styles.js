import { styled } from "styled-components";

export const LayoutAddProduct = styled.div`
  width: 80%;
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

export const FormAdd = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleLayoutAdd = styled.span`
  padding: 38px;
  font-size: 20px;
  font-weight: bold;
`;

export const MainLayoutAdd = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  margin-bottom: 40px;
  gap: 5%;
`;

//left layout
export const LeftLayoutAdd = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DivInput = styled.div`
  width: 100%;
  /* height: 100%; */
  /* flex: 1; */
  display: flex;
  align-items: center;
  height: 100px;
  position: relative;
`;

export const SpanNameInput = styled.span`
  flex: 1;

  &::after {
    content: "*";
    color: red;
    padding-left: 10px;
  }
`;

export const InputAdd = styled.input`
  flex: 3;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 7px;
  background-color: #f5f5f5;
  box-shadow: grey 0px 1px 2px;
  transition: all 0.3s;
  color: #696969;
`;

export const SelectProductsGroup = styled.select`
  flex: 3;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 7px;
  background-color: #f5f5f5;
  box-shadow: grey 0px 1px 2px;
  transition: all 0.3s;
  color: #696969;
`;

export const Option = styled.option``;

export const DivDescribeInput = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  padding-top: 40px;
  gap: 10px;
  position: relative;
  padding-bottom: 30px;
`;

export const InputDescribeAdd = styled.textarea`
  flex: 3;
  min-height: 260px;
  border: none;
  border-radius: 7px;
  background-color: #f5f5f5;
  box-shadow: grey 0px 1px 2px;
  transition: all 0.3s;
  color: #696969;
`;

//right layout
export const RightLayoutAdd = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const FourDivInput = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DivInputRight = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  height: 100px;
  position: relative;
`;

export const SpanNameInputRight = styled.span`
  flex: 1;

  &::after {
    content: "*";
    color: red;
    padding-left: 10px;
  }
`;

export const InputAddRight = styled.input`
  flex: 3;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 7px;
  background-color: #f5f5f5;
  box-shadow: grey 0px 1px 2px;
  transition: all 0.3s;
  color: #696969;
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Button = styled.button`
  flex: 1;
  height: 50px;
  border: none;
  border-radius: 7px;
  background-color: #f5f5f5;
  box-shadow: grey 0px 2px 6px;
  transition: all 0.3s;
  color: #696969;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    box-shadow: grey 0px 1px 1px;
  }
`;

//img

export const DivImg = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;

export const Box = styled.div`
  width: 400px;
  height: 460px;
  border-radius: 10px;
  box-shadow: grey 0px 2px 6px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* box-shadow: grey 0px 2px 6px; */

`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: red;
  font-style: italic;
`;

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
