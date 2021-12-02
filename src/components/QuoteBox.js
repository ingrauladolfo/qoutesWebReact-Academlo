import React, { useState } from 'react'
import '../assets/css/MyStyles.css'
import twitter from '../assets/images/twitter.png'
import {quotes} from '../assets/json/quotes.json'

export function QuoteBox() {
  
  let [id, setID] = useState(0);
  const handleId = () => {
    id = Math.floor(Math.random() * quotes.length);
    setID(id);
  }

  let base_URL = window.location.href;
  let shareTweetUrl = "https://twitter.com/intent/tweet?url=" + base_URL + "&text=" + encodeURIComponent(quotes[id].quote) + encodeURIComponent(quotes[id].author);
  
    return (
      <div className="container">
        <div className="card d-flex justify-content-center align-items-center text-center">
          <div className="card-body">
            <h2>{quotes[id].quote} <span>- {quotes[id].author}</span></h2>
          </div>
          <a href={shareTweetUrl} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary">
              <span> Share it me <img src={twitter} alt="Logo twitter" /></span> 
            </button>
          </a>
          <button className="btn button-quote mt-3" onClick={handleId}>
            New quote
          </button>
        </div>
    </div>
    )
}
