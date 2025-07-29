import { lazy, Suspense } from "react";
import { Navigate, type RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";

const CartPage = lazy(() => import("../pages/CartPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading Cart...</div>}>
        <CartPage />
      </Suspense>
    ),
  },
];

export default routes;
