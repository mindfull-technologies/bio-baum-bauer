import React, { useState } from "react";
import { Button, TextInput, Textarea, Label } from "flowbite-react";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto gap-[2rem] flex justify-between text-font-family-color">
      <div className="flx w-[60%] p-4">
        {/* Title */}
        <div className="flex items-center mb-4">
          <img
            src="/src/assets/tree.png"
            alt="Tree Icon"
            className="w-[40px] h-[40px] mr-2"
          />
          <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
            Share Your Tree Sponsorship Story!
          </h3>
        </div>

        {/* Subtitle */}
        <h4 className="py-2">Why Share Your Story?</h4>
        <ul>
          <li>
            <strong>Inspire Others:</strong> Your journey can motivate others to
            become proud tree sponsors.
          </li>
          <li>
            <strong>Community Connection:</strong> Share your thoughts to
            connect with like-minded individuals passionate about environmental
            conservation.
          </li>
          <li>
            <strong>Celebrate Together:</strong> Let's celebrate the collective
            effort in making our world greener and healthier.
          </li>
        </ul>
      </div>

      <div className="w-[40%] p-4">
        {/* Form Title */}
        <div className="flex items-center mb-4">
          <img
            src="/src/assets/tree.png"
            alt="Tree Icon"
            className="w-[40px] h-[40px] mr-2"
          />
          <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
            Leave a Feedback
          </h3>
        </div>

        {/* Form */}
        <form>
          <div className="mb-3">
            <Label for="subject" className="visually-hidden">
              Subject*
            </Label>
            <TextInput
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject *"
              style={{
                backgroundColor: "var(--bg-white-color)",
                borderColor: "var(--bg-header-footer)",
                outlineColor: "var(--secondary-color)",
                padding: "1.15rem",
                color: "var(--font-family-color)",
                fontSize: "1rem",
              }}
            />
          </div>

          <div className="mb-3">
            <Label for="feedback" className="visually-hidden">
              Feedback*
            </Label>
            <Textarea
              cols="30"
              rows="5"
              type="textarea"
              id="feedback"
              name="feedback"
              placeholder="Leave your Feedback..."
              style={{
                backgroundColor: "var(--bg-white-color)",
                borderColor: "var(--bg-header-footer)",
                outlineColor: "var(--secondary-color)",
                padding: "1.15rem",
                color: "var(--font-family-color)",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Rating */}
          <div className="mb-3">
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-2xl cursor-pointer ${
                    star <= rating
                      ? "star selected text-yellow-500"
                      : "star text-gray-300"
                  }`}
                  onClick={() => handleStarClick(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-dark-gray">
            Only users who have sponsored a tree can leave a review.
          </p>

          {/* Submit Button */}
          <div className="text-center flex justify-center mb-6 mt-6">
            <Button
              className="custom-button-style"
              aria-label="Submit Feedback"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
