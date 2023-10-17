import React, { useState } from "react";
import sampleData from "../Data";

function Table() {
  const [Data, setData] = useState(sampleData);
  return (
    <div>
      <div className="grid grid-cols-4 font-bold font-3xl uppercase">
        <p>name</p>
        <p>age</p>
        <p>city</p>
        <p>occupation</p>
        <br />
      </div>
      {Data.map((user) => (
        <div className="grid grid-cols-4">
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.city}</p>
          <p>{user.occupation}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Table;
