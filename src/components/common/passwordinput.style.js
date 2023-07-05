import styled from "styled-components";
import { Input } from "./input";

const PasswordinputWrapper = styled.div`
  display: flex;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: bold;
  background: white;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const PasswordInpytStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export { PasswordinputWrapper, ToggleButton, PasswordInpytStyled };
