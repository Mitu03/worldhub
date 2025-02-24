import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Economic from "./Economic/Economic";
import Errors from "./components/Errors";
import Demographic from "./Demographic/Demographic";
import Trade from "./Trade/Trade";
import Infrastructure from "./Infrastructure/Infrastructure";
import Home from "./Utility/Main";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Errors />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/economic-Indicator",
        element: <Economic />,
      },
      {
        path: "/demographic-data",
        element: <Demographic />,
      },
      {
        path: "/trade&globalization",
        element: <Trade />,
      },
      {
        path: "/infrastructure",
        element: <Infrastructure />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
