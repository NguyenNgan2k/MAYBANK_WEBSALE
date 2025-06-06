import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/Loading";
import DefaultHeader from "./DefaultHeader";
import NavLeft from "@/components/NavLeft";

const DefaultLayout: React.FC = () => {
  return (
    <div className="app overflow-y-hidden w-full h-full">
      <div className="app-body w-full h-full grid grid-cols-[180px_calc(100%-188px)] gap-2">
        <NavLeft />
        <main className="main w-full h-full flex flex-col gap-2">
          <DefaultHeader />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DefaultLayout;
