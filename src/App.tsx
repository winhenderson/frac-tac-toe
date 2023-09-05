import React from "react";
import Board from "./components/Board";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="m-auto">
        <Board />
      </div>
    </div>
  );
};

export default App;
