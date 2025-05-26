import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "@components/loading";
import DefaultHeader from "./DefaultHeader";

const DefaultLayout: React.FC = () => {
  return (
    <div className="app overflow-y-hidden h-screen">
      <DefaultHeader />
      <div className="app-body">
        <main className="main w-full h-screen xl:w-[calc(100%-256px)]">
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
