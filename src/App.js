import React from "react";

import InputFields from "./components/InputFields";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <center>
        <h1>To Do list</h1>
        <InputFields />
        <Table />
      </center>
    </div>
  );
};

export default App;
