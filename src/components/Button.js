import { useState } from 'react';
import GifDisplay from "./GifDisplay"

function Button(props) {

 // apikey
 const apiKey = "AGvMnDEexOvN6aQ5kXlUvO5P09iabFkf"

 // state
 const [gif, setGif] = useState(null)

 // function to get a gif from the api
 const getGif = async () => {

   // create the URL to fetch gif from
   const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

   // fetch the gif data
   const response = await fetch(url)

   // get the JSON from the response
   const data = await response.json()

   // update the state with the gif
   setGif(data.data)
 }

    return (
        <div>
            <button className="button"
                onClick={getGif}>Give me a GIF please!
            </button>
            <br/>
            <br/>
            <GifDisplay gif={gif}/>
        </div>
    )

}

export default Button