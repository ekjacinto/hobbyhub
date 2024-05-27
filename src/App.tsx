import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ViewPosts from "./pages/ViewPosts";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Code</title>
        <meta
          name="description"
          content="A forum to share knowledge, skills, and questions"
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/view/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
