import React, { useEffect, useState } from "react";
import { HeaderNav } from "../components/Navbar";
import Cocktail from "../components/Cocktail";

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

  return (
    <div className="font-burtons text-comfort-green">
      <HeaderNav />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-4 bg-black gap-x-6 gap-y-6">
          {cocktail.map((cocktail) => (
            <Cocktail
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              drinkThumb={cocktail.strDrinkThumb}
              drinkName={cocktail.strDrink}
              alcoholic={cocktail.strAlcoholic}
              category={cocktail.strCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
