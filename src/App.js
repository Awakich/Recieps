import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Ingredients from "../src/components/ingredients/Ingredients";
import SearchField from "../src/components/SearchField";
import { useEffect, useState, memo } from "react";

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
      console.log(res.meals);
    };
    getData();
  }, [userInput]);

  if (!recieps) {
    setRecieps([]);
  }

  if (!userInput) {
    setUserInput("Choose Category");
  }

  return (
    <div>
      <Header />
      <SearchField onChanging={changeValue} />
      <Ingredients
        recieps={recieps}
        category={userInput && userInput[0].toUpperCase() + userInput.slice(1)}
      />
      <Footer />
    </div>
  );
}

export default memo(App);
