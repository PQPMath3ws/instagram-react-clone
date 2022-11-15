import "./assets/css/reset.css";
import "./assets/css/global.css";

import Body from "./components/Body";
import MobileFooter from "./components/MobileFooter";
import Navbar from "./components/Navbar";

const App = () => (
    <>
        <Navbar></Navbar>
        <Body></Body>
        <MobileFooter></MobileFooter>
    </>
);

export default App;