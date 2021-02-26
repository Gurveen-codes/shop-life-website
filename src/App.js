import React from "react";
import "./App.css";
import Download from "./components/Download";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <Download></Download>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
