import React, { useState } from "react";
import ShowData from "./ShowData";

function Search({ Data }) {
  const [SearchNameValue, setSearchNameValue] = useState();
  const [SearchAgeValue, setSearchAgeValue] = useState();
  const [SearchedNameResult, setSearchedNameResult] = useState([]);
  const [SearchedAgeResult, setSearchedAgeResult] = useState([]);
  const [SearchOccupationValue, setSearchOccupationValue] = useState();
  const [SearchCityValue, setSearchCityValue] = useState();

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
          user.age === parseInt(SearchAgeValue) &&
          user.occupation === SearchOccupationValue &&
          user.city === SearchCityValue
      )
    );
    setSearchedAgeResult(
      Data.filter((user) => user.age === parseInt(SearchAgeValue))
    );
  };

  const HandleOccupationSelect = (e) => {
    setSearchOccupationValue(e.target.value);
  };
  const HandleCitySelect = (e) => {
    setSearchCityValue(e.target.value);
  };
  return (
    <div>
      <div className="flex space-x-4 text-teal-950 justify-center p-10">
        <input placeholder="Enter Name..." onChange={HandleNameInputChange} />
        <input placeholder="Enter Age..." onChange={HandleAgeInputChange} />
        <div>
          <select onClick={HandleOccupationSelect} className="text-teal-950">
            {Data.map((user) => (
              <option value={user.occupation}>{user.occupation}</option>
            ))}
            <br />
          </select>
        </div>
        <div>
          <select onClick={HandleCitySelect} className="text-teal-950">
            {Data.map((user) => (
              <option value={user.city}>{user.city}</option>
            ))}
            <br />
          </select>
        </div>
        <div>
          <button
            className="bg-teal-600 text-white px-4 rounded-xl"
            onClick={HandleSearchButton}
          >
            Search
          </button>
        </div>
      </div>
      <h1 className="text-white text-3xl font-bold uppercase text-center py-6">
        Results
      </h1>
      <ShowData Data={SearchedNameResult} />
    </div>
  );
}

export default Search;
