import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Fetching meals...</p>;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center" }}>
        <Error title="Failed to fetch meals" message={error} />
      </div>
    );
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
