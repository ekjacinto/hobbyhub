import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ViewPosts from "./pages/ViewPosts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<ViewPosts />} />
        <Route path="/create" element={<h1>Create</h1>} />
      </Routes>
    </div>
  );
}

export default App;
