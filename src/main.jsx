import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bags from "./routes/Bags.jsx";
import Home from "./routes/Home.jsx";
import myntraStore from "./components/store/index.js";
import { Provider } from "react-redux";
import Mans from "./routes/Mans.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postloader*/ },
      { path: "/bag", element: <Bags /> /*, loader: postloader*/ },
      // { path: "/man", element: <Mans /> /*, loader: postloader*/ },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
