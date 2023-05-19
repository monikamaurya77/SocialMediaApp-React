import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comment from "./components/Comment";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/search" element={<Tags />} />
          <Route path="/post/:id" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
