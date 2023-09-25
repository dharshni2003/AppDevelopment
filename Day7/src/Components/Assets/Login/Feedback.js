import React, { useState} from "react";
import "./Feedback.css"; 
import Sidebar from "./Sidebar";

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accuracy,setAccuracy] =useState("");
  const [performance,setPerformance] =useState("");
  
  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
 
  const handleAccuracyChange = (event) => {
    setAccuracy(event.target.value);
  }
  const handlePerformanceChange = (event) => {
    setPerformance(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send data to a server
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Accuracy of Forecasts:",accuracy);
    console.log("Performance:",performance);
    
  };

  return (
    <div>
    <Sidebar/>
    <div className="feedback-container">
    <div className="rectangle84">
    <div className="rectangle85">
    <img src="https://media.istockphoto.com/id/1446706809/photo/we-want-your-feedback-written-rectangular-shaped-white-chat-bubble-sitting-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=xtkZWjXRIxKVH7P4lgXtSRH7quihSD854Bo_RF9TlRg=" height="400px" width="400px"/>
    </div>
    </div>
      <div className="feedback-form">
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={handleRatingChange}>
              <option value={0}>Select a rating</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="accuracy">Accuracy of Forecasts:</label>
            <select id="accuracy" value={accuracy} onChange={handleAccuracyChange}>
              <option value={0}>Select accuracy</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          <div>
            <label htmlFor="performance">Performance:</label>
            <select id="performance" value={performance} onChange={handlePerformanceChange}>
              <option value={0}>Select performance</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          <div>
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows={4}
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Feedback;