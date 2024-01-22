import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Rootpage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
