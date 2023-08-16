import React from "react";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="Add">
      <React.StrictMode>
        <div className="wrapper">

          <main className="main">
            <Routing />
          </main>
          
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;
