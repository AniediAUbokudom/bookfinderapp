import { Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [inputValue, inputValueChanged] = useState("");
  const handleChange = (e) => {
    //called anytime a user types an input
    inputValueChanged(e.target.value); //update input value after a new input has been entered
  };
  let searchLink = `/books/${inputValue}`;
  return (
    <div className="coverPage">
      <div className="pageDesc">
        <div className="firstRow">
          <h1>Any World is Possible in a Book</h1>
        </div>
        <div className="secondRow">
          <h2>Find Your World</h2>
        </div>
        <div className="searchField">
          <input
            onChange={handleChange}
            value={inputValue}
            type="text"
            placeholder="Author, Book Title, ISBN"
            // placeholder="What are you Reading?"
          />
          <Link to={searchLink}>
            <button>Enter</button>
          </Link>
          {/* "enter" launches or routes to the bookspage with the input value content */}
        </div>
      </div>
      <br></br>
      <img src="./images/book5.webp" alt="bookworld" />
    </div>
  );
};

export default App;
