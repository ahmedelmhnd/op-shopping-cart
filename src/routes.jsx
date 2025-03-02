import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import App from "./components/app/App";
import ItemPage from "./pages/itemPage/ItemPage"



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
      {
        path: "item/:ID",
        element: <ItemPage />
      }
    ],
  },
];

export default routes;
