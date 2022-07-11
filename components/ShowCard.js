import React, {useState} from "react";

function Show({show}) {
  //const [showQuote, setShowQuote] = useState(false);

  function handleChange(){
    setShowQuote(!showQuote)
  }
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={"RENDER PERSON NAME"}
          className="card__image"
          onClick={handleChange}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{showQuote ? planeteer.quote : planeteer.bio}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>
              {
                planeteer.fromUSA ? "USA-based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
