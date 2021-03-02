import React from "react";
import "./App.css";
import Download from "./components/Download/Download";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
// import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm/ContactForm";
import TrustUs from "./components/TrustUs/trust";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        {/* <Banner ></Banner> */}
        <Download></Download>
        <TrustUs></TrustUs>
        <ContactForm></ContactForm>

        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
