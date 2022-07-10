import { Navigation } from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Aside } from "./Aside/Aside";
export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Aside />
    </>
  );
};
