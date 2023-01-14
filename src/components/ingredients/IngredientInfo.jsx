import { useParams } from "react-router-dom";

const IngredientInfo = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default IngredientInfo;
