// rr-dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import MainLayout from "./layout/MainLayout";

//pages
import { ErrorPage } from "./pages";
import { Home } from "./pages";
import { Quiz } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quiz/:title",
          element: <Quiz />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
