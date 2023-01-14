import Header from "../components/Header";
import Footer from "../components/Footer";
import Ingredients from "../components/ingredients/Ingredients";
import SearchField from "../components/SearchField";

const Landing = ({ changeValue, recieps, userInput }) => {
  return (
    <div>
      <Header />
      <SearchField onChanging={changeValue} />
      <Ingredients
        recieps={recieps}
        category={
          userInput &&
          userInput[0].toUpperCase() + userInput.toLowerCase().slice(1)
        }
      />
      <Footer />
    </div>
  );
};

export default Landing;
