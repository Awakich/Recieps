import { memo } from "react";
import { Link } from "react-router-dom";
import Ingredient from "../ingredients/Ingredient";

const Ingredients = ({ recieps, category }) => {
  return (
    <div>
      <h2 className="my-5 font-bold text-6xl md:8xl">{category}</h2>
      <hr className="border-[1px] border-black" />
      <div className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5">
        {recieps.map(({ idMeal, strMealThumb, strMeal }) => (
          <Link to={`/${idMeal}`} key={idMeal} className="border-black mt-5">
            <Ingredient
              key={idMeal}
              id={idMeal}
              image={strMealThumb}
              title={strMeal}
            />
          </Link>
        ))}
      </div>
      <hr className="border-[1px] border-black mt-5" />
    </div>
  );
};

export default memo(Ingredients);
