import React, { useState } from "react";
import ShowData from "./ShowData";

function Search({ Data }) {
  const [SearchNameValue, setSearchNameValue] = useState();
  const [SearchAgeValue, setSearchAgeValue] = useState();
  const [SearchedNameResult, setSearchedNameResult] = useState([]);
  const [SearchedAgeResult, setSearchedAgeResult] = useState([]);

  const HandleNameInputChange = (e) => {
    setSearchNameValue(e.target.value);
  };
  const HandleAgeInputChange = (e) => {
    setSearchAgeValue(e.target.value);
  };

  const HandleSearchButton = () => {
    setSearchedNameResult(
      Data.filter(
        (user) =>
          user.name.includes(SearchNameValue) &&
          user.age === parseInt(SearchAgeValue)
      )
    );
    setSearchedAgeResult(
      Data.filter((user) => user.age === parseInt(SearchAgeValue))
    );
  };
  return (
    <div>
      <div className="flex">
        <input placeholder="Enter Name..." onChange={HandleNameInputChange} />
        <input placeholder="Enter Age..." onChange={HandleAgeInputChange} />
        <div>
          <button
            className="bg-teal-600 text-black"
            onClick={HandleSearchButton}
          >
            Search
          </button>
        </div>
      </div>
      <ShowData Data={SearchedNameResult} />
    </div>
  );
}

export default Search;
