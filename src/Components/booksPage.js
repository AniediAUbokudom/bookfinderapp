import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
let BooksList=['bk1', 'bk2']
const searchItem=async (searchKeyWord)=> {
    const apis="https://www.googleapis.com/books/v1/volumes?q="+searchKeyWord
    const response=await axios.get(apis)
    BooksList= JSON.stringify(response.data.items)
  console.log(BooksList)
   }
const BooksPage = async() => {
    const {searchId} = useParams()
    searchItem(searchId)
    console.log(BooksList)
    return ( 
        <div>
        <h1>Book Search Results</h1>

        <dl>
      {BooksList.map((item, index) => (
        <dt key={index}>{item.title}</dt>
      ))} 
    </dl>
    </div>
    )
      }
 
export default BooksPage ;