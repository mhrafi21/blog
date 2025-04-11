
import PostDetails from "@/components/PostDetails/PostDetails";
import ErrorPage from "@/ErrorPage";
import RootLayout from "@/Layout/RootLayout";
import CategoryPage from "@/pages/categoryPage/CategoryPage";
import Home from "@/pages/Home";
import SearchBlog from "@/pages/SearchBlog/SearchBlog";
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
      },
      {
        path: "/post/:slug",
        Component: () => <PostDetails />
      },
      {
        path: "/search",
        Component: () => <SearchBlog />
      }
    ],
  },
]);

export default router;
