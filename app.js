import React from "react";
import "./app.css";
import Eightball from "./eightball";

/** Show magic eight ball */
function app() {
    return (
      <div className="app">
        <Eightball />
      </div>
    );
    
}

export default app;