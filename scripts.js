const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello from react"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// Nested HTML structure Create the above using REACT

{
  /* <div id="parent">
    <div id="child">
        <h1>nested</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "nested")
  )
);
console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

{
  /* <div id="parent">
      <div id="child">
          <h1>nested</h1>
          <h2>nested sibling <h2>
      </div>
  </div> */
}

const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im a h1 tag"),
    React.createElement("h2", {}, "im a h2 tag sibling"),
  ])
);
console.log(parent);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent2);

{
  /* <div id="parent">
      <div id="child">
          <h1>im h1 tag of p3</h1>
          <h2>im h2 tag of p3<h2>
      </div>
      <div id="child">
         <h1>im h1 tag of p3</h1>
          <h2>im h2 tag of p3<h2>
      </div>
  </div> */
}

const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im h1 tag of p3"),
    React.createElement("h2", {}, "im h2 tag of p3"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im h1 tag of p3"),
    React.createElement("h2", {}, "im h2 tag of p3"),
  ]),
]);

console.log(parent3);
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(parent3)