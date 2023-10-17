import React, { useState } from "react";
import sampleData from "../Data";
import Search from "./Search";
import ShowData from "./ShowData";

function Table() {
  const [Data, setData] = useState(sampleData);
  return (
    <div>
      <Search Data={Data} />
      <h1 className="text-center p-8 text-white font-bold text-5xl">
        ALL DATA
      </h1>
      <ShowData Data={Data} />
    </div>
  );
}

export default Table;
