import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Popup({ recipe, closePopup }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="pop-left-col">
          <span className="pop-badge">
            {recipe.cuisineType[0].toUpperCase()}
          </span>
          <h1>{recipe.label}</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>{recipe.source}</small>
          </p>
          <h3>Ingredients</h3>
          <div className="pop-ingredients">
            <ul>
              {recipe.ingredientLines.map((list, index) => (
                <li key={index}>
                  <GiCheckMark size="18px" color="#6fcb9f" />
                  &nbsp;<span>{list}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="close-button" onClick={closePopup}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="pop-right-col">
          <div className="pop-image-wrapper">
            <img src={recipe.image} alt={recipe.label} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
