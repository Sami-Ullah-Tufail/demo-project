import Navnavbar from "./components/Navbar";
import Herosection from "./components/herosection";
import Divfilterwrapper from "./components/divrappr";
import SideBar from "./components/sidbar";
import Cards from "./components/cards";

export default function Home() {
  return (
  <>
  <Navnavbar />
  <Herosection />
  <Divfilterwrapper />
  <div className=" flex flex-row content-between mt-10">
    <SideBar />
    <Cards />
    <Cards />
  </div>
  </>
  );
}
