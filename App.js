import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h2>Akshay Saini Namaste Javascript</h2>;
};

//This is componenent composition
const HeadingComponent = () => {
  return (
    <div className="container">
        <Title/>
      <h2>Namaste Javascript and react is a great course</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);
