import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/about/About.jsx";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import Contact from "./components/contact-us/Contact.jsx";
import User from "./components/user/User.jsx";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,

//     children: [
//       { path: "", element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
//   {
//     path: "login",
//     element: <Login />

//   },
//   {
//     path: "signup",
//     element: <Signup />

//   },

  
// ]);

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path=""  element={<Layout/>}>
      <Route path="/"  element={<Home/>}></Route>
      <Route path="about"  element={<About/>}></Route>
      <Route path="contact"  element={<Contact/>}></Route>
      <Route path="login"  element={<Login/>}></Route>
      <Route path="signup"  element={<Signup/>}></Route>
      <Route path="user/:userid"  element={<User/>}></Route>
      <Route
  loader={githubInfoLoader}
  path="github"
  element={<Github />}
  errorElement={<p className="text-red-600">Failed to load GitHub data. Please try again later.</p>}
/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
