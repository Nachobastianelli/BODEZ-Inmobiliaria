import CardItem from "./components/cardItem/CardItem";
import Item from "./components/item/Item";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
