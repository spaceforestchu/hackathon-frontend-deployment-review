import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      Nav
      <p>
        <Link to="/bookmarks">See All Bookmarks</Link>
      </p>
      <p>
        <Link to="/create-bookmark">Create Bookmark</Link>
      </p>
    </div>
  );
}

export default Nav;
