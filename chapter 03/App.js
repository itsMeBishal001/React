import React from "react";
import  ReactDOM  from "react-dom";

const heading1=React.createElement(
    "h1",{
        key:"h1",
        id:"h1"
    },"this is h1"
);

const heading2=React.createElement(
    "h2",{
        key:"h2",
        id:"h2"
    },"this is h2"
);

const heading3=React.createElement(
    "h3",{
        key:"h3",
        id:"h3"
    },"this is h3"
);
const header=React.createElement(
    "div",{
        key:"headings",
        id:"h",
        class:"title"
    },[heading1,heading2,heading3]
);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(header);
