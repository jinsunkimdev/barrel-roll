import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const getCocktails = async () => {
    const json = await (
      await fetch(`${process.env.REACT_APP_COCKTAIL_SEARCH_BY_ID}${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getCocktails();
  }, []);
  return <h1>Detail Page</h1>;
};

export default Detail;
