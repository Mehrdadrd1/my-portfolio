import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layouts";
import { Home } from "../pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default routes;
