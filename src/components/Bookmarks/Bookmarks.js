import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllBookmarks } from "../Api/API";

function Bookmarks() {
  const [bookmarkData, setbookmarkData] = useState([]);

  async function fetchBookmarksdata() {
    try {
      let result = await getAllBookmarks();

      setbookmarkData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBookmarksdata();
  }, []);

  function showData() {
    return (
      <ul>
        {bookmarkData.map(({ id, name }) => {
          return (
            <li key={id}>
              {name} - <Link to={`/bookmarks/${id}`}>see this bookmark</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      {bookmarkData.length === 0 ? (
        <div>Please go create some bookmarks</div>
      ) : (
        showData()
      )}
    </div>
  );
}

export default Bookmarks;
