# How, Why, WHen?

Most imp. questions

# Git

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/full-react-app.git
git push -u origin main

# crossorigin?

React, and other Liberaries and Framework build with a compt of Menupulation of DOM with JS

The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

# How to load in https

npx parcel index.html --https

# Transitive dependencies

Dependencies "parcel" using other dependencies eg:-"babel" is known as TD

# Component Composition

Using one Componenet into another

# How does JSX prevent XSS?

JSX is not only convenient, but also safe, because it automatically escapes any user input or dynamic values before rendering them to the DOM. This means that any potentially harmful scripts or HTML tags are converted into plain text and cannot execute.

# Parcel

-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm -written in C++
-Caching - Faster Builds
-Image Optimization
-Minification of files
-Bundling
-compress(remove white space)
-Consistent Hashing ?
-code splitting
-Differential Bundling [app can be open in new as well as old browsers when use <script type="module"></script></script> parcel automatically generate a nodemodule fallback for all browsers ]
-Diagnostics (Beautiful error suggestion in terminal)
-Error Handling
-HTTPS [npx parcel index.html --https lodes in https mode not http]
-Tree shaking - remove unuse code

-Different dev and prod bundles(build)

# prod build

npx parcel build index.html

# JSX prevent cross site scripting

config driven UI
UI and data layer

# Why we use key in React js ?

Keys are used in React to identify which items in the list are changed, updated, or deleted.

Exact usage of key is if key is not provided then react will rerender all card but if key is provided then only that card is needed to change it

Use of index in place of key is can be used but not preffered by react itself[ index as a key is an anti-pattern] not recommended
No key Not Acceptable Use index last option

# Why do we use react if all thing is done by using HTML, css , js

It makes developer experience easy
it make su write less code and do more, thi sis th emain job of UI library or framework

# Why react component begin with capital letter

This convention is because only HTML elements and SVG tags can begin with a lowercase letter.
React treats components starting with lowercase letters as DOM tags.

# Want to filter data from useState and on button click then use different usestate and send data to main updated array function

# Ui and Data layer work with each other all frame, lib try to sole this view, angular, react

# Ui layer and data layer consisitent work with each other when data changes

# Why react is fast

it can do
faster dom menupulation
efficient dom menupulation
virtual dom
cliff algo
reconcillation
react fiber

# React do?

development experience easier write less code and do more, make code experience fast.

React is fast in DOM menupulation
Fater and efficient dom Menupulation
Virtual dom
cliff algo
reconcillation

# Reconciliation?

Reconciliation is the process through which React updates the Browser DOM.

# why usestate willhave updated function

Because React Fiber needs a trigger to start diff algo and updated UI

# Monolith & Microservice

- Monolith:- APin code, UI code, Auth code, DB connectivity code, SMs send code in same project
- IF some minimal change then BUILD -> COMPILE -> DEPLOY bulky project tHis is monolethic arcticture
- all different work developers have to work over same project

- Microservice Arcticture :- In this Diff. service in diff job Backend service Ui job Auth service, DB service that connect to db, service of sms sending, service of email notification

- All service combine to form a big app

- UBER follow on micro service depend upon use case all microservice talk to each other
- Each and every small service/thing we have seperate project known as seperation of concern and SINGLE RESPONSIBILITY PRINCIPLE
- WHERE each every service have their own job
- With microservice arcticture all teams work over own different service

- Each service mension above written in sam elanguage in MONOLITHIC Arcticture

// Each service mension above written in DIFFERENT language(java , react, golang) in MICROSERVICE Arcticture

// All service in MICROSERVICE Arcticture run on their own specific port

- communicate with each other like
- all port map to domain name
- UI(/), Backend(/api), SMS(/sms) communicate through making call to that port

- A soon as page loads --> make api request --. render DATA(UI)

- As soon as page lods --> quickly rende UI --> NOw make API CAll --> Then rerender our application with new data.
- In React use thi sapproch
- React render UI very fast

- As Soon As the body render cycle finished then after the useeffect called

- Hook is a type of function at the end of day but it has some specific purpose

# CORS error?

has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

# when ever the state variables udates react updateds dome known as render

usestate() normal js function gve some utility

# ReConcillation algo:- also known as react fiber

How ReConcillation

7 cards virtual dom
pres button
3 card

react creates virtual dom which is the JAVASCRIPT representation of actual dom

diff algo find the diff between virtual and actual dom on every render cycle

find diff between two html elemt i though diff between two object is easy when change in state variable

# Monolith:- Whole Application APi, ui, Auth, DB, SMs allin one in single projet and change in one button then whole project rebuild, buid & will re-deploy Use to work on save repository.

every thing work in java if project build in java

# Microservice arctisture:- Each evry small thing have different project( APi, ui, Auth, DB, SMs ) each team working with therir individual service project and share data through api.

every thing work in different Projects build in which they want

# Data loads two approaches

1. LOads with api call and as soon as we get data whole willl render at once Poor UI experience

2. As soon as .loads end api call to get data as soon as get data render it Best UI experience

# Conditional rendering

Rendering according to condition known as conditional rendering

Hooks are used to create state in function component at the top inside function

never use state inside if else condition, function, loops.

# appRouter=createBrowserRouter() Takes a list of path

# pass this "appRouter" inside RouterProvider

# when new instance of class created / class loads, first constructr is called!

# why didn't use async in useeffect

// But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument

# HOw code become ore modular, mentainable and testable

Break down code into diff diff small modules(havve single responsibility)

# REsuable

# mentanable

# testable

# Keep your component light

# Hooks are normal JS utility function

# tesr case of this code is simple

---

#

# React a deep approach

// filter item form search bar
{listOfResturants
.filter((val) => val.title.toLowerCase().includes(searchText))
.map((value) => {
return (
<RestaurantCard
                  key={value.id}
                  title={value.title}
                  url={value.url}
                  id={value.id}
                />
);
})}

npx parcel build index.html
GIVES ERROR bec
parcel conflict with PACKAGE.JSON main:"App.js" file i.e entry point
but we use [npx parcel build index.html] entry point index.html

so remove it from package.json

npx parcel index.html ::-- this creates DEV BUILD

npx parcel index.html ::-- this creates PRODUCTION BUILD

A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface.

// const heading = React.createElement(
// "h1",
// { id: "heading" },
// "Hello World from react"
// );
// console.log(heading);
// PROPS { id: "heading" },
// {use for ATTRIBUTE}
//{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

// const root = ReactDOM.createRoot(document.getElementById("root"));

// createElement :- TAKES 3 API {1. NAME OF TAG HE, DIV, 2. ATTRIBUTE(OBJECTS), CHILDREN} MULTIPLE CHILDREN PASS IN LIST OF ARRAY

// WHAT EVER IS ROOT IS REPLACE BY ROOT.RENDER() FUNCTION
// PLANNING
// SLOWLY BUILT CODE

// wHY USE FRAMEWORK OR LIBRARY?
// MAKES DEVELOPER EXPERIENCE EASY WRITE LESS CODE AND GIVE MORE ON WEB PAGE

// Config Driven UI:- Web app is driven by DATA [How the UI Look Like USING DATA && and config comes from backend [it is the latest prectice that every company follows] Even for every city tere will be different data shon on every city/state]

// PROPS are just normal arguement to a function

// Good senior front end developeer Engineer is very good in UI and DATA LAyer Engineer

// What CDN does Cloudinary use?
// Cloudinary leverages multiple CDNs, including Akamai, the leading CDN provider, with thousands of global delivery servers. Together with Cloudinary's advanced caching techniques and dynamic URL-based image delivery, your resources are efficiently delivered to your users all around the world.

// React doesnt uniquely indentify the element that why we use key

// never Use INDEX as key bacause of elemnt has change didnt recommended

// React function component
// Normal JS function that return jsx code that is functional component

// style{{backgroundColor:"#f0f0f0"}}
// first curley braces for some js code and other is JS OBJECT

// root.render(heading);
// Code Redable:- Because of JSX
// WHat makes React code faster
// ANs is WebPack Parcel the are builders

// Attack through Browser is known as Cross-side scripting [ JSX take care of INJECTION ATTACKS prevet from cross-site scripting / JSX FIRST sanitise data and then run ]

// React.createElement==>ReactElement(Object) ==> HTMLElement(By render)

// JSX => BABEL is transpile to React.createElement ==> converted to ReactELement(Object) ==> HTMLElement(By render)

// react and jsx both are different

// TIME E3 45.00

// create abstract syntax tree, parsing, tokens

// The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).

// JSX - is HTML like syntax but not HTML
// render te parent to my root
// .render() Job is :- TAke this object and create h1 tag i.e understandable by browser and put it inside root

// echo "# react" >> README.md
// git init
// git add .{add all files needs to go inside commit}
// git commit -m "first commit"
// git branch -M main {create a default branch main i.e master}
// git remote add origin https://github.com/ajay-CaTi/react.git
// git push -u origin main(push all code in repository)

// Git is a version control system that allows developers to track changes in their code. GitHub is a web-based hosting service for git repositories. In simple terms, you can use git without Github, but you cannot use GitHub without Git.

// JSX:- (code is transpiled before it reaches the JS Engine) - PARCEL{from BABEL}

// BABEL:- JS Compiler ( takes jsx and conv into code that Browser understand )

// React.createElement==>ReactElement(Object) ==> HTMLElement(By render)

// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// React is fast because it has virtual dome it has diff algo which is very efficiently menupulation dom, find the diference and update dome

// vrtual dome(Dome JS representation of it) is introduce a long back of react. React Pick that and build its core ove that vertual done

// as soon as the state variable updtaes it automatically refresh component it is known as rerender
// diffing algo:- find diff between OLD VIRTUAL DOME(like an object representation) and ACTUAL DOM
// React uses reconcillation also known as(react fiber)
// virtual dome:- representation of actual dome
// react fiber :- comes in React version 16 new algo to update dome
//

// 1
// const [listOfResturants, setListOfResturants] = useState(data);
// 2
// const arr = useState(data);
// const [listOfResturants, setListOfResturants] = arr;
// 3
const arr = useState(data);
const listOfResturants = arr[0];
const setListOfResturants = arr[1];

// useEffect will called after every render when dependency array is not there means
// useEffect(() => {
// fetchData();
// });
// useEffect will called only once on initial render when dependency array is empty
// useEffect(() => {
// fetchData();
// },[]);

// Virtu dom happens in Render Phase

// RENDER PHASE:- CONSTRUCTOR, RENDER (Pure and has no side effects. May be paused, aborted or restarted by React.)
// COMMIT PHASE:- DOM UPDATED AND COMPONENT DID MOUNT CALLED (Can work with DOM, run side effects, schedule updates.)

// REACT Badge the rennder phase & commit phase

// FIRST CONSTRUCTOR
// FIRST RENDER

// CHILD CONSTRUCTOR
// CHILD RENDER

// DOM UPDATES IN SINGLE BATCH

// react OPTIMIZATION

// FIRST componentDidMount
// CHILD componentDidMount

// react OPTIMIZATION

// parent componentDidMount

//WHy so Above thing happens Because once Cmmit phase is starts React tries to update the DOM and [DOM MENUULATION IS MOST EXPENSIVE THING WHEN WE UPDATING THING Beacuse it takes Time]

// FIRST CONSTRUCTOR WILL CALLED -->> THEN RENDER IS CALLED -->> THEN react update DOM -->> then COMPONENTDIDMOUNT CALLED

// Parent Constructor Parent Render
// Child Constructor Child Render

// export default About;

// GraphQl Helps in Under and Over fetching Lode only data which is required in app

// COnditional Rendring:-Rendring on basis of condition known as conditional rendering

// fetch() Given by Browser
// if origin mismatch browser block to access api
// Browser now allowing us to call swiggy api from local host form one origin to another origin

// Purpose of useState to create Local State varaibles in side functional component
// always put state variable at the top inside functional component
// Never use state variable inside condition
// Never use state variable inside function

// when ever create route create routing configuration(info that tells what happens on specific route) import createBrowserRouter(take list(object))

// if useEffect do not have any dependency array then useEffect will call evry time my component renders, do i wnat ap call on every render NO
// I have to do th epi call once on initial render then give empty array []

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# 2 type of Routing

Client side Routing ::-- In React there is client side Routing only network call for api not fetching any other page

Single page::--whole app loads only making network api call and and just component interchange

Server side routing ::-- click on /about IT RELODS the whole page send Network call, fetch the html and render the HTML

WHENEVER THERE IS CHANGE IN RECONCILLATION ALGO REACT TRIGGER reconcillation cycle(re-render the components)

---

# Why use React

React just give some helper methods to develop faster application.

# Execute the app

Use npx

# What parcel do?

Dev Build
Local Server
HMR-Hote Module Replacement
How Parcel doing HMR ::- File Watching Algorithm written in C++
Caching Faster Build [ Make caching to build next development fast ]
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code splitting
Differencial Bundeling - support older browsers
Diagnostics
Error Handling
HTTPs
Tree Shaking Algo -remove unsual code.

# JSX?

JSX is html like syntax not writing HTML in JS
JSX is transpile by Parcel basically Babel

# React Component

function component is normal js function thta returns some jsx

# Babel understand JSX?

Babel understand JSX

# Component Composition

using compoennt to another

# Both works same

-<E1 />
-{E1()}

# JSX sanitaze the data brfore execution

# Process of Building an App?

- Planning
- Requirement
- Design
- S/W Development
- Testing
- Deployment
- Operation & Mentainance

Header

- Logo
- Nav Items

Body

- Search bar
- restaurant Container
- restaurant Card
  Foter
- Content

# config driven UI

# fetch url

https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# what if key is not present?

- React will clean the container and rerender all components
- if key is present reat will only render that card only
- Index is not recommended

# React hooks

Normal JS function, utility functions
state variable, update statefunction two arguementin useState();

when state variable chages react rerender component

React keep sink UI layer with data layer

React makes DOM operation fast

React Reconcillation algo also called React fiber

Virtual dom is actual represenation of actual dom

Diff Algo:- find diff between vDOM and aDOM

React Fiber is an ongoing reimplementation of React's core algorithm.
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Efficient dom menupulation

As soon as state variable schanges react start reconcillation algo, find diff between real and actual dom and update uI

Monolith Arcticture:-
API code
UI code
Auth code
DB connetivity code
SMS sending same code

Even make a single change need to build whole project and deploy it

JSP(Java Servlet PAges)?

Microservice

Backend service
UI
Auth
DB
SMS
EMail notification
all these service to form a whole back

for each thing we have different project( Seperation of principle / Single Responsibilty Principle )

Microservice have different peoject with diff repositories connected together with api

Useeffect() function will call after body component render

When ever change in state variable react call the function component again to rerender whole component

When ever the state variable updates react trigger the reconcillation cycle (rerender whole component)

React fiber is new reconcillatin process i.e efficiently menupulating the DOM. find the difference bwt RDOM VDOM and updated teh updated value inside DOM

Why, Why, When?

Alwayas remenber this

#

# Why use React

React just give some helper methods to develop faster application.

# Execute the app

Use npx

# What parcel do?

Dev Build
Local Server
HMR-Hote Module Replacement
How Parcel doing HMR ::- File Watching Algorithm written in C++
Caching Faster Build [ Make caching to build next development fast ]
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code splitting
Differencial Bundeling - support older browsers
Diagnostics
Error Handling
HTTPs
Tree Shaking Algo -remove unsual code.

# JSX?

JSX is html like syntax not writing HTML in JS
JSX is transpile by Parcel basically Babel

# React Component

function component is normal js function thta returns some jsx

# Babel understand JSX?

Babel understand JSX

# Component Composition

using compoennt to another

# Both works same

-<E1 />
-{E1()}

# JSX sanitaze the data brfore execution

# Process of Building an App?

- Planning
- Requirement
- Design
- S/W Development
- Testing
- Deployment
- Operation & Mentainance

Header

- Logo
- Nav Items

Body

- Search bar
- restaurant Container
- restaurant Card
  Foter
- Content

# config driven UI

# fetch url

https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# what if key is not present?

- React will clean the container and rerender all components
- if key is present reat will only render that card only
- Index is not recommended

# React do?

development experience easier write less code and do more, make code experience fast.

React is fast in DOM menupulation
Fater and efficient dom Menupulation
Virtual dom
cliff algo
reconcillation

# React hooks

Normal JS function, utility functions
state variable, update statefunction two arguementin useState();

when state variable chages react rerender component

React keep sink UI layer with data layer

React makes DOM operation fast

React Reconcillation algo also called React fiber

Virtual dom is actual represenation of actual dom

Diff Algo:- find diff between vDOM and aDOM

React Fiber is an ongoing reimplementation of React's core algorithm.
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Efficient dom menupulation

As soon as state variable schanges react start reconcillation algo, find diff between real and actual dom and update uI

Monolith Arcticture:-
API code
UI code
Auth code
DB connetivity code
SMS sending same code

Even make a single change need to build whole project and deploy it

JSP(Java Servlet PAges)?

Microservice

Backend service
UI
Auth
DB
SMS
EMail notification
all these service to form a whole back

for each thing we have different project( Seperation of principle / Single Responsibilty Principle )

Microservice have different peoject with diff repositories connected together with api

Useeffect() function will call after body component render

When ever change in state variable react call the function component again to rerender whole component

When ever the state variable updates react trigger the reconcillation cycle (rerender whole component)

React fiber is new reconcillatin process i.e efficiently menupulating the DOM. find the difference bwt RDOM VDOM and updated teh updated value inside DOM

Why, Why, When?

Alwayas remenber this

# Why hooks is created?

Use to crate local state variable inside function component, at the top.

# ERROR

error: failed to push some refs to
I am not following below insted make new branch one
git pull origin main
git push -u origin main

# class

When ever an instance of class created or invoked first constructer then render is called

# async is not used with useEffcet(){}?

# constructor and super()?

# Distribution of code?

Distribution of code becomes easy to write testcases and easy to debug.

# Hooks ?

Hooks are just utility function

# Errors handling?

Linters

# Prod build

In production build parcel build a compressed, more efficient, minified in one single file

# Issues with a big, heavy loaded web app

Is they are not a well optimiize if not taken care
How?
By lazy loading split a big bundle in smal one while loading

# Lazy without suspense

Error: A component suspended while responding to synchronous input

# tailwindcss LIGHT WEIGHT

only the css U include only that much goes in bundle
