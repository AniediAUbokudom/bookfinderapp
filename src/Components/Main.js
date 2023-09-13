import { Link } from 'react-router-dom';
import {useState} from 'react';

const Main = () => {
  const [inputValue, inputValueChanged]= useState("")
  const handleChange = (e)=> {
    inputValueChanged(e.target.value);
  }
  return (
    <div className="header">
      <div className="firstRow">
        <h1>Any World is Possible in a Book</h1>
      </div>
      <div className="secondRow">
        <h2>Find Your World</h2>
      </div>
      <div className="searchField">
        <input onChange={handleChange} value={inputValue} type="text" placeholder="What are you Reading?" />
      </div>
      <div className="myButton">
            <Link to="/books/github">Enter</Link>
        </div>
    </div>
  );
};

export default Main;
