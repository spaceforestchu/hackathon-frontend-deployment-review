import React, { useContext } from "react";
import { ReviewsContext } from "../context/context";
import ReviewForm from "./ReviewForm";

function Review() {
  // const [viewEditToggleForm, setViewEditToggleForm] = useState(false);

  const {
    review,
    fromParentReviewsHandleSubmit,
    handleDelete,
    viewEditToggleForm,
    setViewEditToggleForm,
  } = useContext(ReviewsContext);

  function toggleView() {
    setViewEditToggleForm(!viewEditToggleForm);
  }

  return (
    <div className="Review">
      <button onClick={toggleView}>Edit this review</button>
      {viewEditToggleForm ? (
        <ReviewForm
          fromParentReviewsHandleSubmit={fromParentReviewsHandleSubmit}
          reviewDetails={review}
          toggleView={toggleView}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Review;
