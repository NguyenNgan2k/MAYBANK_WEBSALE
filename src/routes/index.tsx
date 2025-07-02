import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";

// const Login = React.lazy(() => import("@containers/login"));
const DashboardPage = React.lazy(() => import("@pages/dashboard/index"));
const CustomersPage = React.lazy(() => import("@pages/customers/index"));
const OrdersPage = React.lazy(() => import("@pages/orders/index"));
const OrderBookPage = React.lazy(() => import("@pages/orderBook/index"));
const ContractsPage = React.lazy(() => import("@pages/contracts/index"));
interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route element={<DefaultLayout />}>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <CustomersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-book"
          element={
            <PrivateRoute>
              <OrderBookPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contracts"
          element={
            <PrivateRoute>
              <ContractsPage />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;