import "./style.css";
import LogoImg from "./images/Barrel-Roll-Logo-removebg.png";
import MainImg from "./images/cocktail-orange.png";
const Header = () => {
  return (
    <header className="flex justify-between  font-burtons text-2xl text-nav-font text-center items-center">
      <div>
        <img src={LogoImg} alt="main logo" className="w-2/12" />
      </div>
      <Navigation />
    </header>
  );
};
const Navigation = () => {
  return (
    <nav w-full>
      <ul className="flex">
        <li className="mr-9 hover:underline underline-offset-8">
          <a>Home</a>
        </li>
        <li className="mr-9 hover:underline underline-offset-8">
          <a>Destination</a>
        </li>
        <li className="mr-9 hover:underline underline-offset-8">
          <a>Crew</a>
        </li>
        <li className="mr-6 hover:underline underline-offset-8">
          <a>Technology</a>
        </li>
      </ul>
    </nav>
  );
};
const Maincontainer = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="absolute z-10">
        <h1 className="text-7xl font-burtons text-comfort-yellow">COCKTAIL</h1>
      </div>
      <div className="relative z-0 w-6/12">
        <img src={MainImg} alt="main-cocktail-img" className="" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Maincontainer />
    </div>
  );
}

export default App;
