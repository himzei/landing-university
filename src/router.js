import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Leaflet from "./routes/Leaflet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
export default router;
