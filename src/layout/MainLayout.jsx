//rr-dom imports
import { Outlet } from "react-router-dom";

//components
import { Navbar } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
    </>
  );
}

export default MainLayout;
