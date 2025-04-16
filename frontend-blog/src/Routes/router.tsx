
import PostDetails from "@/components/PostDetails/PostDetails";
import ErrorPage from "@/ErrorPage";
import RootLayout from "@/Layout/RootLayout";
import AddPost from "@/pages/add-post/AddPost";
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
      },
      {
        path:"/add-post-01636144853",
        Component:() => <AddPost />
      }
    ],
  },
]);

export default router;
