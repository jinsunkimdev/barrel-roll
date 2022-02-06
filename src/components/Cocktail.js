import PropTypes from "prop-types";
const Cocktail = ({ drinkId, drinkThumb, drinkName, alcoholic, category }) => {
  return (
    <div key={drinkId}>
      <div className="flex flex-col">
        <img src={drinkThumb} className="w-52" alt={drinkName} />
        <h1 className="text-2xl text-comfort-orange">{drinkName}</h1>
        <ul>
          <li>{alcoholic}</li>
          <li>{category}</li>
        </ul>
      </div>
    </div>
  );
};

Cocktail.propTypes = {
  drinkThumb: PropTypes.string.isRequired,
  drinkName: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Cocktail;
