import React from "react";
import ReactDOM from "react-dom/client";
/*
Create React element using core react: -
const element=React.createElemet("html tag", {props/attributes for that html tag}, "child /value for that html element"/Array of children ); 
element returned is a react.element = JS Object with props> (attributes and children)
Can be Nested+ Have Siblings
*/
/*
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "happy" },
  "Value For HTML Element"
);
*/

//Using JSX: -
const jsx_heading = <h1 id="heading">Value For HTML Element</h1>;

/*Nesting example: -
<div id="parent">
  <div id="child">
    Hello from Child
  </div>
</div>
*/
/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, "Hello from Child.")
);
*/

/*
Siblings example: -
<div id="parent_sibling">
  <div id="child">
    <h1>from h1</h1>
    <h2>from h2</h2>
  </div>
</div>
*/
/*
const parent_siblings = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "from h1"),
    React.createElement("h2", {}, "from h2"),
  ])
);
*/
/*
React only works at the root(could be minimal part of your project)
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
html_element_id.render(react_elememt_js_object)
.render() converts react_elememt_js_object to HTML code and place wi html_element_id
*/
// root.render(heading);
// root.render(parent);
// root.render(parent_siblings);
root.render(jsx_heading);
