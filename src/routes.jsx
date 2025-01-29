import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import App from "./components/app/App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
