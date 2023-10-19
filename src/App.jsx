import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Leaflet from "./routes/Leaflet";
import Curriculumn from "./routes/Curriculumn";
import Proceed from "./routes/Proceed";

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
      {
        path: "curriculumn",
        element: <Curriculumn />,
      },
      {
        path: "proceed",
        element: <Proceed />,
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
