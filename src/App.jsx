import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  ReactDOM,
} from "react-router-dom";
import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App ">
      {/* <Cursor /> */}
      <FadeInSection>
        <Router>
          <div className="App" id="scroll">
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </FadeInSection>
    </div>
  );
}

export default App;
