import React from "react";

function Recipe(props) {
  return (
    <div className="flex flex-col justify-center items-center bg-white m-2 px-12 py-1 shadow-2xl shadow-slate-900 rounded-md">
      <h1 className="text-4xl">{props.title}</h1>
      <ol className="my-8">
        {props.ingredients.map((ingredient, key) => {
          return <li key={key}>{ingredient.text}</li>;
        })}
      </ol>
      <p className="mb-2">{props.calories}</p>
      <img className="w-2/6 rounded-full" src={props.image} alt={props.title} />
    </div>
  );
}

export default Recipe;
