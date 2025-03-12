import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WritingPage from "./components/WritingPage";
import AuthorPage from "./components/AuthorPage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
      
    </Router>
  );
}
export default App;
