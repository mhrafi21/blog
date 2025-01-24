
import ErrorPage from "@/ErrorPage";
import RootLayout from "@/Layout/RootLayout";
import CategoryPage from "@/pages/categoryPage/CategoryPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: () => <Home />,
      },
      {
        path:"/category/:slug",
        Component: () => <CategoryPage />
      }
    ],
  },
]);

export default router;
