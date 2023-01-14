import { memo } from "react";
import Ingredient from "../ingredients/Ingredient";

const Ingredients = ({ recieps, category }) => {
  return (
    <div>
      <h2 className="my-5 font-bold text-8xl">{category}</h2>
      <hr className="border-[1px] border-black" />
      <div className="grid grid-cols-6 gap-5">
        {recieps.map(({ idMeal, strMealThumb, strMeal }) => (
          <div key={idMeal} className="border-black mt-5">
            <Ingredient
              key={idMeal}
              id={idMeal}
              image={strMealThumb}
              title={strMeal}
            />
          </div>
        ))}
      </div>
      <hr className="border-[1px] border-black mt-5" />
    </div>
  );
};

export default memo(Ingredients);
