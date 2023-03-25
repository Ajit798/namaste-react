const heading = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "1" }, "Hello Ajit"),
    React.createElement("h1", { id: "2" }, "Hello Prince"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
