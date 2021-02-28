import React from "react";
import "./App.css";
import Download from "./components/Download";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        {/* <Banner ></Banner> */}
        <Download></Download>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
