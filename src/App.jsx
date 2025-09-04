// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import ISRForm from "./component/ISRForm";
import Layout from "./component/Layout"; // We'll create this component

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form/:formId" element={<ISRForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;