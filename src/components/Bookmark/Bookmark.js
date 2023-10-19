import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

import Reviews from "../Reviews/Reviews";
import { getBookmarkById, deleteBookmarkById } from "../Api/API";

function Bookmark() {
  // let url = process.env.REACT_APP_API_URL;
  const [bookmark, setBookmark] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    toFetchBookmarkById();
  }, []);

  async function toFetchBookmarkById() {
    try {
      let result = await getBookmarkById(id);

      setBookmark(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteBookmark = async () => {
    try {
      const response = await deleteBookmarkById(id);

      const { name } = response.data;
      alert(`Bookmark ${name} has been deleted`);
      navigate("/bookmarks");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {bookmark && (
        <div>
          <p>name: {bookmark.name}</p>
          <p>url: {bookmark.url}</p>
          <p>category: {bookmark.category}</p>
          <p>favorite: {bookmark.is_favorite ? "true" : "false"}</p>
          <Link to={`/bookmarks/${id}/edit`}>
            {" "}
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteBookmark()}>Delete</button>
          <button onClick={() => navigate("/bookmarks")}>Back</button>
        </div>
      )}

      <Reviews />
    </div>
  );
}

export default Bookmark;

/*
  Current Task: Make the delete button work
*/
