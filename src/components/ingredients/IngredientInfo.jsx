import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button";

// strMeal, strCategory, strArea, strInstructions, strMealThumb, strIngredient1(2, 3, ... 20), strMeasure1(2, 3, .... 20)

const IngredientInfo = () => {
  const { id } = useParams();

  const [info, setInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      ).then((res) => res.json());
      setInfo(res.meals[0]);
    };
    getInfo();
  }, [id]);

  const { strMeal, strArea, strInstructions, strMealThumb } = info;

  const ingredients = [];

  for (let i in info) {
    let count = 1;
    if (i.startsWith("strIngredient") && info[i]) {
      let ingredient = info[i];
      let measure = info[`strMeasure` + count];
      count += 1;
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  
  const BackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="space-y-10">
      <Button onClick={BackHandler}>Back</Button>

      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-9xl sm:text-5xl font-medium">{strMeal}</h2>
        <p className="text-lg sm:text-3xl">{strArea}</p>
      </div>

      <div className="md:flex md:items-center md:justify-between block md:gap-32 space-y-10">
        <img alt="" src={strMealThumb} className="rounded-lg md:w-[600px] w-[400px] mx-auto" />
        <p className="md:text-2xl text-lg font-light">{strInstructions}</p>
      </div>

      <div className="md:flex md:flex-col md:items-center block">
        <h3 className="font-medium text-5xl mb-10">Ingredients</h3>
        {ingredients.map((item) => (
          <ul key={item} className="mb-5 text-2xl">
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default IngredientInfo;
