import { useEffect, useState } from 'react'
import { quotes } from '../data/quotes';
import * as htmlToImage from 'html-to-image';
import { FaRepeat, FaDownload } from "react-icons/fa6";


function TitleCard() {
    const [titleCard, setTitleCard] = useState(null);
    const [cardLoading, setCardLoading] = useState(false);
    useEffect(()=>{
      const quote = quotes[Math.floor(quotes.length * Math.random())]
      setTitleCard(quote);

    },[titleCard]);

    const setImage = () => {
      console.log(document.querySelector('#titleCardImage').textContent);
      htmlToImage.toJpeg(document.getElementById('titleCardImage'), { quality: 0.95, width: 960, height:540, pixelRatio: 2 })
      .then(function (dataUrl) {
        const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        const spaceRegex = /\s+/g;
        let thisTextContent = document.querySelector('#titleCardImage').textContent;
        thisTextContent = thisTextContent.toLowerCase();
        thisTextContent = thisTextContent.replace(punctuationRegex, '');
        thisTextContent = thisTextContent.replace(spaceRegex, '-');
        var link = document.createElement('a');
        link.download = 'fraiser-title-card-' + thisTextContent + '.jpeg';
        link.href = dataUrl;
        link.click();
      });
    }

    const resetText = (e) => {
      e.target.setAttribute('disabled', true);
     setTimeout(()=>{
      setCardLoading(true);
      const quote = quotes[Math.floor(quotes.length * Math.random())]
      setTitleCard(quote);
      setCardLoading(false);
      e.target.removeAttribute('disabled');
     }, 500);
    }

  return (
    <div>
        <div id='titleCardImage' className={`contentTarget ${cardLoading ? 'loading':''}`} contentEditable="true">
            {titleCard}
        </div>
       
     <div className="button-grouping">
     <button onClick={setImage}>
          <FaDownload />
          Save Image
          </button>
        <button onClick={resetText}>
          <FaRepeat/>
          Random Quote
          </button>
     </div>

          <div className="title-card-helper-text">
          Tap or click on the text to make your own Fraiser title card.
        </div>
    </div>
  )
}

export default TitleCard