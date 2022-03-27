import styled from "styled-components";
import { FlexContainer } from "../../components/globalStyles/GlobalStyles";

export const HeaderContainer = styled(FlexContainer)`
  background-color: #00adb5;
  flex-direction: column;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

export const Button = styled.button`
  background-color: #e1f1dd;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: #00adb5;
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;

export const MainContainer = styled(FlexContainer)`
  flex-direction: row;
  background-color: #00adb5;
`;

export const RecipeCard = styled(FlexContainer)`
  flex-direction: column;
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  margin: 10px;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const RecipeImage = styled.img`
  height: 150px;
  border-radius: 10px;
`;

export const ButtonDetails = styled.button`
  background-color: #00adb5;
  padding: 5px;
  outline: none;
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;