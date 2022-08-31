import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Boxes from "./component/Boxes";
import Side from "./component/Side";
import Footer from "./component/Footer";
import LoadRoute from "./component/LoadRoute";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            exact
            path="/assessment"
            element={
              <>
                <Header />
                <Side />
                <Boxes />
                <Footer />
              </>
            }
          />
          <Route exact path="/" element={<LoadRoute />}>
            <Route exact path="/" element={<></>} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
