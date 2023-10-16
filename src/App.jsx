import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Leaflet from "./routes/Leaflet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "leaflet",
        element: <Leaflet />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
