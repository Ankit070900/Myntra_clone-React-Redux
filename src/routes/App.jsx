import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FatchItems from "../components/FatchItems";
import { useSelector } from "react-redux";
// import Loader from "../components/Loader";

function App() {
  const factchStatus = useSelector((store) => store.fatchStatus);
  return (
    <>
      <Header />
      <FatchItems />
      {/* {factchStatus.currentlyFatching ? <Loader /> : <Outlet />} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
