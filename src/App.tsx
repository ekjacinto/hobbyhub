import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ViewPosts from "./pages/ViewPosts";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<ViewPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<h1>Post</h1>} />
      </Routes>
    </div>
  );
}

export default App;
