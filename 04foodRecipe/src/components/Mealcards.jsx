import React from "react";
import { NavLink } from "react-router-dom";

function Mealcards({ detail }) {
  return (
    <div className="meals">
      {!detail
        ? "Data Not Found"
        : detail.map((curItem) => {
            return (
              <div className="mealImg">
                <img src={curItem.strMealThumb} />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}

export default Mealcards;
