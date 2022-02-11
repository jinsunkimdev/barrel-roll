import React from "react";
import "../style.css";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { HeaderNav } from "../components/Navbar";

const Maincontainer = () => {
  return (
    <MaincontainerDiv>
      <MainTitle>With us, you can find your favourite</MainTitle>
      <MainWord>COCKTAIL</MainWord>
      <MainPhrase>
        shot aberlour gummy and coke snowball aberfeldy harvey wallbanger. Oban
        four horsemen critty bo old rip van winkle negroni, bloody aztec, crown
        royal paradise champagne cocktail.ro rojo.
      </MainPhrase>
      <Link to="/search">
        <MainButton>Get Started</MainButton>
      </Link>
    </MaincontainerDiv>
  );
};

const Home = () => {
  return (
    <HomeContainer>
      <HeaderNav />
      <Maincontainer />
    </HomeContainer>
  );
};

//styled components
const MaincontainerDiv = tw.div`
flex
flex-col
items-center
content-center
justify-center
h-5/6
`;
const MainTitle = tw.h3`
mb-3
text-3xl
text-center
cursor-default
font-burtons
text-pure-white
`;
const MainWord = tw.h1`
font-bold
text-center
cursor-default
font-burtons
text-9xl
text-comfort-orange
`;
const MainPhrase = tw.p`
w-3/6
mb-4
text-center
cursor-default
font-burtons2
text-pure-white
`;
const MainButton = tw.button`
px-4
py-2
text-3xl
font-bold
text-black
rounded-full
bg-pure-white
font-burtons2
opacity-60
ease-in
duration-200
hover:opacity-100
`;
const HomeContainer = tw.div`
relative
h-screen
bg-[url('./images/bar-498420_1920.jpeg')]
bg-cover
bg-center
bg-no-repeat 
`;
export default Home;
