import React from "react";
import ReactDOM from "react-dom/client";

/*
React only works at the root(could be minimal part of your project)
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

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

//Using JSX: - Parcel uses Babel package to transpile JSX before sent to js engine
/*
const jsxHeading = (
  <h1 id="heading" className="headClass">
    Value For HTML Element
  </h1>
);
*/

/*Functional Component (JS Fn that returns a JSX code which Babel transpiles to React Element) */
/*
const ReactFunctionalComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">
        This is JSX Code from React Functional component.
      </h1>
    </div>
  );
};
*/

/* Component Composition */
const Title = () => {
  return <h1>This is Title Component.</h1>;
};
const Content = () => {
  return (
    <div>
      Hi, <strong>{prompt("Whats your name?", "DefaultUserName")}</strong> This
      is Content Component.
    </div>
  );
};
const Footer = () => {
  return <h1>This is Footer Component.</h1>;
};
const ComponentComposition = () => {
  return (
    <div
      id="conta
    iner"
    >
      <Title />
      <Content />
      <Footer />
    </div>
  );
};

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
html_element_id.render(react_elememt_js_object)
.render() converts react_elememt_js_object to HTML code and place wi html_element_id
*/
// root.render(heading);
// root.render(parent);
// root.render(parent_siblings);

//Rendering a React Element: -
// root.render(jsxHeading);

//Rendering a React Component: -
// root.render(<ReactFunctionalComponent />);

//Rendering a React Component Composition: -
root.render(<ComponentComposition />);
