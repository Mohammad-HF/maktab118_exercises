import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { NotFound } from "./pages/NotFund";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Home } from "./pages/Home";
import { UserInfo } from "./pages/UserInfo";
import { MainTemplate } from "./templates/MainTemplate";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    element : <MainTemplate/>,
    children: [
      { path: "/", element: <Home/> },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "user-info/:id",
        element: <UserInfo />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
