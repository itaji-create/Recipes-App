import { ingredients, measures } from '../services/ingredientsMeasure';

function IngredientsTable(props) {
  const { details } = props;
  return (
    <div className="container mt-5 mb-5">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <h5 className="col">
              Ingredient
            </h5>
            <h5 className="col">
              Quantity
            </h5>
          </div>
        </li>
        {ingredients(details).map((ingredient, i) => (
          details[ingredient] && (
            <li
              key={ ingredient }
              data-testid={ `${i}-ingredient-name-and-measure` }
              className="list-group-item"
            >
              <div className="row">
                <div className="col">
                  { details[ingredient] }
                </div>
                <div className="col">
                  { details[measures(details)[i]] }
                </div>
              </div>
            </li>
            )
        ))}
      </ul>
    </div>
  )    
}

export default IngredientsTable;
