import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";

const routes = [
    {
      path: "/",
      element: <Homepage />,
    },
    {
        path: "/shop",
        element: <Shop />
    }
  ];

export default routes;