import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderNav } from "../components/Navbar";
import ingredientsFilter from "../filter/ingredientsFilter";

const Detail = () => {
  const { id } = useParams();
  const [cocktail, setCocktails] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const getCocktails = async () => {
    //Get Clicked Cocktails info
    const json = await (
      await fetch(`${process.env.REACT_APP_COCKTAIL_SEARCH_BY_ID}${id}`)
    ).json();
    setCocktails(json.drinks[0]);
    //Get Clicked Cocktails Filtered Ingredients
    const ingredientsTest = ingredientsFilter(json.drinks[0]);
    setIngredients(ingredientsTest);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  return (
    <div className="">
      <HeaderNav />
      <h1 className="text-3xl">{cocktail.strDrink}</h1>
      <img className="w-3/12" src={cocktail.strDrinkThumb} alt="" />
      <ul className="text-2xl">
        <p>
          <strong>Ingredients:</strong>
        </p>
        {Object.keys(ingredients).map((key) => (
          <li key={key}>
            <em>{ingredients[key]}</em>
            {" of "}
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
