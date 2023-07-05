import React, { useState } from "react";
import { HeaderWrapper, Menu, StyleLink, MobileMenuIcon } from "./header.style";
import { useLocation } from "react-router-dom";
export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyleLink to="/" isActive={pathname === "/"}>
          Home
        </StyleLink>
        <StyleLink to="/Login" isActive={pathname === "/Login"}>
          Login
        </StyleLink>
      </Menu>
    </HeaderWrapper>
  );
}
