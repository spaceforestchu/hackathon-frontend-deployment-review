import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();

  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    bookmark_id: id,
  });

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  function handleTextChange(event) {
    setReview({ ...review, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.fromParentReviewsHandleSubmit(review);

    // if (reviewDetails) {
    //   props.toggleView();
    // }

    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      bookmark_id: id,
    });
  }

  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="reviewer"> Name:</label>
        <input
          required
          type="text"
          id="reviewer"
          placeholder="Your name"
          value={review.reviewer}
          onChange={handleTextChange}
        />

        <label htmlFor="title"> Title:</label>
        <input
          required
          type="text"
          id="title"
          value={review.title}
          onChange={handleTextChange}
        />

        <label htmlFor="rating"> Rating:</label>
        <input
          required
          type="number"
          id="rating"
          min="0"
          max="5"
          step="1"
          name="rating"
          value={review.rating}
          onChange={handleTextChange}
        />

        <label htmlFor="content"> Review:</label>
        <textarea
          required
          type="text"
          id="content"
          placeholder="What do you think...."
          name="content"
          value={review.content}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;
