import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import SnackDetails from "./Components/SnackDetails";
// import NewSnack from "./Components/NewSnack";
// import Snacks from "./Components/Snacks";
// import EditSnack from "./Components/EditSnack";

// PAGES
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Home from "./pages/Home";




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
