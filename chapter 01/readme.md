# What is Emmet?

Emmet is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.

Emmet — the essential toolkit for web-developers · HTML from CSS · Dynamic snippets · Ultra-fast coding · Customizable · Platform for new tools · Highly portable.

# Difference between a Library and Framework?
## Library 
a library is not an independently executable unit, but an additional module that is requested by a programme.

libraries are collections of classes and functions, which is why they are sometimes also called component or class libraries. With the help of a programme interface (API / Application Programming Interface), access to the necessary functions from the library is made possible. However, access is only limited to the “public” functions; libraries also have “private” functions that work in the background but remain hidden from the outside world.
## Framework
You can think of a software development framework like the basic structure of a house including the support pillars and beams as well as central electrics and plumbing infrastructure.

The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. 

# What is CDN? Why do we use it?

content delivery network

A large portion of all internet content is delivered through CDNs. Here is a simple example:

If you were in New York and wanted to view the website of your favorite store in London that’s hosted on a server in the UK, you would experience slow content load times if the request had to travel all the way across the Atlantic Ocean. To remedy this, a CDN would store a cached version of the London website content in multiple geographical locations around the world, also called “points of presence” (PoPs). These PoPs contain their own caching servers and are responsible for delivering that content close to where you’re located in New York.

Content delivered from a server closest to your physical location gives you a faster, high-performance web experience.

# Why is React known as React?

React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.

The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

React was developed by Facebook and released in 2013, and it has since become one of the most popular JavaScript libraries for building web and mobile applications. It is used by many companies and organizations around the world, and it has a large and active developer community.

# What is crossorigin in script tag?

The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.

CORS: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information. 

Values: This attribute contains two values which are given below –

anonymous: It has a default value. It defines a CORS request which will be sent without passing the credential information.
use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.
 

Example: Below code demonstrates the use of crossorigin attribute in a <script> element.

# diference between React and ReactDOM

React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser

To build more environments that React can render to, React team planned to split the main React package into two: react and react-dom . This paves the way to writing components that can be shared between the web version of React and React Native.

React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.

# What is difference between react.development.js and react.production.js files via CDN?

# What is async and defer?

async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.

If async is present: The script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes) If defer is present (and not async ): The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.

The browser has to download and process the content of the script tag before rendering the rest of the web page. async and defer attributes help to reduce delays when executing code in the script tag. These elements are essential in improving web page performance. They facilitate an enhanced user experience

# arrow function

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.

param => expression

(param) => expression

(param1, paramN) => expression

param => {
  statements
}

(param1, paramN) => {
  statements
}
//////////////////

(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression
////////
// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;