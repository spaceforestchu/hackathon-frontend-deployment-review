import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getBookmarkById, updateBookmarkById } from "../Api/API";

// let url = process.env.REACT_APP_API_URL;

function EditBookmark() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const response = await getBookmarkById(id);

        setBookmark(response.data);
      } catch (error) {
        navigate("/404");
      }
    };

    fetchBookmark();
  }, []);

  const handleTextChange = (e) => {
    setBookmark({
      ...bookmark,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setBookmark({
      ...bookmark,
      is_favorite: !bookmark.is_favorite,
    });
  };

  const updateBookmark = async (id) => {
    try {
      await updateBookmarkById(id, bookmark);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateBookmark(id);
      navigate(`/bookmarks/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={handleTextChange}
            value={bookmark.name}
          />
        </div>
        <div>
          <label>Url</label>
          <input
            required
            type="text"
            name="url"
            id="url"
            onChange={handleTextChange}
            value={bookmark.url}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            required
            type="text"
            name="category"
            id="category"
            onChange={handleTextChange}
            value={bookmark.category}
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            onChange={handleCheckboxChange}
            checked={bookmark.is_favorite}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditBookmark;
