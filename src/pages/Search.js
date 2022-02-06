import React, { useEffect, useState } from "react";
import { HeaderNav } from "../components/Navbar";
import axios from "axios";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktails] = useState([]);
  const getCocktails = async () => {
    const json = await (
      await fetch(`${process.env.REACT_APP_COCKTAIL_SEARCH_BY_NAME_KEY}`)
    ).json();
    setCocktails(json.drinks);
  };
  useEffect(() => {
    getCocktails();
    setLoading(false);
  }, []);
  console.log(cocktail);
  return (
    <div className="font-burtons text-comfort-green">
      <HeaderNav />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="">
          {cocktail.map((cocktail) => (
            <div key={cocktail.idDrink}>
              <div className="flex flex-col">
                <img src={cocktail.strDrinkThumb} className="w-52" alt="" />
                <h1 className="text-2xl text-comfort-orange">
                  {cocktail.strDrink}
                </h1>
                <ul>
                  <li>{cocktail.strAlcoholic}</li>
                  <li>{cocktail.strCategory}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
