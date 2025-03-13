react -> language X
react -> framework X
react -> technology X
react -> library
facebook engeneare -> 2013
2015 -> open source

jab website pr khoob sare change hota hai to khhob sare repaint hota hai wo element badle v nahi aur ye website 
ko slow down kar deta hai is cheej se bhi bachne ke liye facebook ne react creation kiya 

virtual dom sir wo part repaint re render karta hai jo change hua ho ya jaha par change karna anivaar ho 

to install vite -> npm create vite@latest
PS D:\FRONTEND\react> npm create vite@latest
Need to install the following packages: 
  create-vite@6.3.1
Ok to proceed? (y) y
│
◇  Project name:
│  vite-project
│
◆  Select a framework:
│  ● Vanilla
│  ○ Vue
│  ○ React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Others
└
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in D:\FRONTEND\react\vite-project...    
│
└  Done. Now run:

  cd vite-project
  npm install
  npm run dev
jsx-> it is actually a very similar looking structure like HTML 
<h1>hey</h1> -> HTML
<h1>hey</h1> -> jsx  it is look like a html but it is not 

<h1>hey 2+2 </h1> -> o/p in html-> hey 2+2
<h1>hey {2+2}</h1>  -> in jsx-> hey 4

src-|->component |->about-component,tag-component,product-component,landing-page
src-|->App.js  all component comes in App.js and App.js comes in main.js.
main.js is responsible to put in body tag <body>main.js</body>

state ek data hota hai , react es data ka khayaal rakhta hai , jab bhi ye data change hota hai react page ko update karta hai 
state koi bhi data ho sakta hai , jise ji score=0

maan lete hai aapke game mein score by default 0 se shuru hota hai and future mein wo score badhega by 10 aur 
aapko page pe show bhi karna hai jab score badhe , to us case mein aapka score variable ek state mein rakhna jaruri hai , kyuki
react sirf use change krta hai jo state mein hota hai 

useState state ko turant update nahi karta , wo useState state ko update karta apne hisaab se function completion ke baad to fix performance issues 

# installing the react project with tailwind css

PS D:\FRONTEND\react> npm create vite@latest routing --template react
PS D:\FRONTEND\react\routing> cd routing
PS D:\FRONTEND\react\routing> npm install tailwindcss @tailwindcss/vite

vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

index.css
@import "tailwindcss";

# What is a Prop in React?
In React, props (short for properties) are a way to pass data from a parent component to a child component. Props are read-only, meaning they cannot be modified by the child component.They help components become reusable by dynamically receiving data.

1. Parent Component Passing Props
import React from "react";
import Greeting from "./Greeting";
const App = () => {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
};
export default App;

2. Child Component Receiving Props
import React from "react";
const Greeting = ({ name, age }) => {
  return (
    <h2>
      Hello, my name is {name} and I am {age} years old.
    </h2>
  );
};
export default Greeting;

# integrate API in react
database <--> backend -->react-frontend

data is coming in react-frontend through AJX api concept from backend

AJX api concept is implement through fetch/axios

AJX api concept helps to comucate with backend and frontend 

component update -> component deletion + component creation

Syntax of useEffect
useEffect(() => {
  // Code to run (side effects)
}, [dependencies]);

The first argument is a function where we define what we want to run.
The second argument is an array of dependencies, which controls when the effect runs.

1. Running useEffect on Every Render (No Dependency Array)
useEffect(() => {
  console.log("Component re-rendered!");
});
The effect runs every time the component renders.
If the state or props change, the effect runs again.

2. Running useEffect Only Once (Empty Dependency Array [])
useEffect(() => {
  console.log("Component mounted!");
}, []);

The effect runs only once when the component mounts.
It won’t run again on re-renders.
Used for tasks like fetching data when the component loads.
Example: Fetching API data on mount
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);

3. Running useEffect When State/Props Change (With Dependencies)
const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);

The effect runs when count changes.If count stays the same, it won’t run.
Useful for things like syncing with local storage or API calls that depend on a specific value.

4. Cleaning Up Side Effects (Return Function)
Sometimes, effects like event listeners or timers need cleanup to avoid memory leaks.

Example: Cleanup for an Interval
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running...");
  }, 1000);
  return () => {
    clearInterval(interval);
    console.log("Interval cleaned up!");
  };
}, []);
The return function cleans up the effect when the component unmounts.
Example: Cleanup for an Event Listener
useEffect(() => {
  const handleResize = () => {
    console.log("Window resized!");
  };
  
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
This prevents multiple event listeners from piling up.

# context API
The Context API in React is a built-in feature that allows you to manage and share state globally across components without having to pass props manually through each level of the component tree. It is useful when you have data that needs to be accessed by multiple components at different nesting levels, such as theme settings, authentication status, or user preferences.

How Context API Works
The Context API consists of three main parts:

React.createContext(): This function creates a Context object.It returns a Provider and a Consumer.Provider

The Provider component is used to wrap the parts of the application that need access to the context.
It accepts a value prop, which represents the data that should be shared.Consumer (or useContext Hook)
 
The Consumer component is used to consume the context values in class components.
In functional components, we use the useContext hook for a simpler way to access the context.
Example: Using Context API
1. Creating a Context
import React, { createContext, useState } from "react";
const ThemeContext = createContext();// Create Context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };

2. Using the Context in a Component
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};
export default ThemeToggle;

3. Wrapping the App with the Provider
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
};
export default App;

Advantages of Context API
✔ Reduces prop drilling (passing props down multiple levels).
✔ Makes state management easier for global data.
✔ Better performance compared to unnecessary re-renders with prop drilling.

However, for large-scale applications with complex state logic, Context API might not be as efficient as Redux or other state management solutions.

