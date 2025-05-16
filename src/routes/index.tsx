import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/defaultLayout";

// const Login = React.lazy(() => import("@containers/login"));
// const Dashboard = React.lazy(() => import("@containers/dashboard"));
interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = true; // TODO: replace with real auth logic
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}

      <Route path="/home" element={<DefaultLayout />}>
        {/* <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;