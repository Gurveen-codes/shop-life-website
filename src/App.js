import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Download from "./components/Download/Download";
import Demo from "./components/Demo/Demo";
import TrustUs from "./components/TrustUs/trust";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <Banner></Banner>
        <Download></Download>
        <Demo></Demo>
        <TrustUs></TrustUs>
        <ContactForm></ContactForm>

        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
