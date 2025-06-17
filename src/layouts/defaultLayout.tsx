import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/layout/Loading";
import DefaultHeader from "./DefaultHeader";
import NavLeft from "@/components/layout/NavLeft";

const DefaultLayout: React.FC = () => {
  return (
    <div className="app overflow-y-hidden w-full h-full">
      <div className="app-body w-full h-full grid grid-cols-[180px_calc(100%-180px)]">
        <NavLeft />
        <main className="main w-full h-full">
          <DefaultHeader />
          <Suspense fallback={<Loading />}>
            <div className="p-4">
              <Outlet />
            </div>
          </Suspense>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DefaultLayout;
