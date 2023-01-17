import { useEffect, useState, memo } from "react";
import { Routes, Route } from "react-router-dom";
import IngredientInfo from "./components/ingredients/IngredientInfo";
import Landing from "./components/Landing";

function App() {
  const [userInput, setUserInput] = useState("");
  const [recieps, setRecieps] = useState([]);

  const changeValue = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
      ).then((res) => res.json());

      setRecieps(res.meals);
    };
    getData();
  }, [userInput]);

  if (!recieps) setRecieps([]);

  if (!userInput) setUserInput("Choose Category");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              changeValue={changeValue}
              recieps={recieps}
              userInput={userInput}
            />
          }
        />
        <Route path="/:id" element={<IngredientInfo recieps={recieps} />} />
      </Routes>
    </div>
  );
}

export default memo(App);
