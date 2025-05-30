import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";
import Projects from "../pages/projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
