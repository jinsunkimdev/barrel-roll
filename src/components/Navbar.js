import React from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../images/Barrel-Roll-Logo-removebg.png";

//Header navigation bar component
const HeaderNav = () => {
  return (
    <Header>
      <div>
        <HeaderLogo src={LogoImg} alt="main logo"></HeaderLogo>
      </div>
      <nav className="h-1/6">
        <NavbarUl>
          <NavbarLi>
            <Link to="/">Home</Link>
          </NavbarLi>
          <NavbarLi>
            <Link to="/search">Search</Link>
          </NavbarLi>
          <NavbarLi>
            <Link to="/contact">Contact</Link>
          </NavbarLi>
          <NavbarLi>
            <Link to="/more">More</Link>
          </NavbarLi>
        </NavbarUl>
      </nav>
    </Header>
  );
};

//styled components
const NavbarUl = tw.ul`
flex 
opacity-70
hover:opacity-100
`;

const NavbarLi = tw.li`
border-b-4
border-transparent
cursor-pointer
mr-9
transition
duration-500
hover:border-pure-white
`;

const Header = tw.header`
flex
items-center
justify-between
text-2xl
text-center
font-burtons
text-nav-font 
`;

const HeaderLogo = tw.img`
w-3/12 cursor-pointer opacity-80 hover:opacity-100
`;

export { HeaderNav };
