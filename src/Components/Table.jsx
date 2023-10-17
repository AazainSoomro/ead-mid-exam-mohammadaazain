import React, { useState } from "react";
import sampleData from "../Data";
import Search from "./Search";
import ShowData from "./ShowData";

function Table() {
  const [Data, setData] = useState(sampleData);
  return (
    <div>
      <Search Data={Data} />
      <ShowData Data={Data} />
    </div>
  );
}

export default Table;
