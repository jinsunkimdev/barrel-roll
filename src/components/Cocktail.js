import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cocktail = ({
  id,
  drinkId,
  drinkThumb,
  drinkName,
  alcoholic,
  category,
}) => {
  return (
    <div key={drinkId} className="bg-white rounded-3xl">
      <div className="flex flex-col">
        <img src={drinkThumb} className="w-52" alt={drinkName} />
        <Link to={`/detail/${id}`} className="text-2xl text-pure-white">
          {drinkName}
        </Link>
        <ul>
          <li className="text-pure-white">{alcoholic}</li>
          <li className="text-pure-white">{category}</li>
        </ul>
      </div>
    </div>
  );
};

Cocktail.propTypes = {
  id: PropTypes.string.isRequired,
  drinkThumb: PropTypes.string.isRequired,
  drinkName: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Cocktail;
