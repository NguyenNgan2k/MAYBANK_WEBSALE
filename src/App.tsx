import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "@routes/index";
import Loading from "@/components/Loading";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </HashRouter>
  );
};

export default App;
