import React from "react";
import Board from "./components/Game";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-zinc-200">
      <div className="m-auto">
        <Board />
      </div>
    </div>
  );
};

export default App;
