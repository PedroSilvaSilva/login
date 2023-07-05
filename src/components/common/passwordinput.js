import React, { useState } from "react";
import {
  PasswordinputWrapper,
  PasswordInpytStyled,
  ToggleButton,
} from "../common/passwordinput.style";

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordinputWrapper>
        <PasswordInpytStyled {...props} />
        <ToggleButton onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordinputWrapper>

      <div>{showPassword ? props.value : ""}</div>
    </>
  );
}
