import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

import Root from "./pages/Root";
import HomePage from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetailPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: ":id",
          element: <MovieDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
