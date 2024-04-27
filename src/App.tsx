import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ViewPosts from "./pages/ViewPosts";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/view/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
