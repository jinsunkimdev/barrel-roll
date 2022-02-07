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
  console.log(cocktail);
  //Testing for absolut API
  const [absolut, setAbsolut] = useState([]);
  const getAbsolut = async () => {
    const json = await (
      await fetch(`${process.env.REACT_APP_COCKTAIL_ABSOLUTE}`)
    ).json();
    setAbsolut(json.result);
  };
  useEffect(() => {
    getAbsolut();
    setLoading(false);
  }, []);
  console.log(absolut);
  return (
    <div className="font-burtons text-comfort-green">
      <HeaderNav />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="">
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
          {absolut.map((absolut) => (
            <div key={absolut.id}>
              <div className="flex flex-col">
                <img className="w-52" src={absolut.images[0].uri} alt="" />
                <h1 className="text-2xl text-comfort-yellow">{absolut.name}</h1>
                <ul>
                  <li>AbsolutDrink Rating {absolut.rating}</li>
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
