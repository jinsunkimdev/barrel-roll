import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { HeaderNav } from "../components/Navbar";

const Maincontainer = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center h-5/6">
      <h3 className="mb-3 text-3xl text-center cursor-default font-burtons text-pure-white">
        With us, you can find your favourite
      </h3>
      <h1 className="font-bold text-center cursor-default font-burtons text-9xl text-comfort-orange">
        COCKTAIL
      </h1>
      <p className="w-3/6 mb-4 text-center cursor-default font-burtons2 text-pure-white">
        shot aberlour gummy and coke snowball aberfeldy harvey wallbanger. Oban
        four horsemen critty bo old rip van winkle negroni, bloody aztec, crown
        royal paradise champagne cocktail.ro rojo.
      </p>
      <Link to="/search">
        <button className="px-4 py-2 text-3xl font-bold text-black rounded-full bg-pure-white font-burtons2 opacity-60 ease-in duration-200 hover:opacity-100">
          Get Started
        </button>
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative h-screen bg-[url('./images/bar-498420_1920.jpeg')] bg-cover bg-center bg-no-repeat App">
      <HeaderNav />
      <Maincontainer />
    </div>
  );
};

export default Home;
