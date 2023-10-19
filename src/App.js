import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Bookmark from "./components/Bookmark/Bookmark";
import Nav from "./components/Nav/Nav";
import NewBookmark from "./components/NewBookmark/NewBookmark";
import EditBookmark from "./components/EditBookmark/EditBookmark";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/bookmarks/:id" element={<Bookmark />} />
          <Route path="/bookmarks/:id/edit" element={<EditBookmark />} />
          <Route path="/create-bookmark" element={<NewBookmark />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
