import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Homepage from "./pages/homePage";
import "./assets/css/default.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
