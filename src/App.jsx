import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMoviesList } from "./store/movies-actions";

import Root from "./pages/Root";
import HomePage from "./pages/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesList());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
