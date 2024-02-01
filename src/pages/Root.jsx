import { Outlet } from "react-router-dom";
import TheHeader from "../components/TheHeader";

const Root = () => {
  return (
    <>
      <TheHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
