const { createBrowserRouter, RouterProvider } = require("react-router-dom");
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: true,
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
