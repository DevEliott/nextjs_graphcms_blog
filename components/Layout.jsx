import { Fragment } from "react";
import { Header } from "./";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      { children}
    </Fragment>
  );
}
