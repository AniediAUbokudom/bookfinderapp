import axios from 'axios';
import { useParams } from 'react-router-dom';
let BooksList = []
let items=""
const searchItem = async (searchKeyWord) => {
    const apis = "https://www.googleapis.com/books/v1/volumes?q=" + searchKeyWord //api + userinput
    const response = await axios.get(apis) //used axios to fetch the info from the api
    BooksList= response.data.items //fetch results
    for(var item in BooksList){ //9-21:displays book details on webpage
        var actual=BooksList[item]
        var volumeInfo=actual.volumeInfo
        console.log(volumeInfo)
        // show images for book details with/without thumbnails
        try {
            items+=`<img src='${volumeInfo['imageLinks']['thumbnail']}'/>`
        } catch (error) {
            
        }
        items+=`<dt><h3>${volumeInfo.title}</h3></dt>`
        items+=`<dt>${volumeInfo.description}</dt><br><br>`
    }
    document.getElementById("elementList").innerHTML=items
}
const Books = () => {
    const { searchId } = useParams()
    // params used to extract the parameter in a weblink
    searchItem(searchId) //search google books api
    return (
        <div className='div-margin'>
            <h1>Book Search Results</h1>
            <dl id="elementList">
            </dl>
        </div>
    )
}

export default Books;