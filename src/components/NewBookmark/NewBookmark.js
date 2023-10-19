import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBookmark } from "../Api/API";

function NewBookmark() {
  let navigate = useNavigate();

  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    category: "",
    is_favorite: false,
  });

  async function handleCreateBookmark(e) {
    e.preventDefault();
    try {
      await createBookmark(bookmark);
      setBookmark({
        name: "",
        url: "",
        category: "",
        is_favorite: false,
      });
      navigate("/bookmarks");
    } catch (e) {
      console.log(e);
    }
  }
  function handleOnchange(id, value) {
    setBookmark({
      ...bookmark,
      [id]: value,
    });
  }

  return (
    <div>
      <form onSubmit={handleCreateBookmark}>
        <div>
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
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
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
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
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={bookmark.category}
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            required
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            onChange={(e) => handleOnchange(e.target.id, e.target.checked)}
            value={bookmark.is_favorite}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBookmark;
