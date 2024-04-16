import Navbar from "./Stay everywhere/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
