import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Works from "./Pages/Works";
import Categories from "./Pages/Categories";
import Letter from "./Pages/Letter";
import Courses from "./Pages/Courses";
import Review from "./Pages/Review";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Categories />
        <Works />
        <Courses />
        <Review />
        <Letter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
