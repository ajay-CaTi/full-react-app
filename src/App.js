import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";
const Grocery = lazy(() => import("../components/Grocery"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
