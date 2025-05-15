import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import DefaultLayout from "containers/defaultLayout";
// import Login from "containers/login";
import Loading from "components/loading";

interface Props {
  store?: any;
}

const App: React.FunctionComponent<Props> = (props) => {
  const { store } = props;

  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/home" element={<DefaultLayout store={store} />} /> */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
