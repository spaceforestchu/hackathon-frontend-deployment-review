import Axios from "./Axios";

async function getAllBookmarks() {
  try {
    let result = await Axios.get("/bookmarks");

    return result;
  } catch (e) {
    return e;
  }
}

async function getBookmarkById(id) {
  try {
    let result = await Axios.get(`/bookmarks/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

async function deleteBookmarkById(id) {
  try {
    let result = await Axios.delete(`/bookmarks/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

async function updateBookmarkById(id, updatedBookmark) {
  try {
    let result = await Axios.put(`/bookmarks/${id}`, updatedBookmark);

    return result;
  } catch (e) {
    return e;
  }
}

async function createBookmark(bookmark) {
  try {
    let result = await Axios.post(`/bookmarks`, bookmark);

    return result;
  } catch (e) {
    return e;
  }
}

//Review API
async function getBookmarkReviewAPI(id) {
  try {
    let result = await Axios.get(`/bookmarks/${id}/reviews`);

    return result;
  } catch (e) {
    return e;
  }
}

async function createBookmarkReviewAPI(id, newReview) {
  try {
    let result = await Axios.post(`/bookmarks/${id}/reviews`, newReview);

    return result;
  } catch (e) {
    return e;
  }
}

async function updateBookmarkReviewAPI(id, updatedReviewId, updatedReview) {
  try {
    let result = await Axios.put(
      `/bookmarks/${id}/reviews/${updatedReviewId}`,
      updatedReview
    );

    return result;
  } catch (e) {
    return e;
  }
}

async function deleteBookmarkReviewAPI(id) {
  try {
    let result = await Axios.delete(`/bookmarks/${id}/reviews/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

export {
  getAllBookmarks,
  getBookmarkById,
  deleteBookmarkById,
  updateBookmarkById,
  createBookmark,
  getBookmarkReviewAPI,
  createBookmarkReviewAPI,
  updateBookmarkReviewAPI,
  deleteBookmarkReviewAPI,
};
