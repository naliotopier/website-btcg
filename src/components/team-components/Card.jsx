import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Card(props) {
  const [cardPos, setCardPos] = useState(false);

  function flipCard() {
    setCardPos(true);
  }

  function revertCard() {
    setCardPos(false);
  }

  return (
    <div className="card" onMouseOver={flipCard} onClick={flipCard} onMouseLeave={revertCard}>
      <CSSTransition in={cardPos} timeout={1000} classNames="dull-image">
        <div>
          <img className="card-img" src={`images/headshots/${props.imageName}`} alt={`${props.fullName}'s headshot`} />
        </div>
      </CSSTransition>
      <CSSTransition in={cardPos} timeout={1000} classNames="hide-tn">
        <div className="card-title-name">
          <h3 className="card-name">{props.fullName}</h3>
          <h4 className="card-title">
            <em>{props.title}</em>
          </h4>
        </div>
      </CSSTransition>
      <CSSTransition in={cardPos} timeout={1000} classNames="show-bio">
        <div className="my-card-img-overlay">
          <h3 className="card-name">{props.fullName}</h3>
          <h4 className="card-title">
            <em>{props.title}</em>
          </h4>

          <p className="card-text">{props.bio}</p>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Card;
