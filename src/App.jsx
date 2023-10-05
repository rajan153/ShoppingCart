import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
