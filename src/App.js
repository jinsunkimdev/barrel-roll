import "./style.css";
import LogoImg from "./images/Barrel-Roll-Logo-removebg.png";
import MainImg from "./images/cocktail-orange.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between text-2xl text-center font-burtons text-nav-font">
      <div>
        <img src={LogoImg} alt="main logo" className="w-3/12" />
      </div>
      <Navigation />
    </header>
  );
};
const Navigation = () => {
  return (
    <nav className="h-1/6">
      <ul className="flex">
        <li className="mr-9 hover:underline underline-offset-8">
          <a>Home</a>
        </li>
        <li className="mr-9 hover:underline underline-offset-8">
          <a>Search</a>
        </li>
        <li className="mr-9 hover:underline underline-offset-8">
          <a>Contact</a>
        </li>
        <li className="mr-6 hover:underline underline-offset-8">
          <a>More</a>
        </li>
      </ul>
    </nav>
  );
};
const Maincontainer = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center h-5/6">
      <h3 className=" mb-6 text-3xl text-center font-burtons text-pure-white">
        With us, you can find your favourite
      </h3>
      <h1 className=" font-burtons text-center text-9xl text-comfort-orange">
        COCKTAIL
      </h1>
      <p className="mb-4 w-3/6 text-center font-burtons2 text-pure-white">
        shot aberlour gummy and coke snowball aberfeldy harvey wallbanger. Oban
        four horsemen critty bo old rip van winkle negroni, bloody aztec, crown
        royal paradise champagne cocktail.ro rojo.
      </p>
      <button className="px-4 py-2 text-3xl font-bold text-black rounded-full bg-pure-white font-burtons2">
        Get Started
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="relative h-screen bg-[url('./images/bar-498420_1920.jpeg')] bg-cover bg-center bg-no-repeat App">
      <Header />
      <Maincontainer />
    </div>
  );
}

export default App;
