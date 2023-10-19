import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

import ReviewForm from "./ReviewForm";
import {
  getBookmarkReviewAPI,
  createBookmarkReviewAPI,
  updateBookmarkReviewAPI,
  deleteBookmarkReviewAPI,
} from "../Api/API";

import { ReviewsContext } from "../context/context";

import "./Reviews.css";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [viewEditToggleForm, setViewEditToggleForm] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetchBookmarkReview();
  }, [id, API]);

  async function fetchBookmarkReview() {
    try {
      let result = await getBookmarkReviewAPI(id);

      setReviews(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAdd(newReview) {
    try {
      let result = await createBookmarkReviewAPI(id, newReview);
      setReviews([result.data, ...reviews]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit(updatedReview) {
    console.log("Handle Edit", updatedReview);
    try {
      let result = await updateBookmarkReviewAPI(
        id,
        updatedReview.id,
        updatedReview
      );

      const copyReviewArray = [...reviews];

      const indexUpdatedReview = copyReviewArray.findIndex((review) => {
        return review.id === updatedReview.id;
      });

      copyReviewArray[indexUpdatedReview] = result.data;

      setReviews(copyReviewArray);

      setViewEditToggleForm(!viewEditToggleForm);
    } catch (error) {
      alert("sorry, we cannot update, please contact support");
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteBookmarkReviewAPI(id);

      let filteredReviewArray = reviews.filter((item) => item.id !== id);

      setReviews(filteredReviewArray);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm fromParentReviewsHandleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>

      {reviews.map((item) => {
        return (
          <ReviewsContext.Provider
            value={{
              fromParentReviewsHandleSubmit: handleEdit,
              review: item,
              handleDelete: handleDelete,
              viewEditToggleForm: viewEditToggleForm,
              setViewEditToggleForm: setViewEditToggleForm,
            }}
            key={item.id}
          >
            <Review />
          </ReviewsContext.Provider>
        );
      })}
    </section>
  );
}

export default Reviews;
