import React from "react";
import "../App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import BackgroundImage from "./BackgroundImage";
import CardsBook from "./CardsBook";

function App() {
  return (
    <div className="w-100 h-100">
      <BackgroundImage />
      <CardsBook />
      <ToastContainer />
    </div>
  );
}

export default App;
