import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Users from "./pages/users";
import User from "./pages/user";
import Albums from "./pages/albums";
import Album from "./pages/album";
import NotFound from "./pages/not-found";
import { getUsers, getAlbums } from "./utils/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Users />,
        loader: getUsers,
        errorElement: <NotFound />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: getUsers,
        errorElement: <NotFound />,
      },
      {
        path: "/albums",
        element: <Albums />,
        loader: getAlbums,
        errorElement: <NotFound />,
      },
      {
        path: "/users/:userId",
        element: <User />,
      },
      {
        path: "/albums/:albumId",
        element: <Album />,
      },
      {
        path: "/error",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
