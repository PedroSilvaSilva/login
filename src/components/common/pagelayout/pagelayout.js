import React from "react";
import { Content } from "./pagelayout.style";
import { Header } from "../header/header";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
