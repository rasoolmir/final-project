import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./services/redux/store/store";

import Loading from "./components/Loading.component";
const TodosComponent = lazy(() => import("./pages/todos/todos.component"));
const AboutMeComponent = lazy(
  () => import("./pages/about-me/about-me.component"),
);
const BlogComponent = lazy(() => import("./pages/blog/blog.component"));
const Page = lazy(() => import("./pages/blog/[id]/page"));
const ShopComponent = lazy(() => import("./pages/shop/shop.component"));
const HomeComponent = lazy(() => import("./pages/home/home.component"));

const MainLayoutComponent = lazy(
  () => import("./layouts/main-layout.component"),
);
const NotFoundComponent = lazy(
  () => import("./components/not-found/not-found.component"),
);

const routes = [
  { path: "/todos", element: <TodosComponent /> },
  { path: "/about-me", element: <AboutMeComponent /> },
  { path: "/blog", element: <BlogComponent /> },
  { path: "/blog/:id", element: <Page /> },
  { path: "/shop", element: <ShopComponent /> },
  { path: "/home", element: <HomeComponent /> },
  { path: "/*", element: <NotFoundComponent /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutComponent />,
    children: routes.map(({ path, element }) => ({
      path,
      element: <Suspense fallback={<Loading />}>{element}</Suspense>,
    })),
  },
]);

const AppProvider = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default AppProvider;
