import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SnackDetails from "./Components/SnackDetails";
import NewSnack from "./Components/NewSnack";
import Snacks from "./Components/Snacks";
import EditSnack from "./Components/EditSnack";




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          {/* <Route path="/" element={<Snacks/>} /> */}
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/snacks/new" element={<NewSnack />} />
          <Route path="/snacks/:id" element={<SnackDetails />} />
          <Route path="/snacks/:id/edit" element={<EditSnack />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
