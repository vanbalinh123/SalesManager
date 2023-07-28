import { styled } from "styled-components";

export const LayoutAddProduct = styled.div`
    width: 60%;
    height: 80%;
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
    font-size:20px;
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
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const DivInput = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
`;

export const SpanNameInput = styled.span`
    flex: 1;
`;

export const InputAdd = styled.input`
    flex: 4;
    height: 40px;
    border: none;
    border-radius: 7px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 1px 2px;
    transition: all 0.3s;
    color: #696969;
`;

export const SelectProductsGroup = styled.select`
    flex: 4;
    height: 40px;
    border: none;
    border-radius: 7px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 1px 2px;
    transition: all 0.3s;
    color: #696969;
`;

export const Option = styled.option`
    
`;

export const DivDescribeInput = styled.div`
    width: 100%;
    flex: 2;
    display: flex;
    align-items: center;
    height: 100%;
`;

export const InputDescribeAdd = styled.textarea`
    flex: 4;
    height: 100%;
    border: none;
    border-radius: 7px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 1px 2px;
    transition: all 0.3s;
    color: #696969;    
`;

//right layout
export const RightLayoutAdd = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;

export const TwoDivInput = styled.div`
    flex: 2;
    display: flex; 
    flex-direction: column;
`

export const DivInputRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const SpanNameInputRight = styled.span`
    flex: 1;
`;

export const InputAddRight = styled.input`
    flex: 4;
    height: 40px;
    border: none;
    border-radius: 7px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 1px 2px;
    transition: all 0.3s;
    color: #696969; 
`;

export const DivImagesAdd = styled.div`
    flex: 4;
    display: flex;
`

export const InputFile = styled.input`
    display: none;
`;

export const DivLabelImg = styled.div`
    flex: 1;
    display: flex;
    gap: 20px;
`;


export const LabelFile = styled.label`
    cursor: pointer;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #F5F5F5;
    box-shadow: grey 0px 2px 6px;
    transition: all 0.3s;
    color: #696969;
    

    &:hover{
        cursor: pointer;
        opacity: 0.8;
        box-shadow: grey 0px 1px 1px;
    }
`;

export const ImgAdd = styled.img`
    width: 250px;
    height: 300px;
    // object-fit: cover;
    object-fit: contain;
    border-radius: 7px;
    box-shadow: grey 0px 3px 8px;
`;

export const DivButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const Button = styled.button`
    flex:1 ;
    height: 50px;
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


