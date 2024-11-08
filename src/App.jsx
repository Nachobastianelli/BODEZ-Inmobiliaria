import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import CardDetail from "./components/cardDetail/CardDetail";
import OnArticle from "./components/onArticle/OnArticle";
import InfoHome from "./components/infoHome/InfoHome";
import Map from "./components/map/Map";
import AddPropertyForm from "./components/addPropertyForm/AddPropertyForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Property/:id",
      element: <OnArticle />,
    },

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
      path: "aboutUs",
      element: (
        <div className="overflow-hidden">
          <Header />
          <About />

          <Footer />
        </div>
      ),
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/box",
      element: (
        <>
          <Header />
          <AddPropertyForm />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
