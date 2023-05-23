import { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const queryHandler = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form className="flex justify-center py-1" onSubmit={queryHandler}>
        <input
          className="bg-slate-700 h-8 w-2/6"
          type="text"
          value={search}
          onChange={searchHandler}
        />
        <button
          className="rounded-md text-white ml-1 h-8 w-20 bg-slate-900"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-around">
        {recipes.map((recipe, key) => {
          return (
            <Recipe
              key={key}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
