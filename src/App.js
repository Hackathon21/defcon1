import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./components/preloader/Preloader.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Router>
            <div className="nav">
              <Navbar />
            </div>
            <div className="pusher"></div>
            <div className="count">
              <Switch>
                <Route path="/" exact component={Home} />
                <div className="pageHandle"></div>
              </Switch>
            </div>
          </Router>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
