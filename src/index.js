import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} color={"#fcc419"} size={48} />
    <StarRating
      maxRating={5}
      color={"#000"}
      messages={("Bad", "Ok", "Good", "Very God", "Excellent")}
    /> */}
  </React.StrictMode>
);
