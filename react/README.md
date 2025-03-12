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
