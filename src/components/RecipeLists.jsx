import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../service";
import Popup from "./Popup";
import "../styles/RecipeLists.scss";

function RecipeLists(props) {
  const [searchedTearm, setSearchedTearm] = useState("");
  const [query, setQuery] = useState("ice cream");
  const [data, setData] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const searchrecipe = (searchQuery) => {
    fetchData(searchQuery).then((response) => {
      setData(response);
      // console.log(response);
      props.setLoader(false);
    });
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      // console.log(response);
      props.setLoader(false);
    });
  }, []);

  const openPopup = (recipe) => {
    setSelectedRecipe(recipe);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedRecipe(null);
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearchedTearm(e.target.value)}
            value={searchedTearm}
            type="text"
            placeholder="Search your favourite recipe"
          />
          <button
            onClick={() => (searchrecipe(searchedTearm), props.setLoader(true))}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data?.hits?.map((item, index) => (
            <div
              key={index}
              className="flexItem"
              onClick={() => openPopup(item.recipe)}
            >
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
      {showPopup && selectedRecipe && (
        <Popup recipe={selectedRecipe} closePopup={closePopup} />
      )}
    </div>
  );
}

export default RecipeLists;
