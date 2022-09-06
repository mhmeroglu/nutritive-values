import FoodDetails from "./components/FoodDetails";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details" element={<FoodDetails/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
