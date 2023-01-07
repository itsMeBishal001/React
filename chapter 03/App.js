import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading1=React.createElement(
//     "h1",{
//         key:"h1",
//         id:"h1"
//     },"this is h1"
// );

// using jsx
const heading1 =<h1 key="h1" id ="h1">this is h1</h1>;

// const heading2=React.createElement(
//     "h2",{
//         key:"h2",
//         id:"h2"
//     },"this is h2"
// );

// using jsx
const heading2 =<h2 key="h2" id ="h2">this is h2</h2>;

// const heading3=React.createElement(
//     "h3",{
//         key:"h3",
//         id:"h3"
//     },"this is h3"
// );

// using jsx
const heading3 =<h3 key="h3" id ="h3">this is h3</h3>;

// const header=React.createElement(
//     "div",{
//         key:"headings",
//         id:"h",
//         className:"title"
//     },[heading1,heading2,heading3]
// );

// using jsx
const header=<div key="headings" id="h" className="title">
    {heading1}
    {heading2}
    {heading3}
</div>

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(header);
