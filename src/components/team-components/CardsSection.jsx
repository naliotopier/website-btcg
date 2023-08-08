import React from "react";
import Card from "./Card.jsx";
import membersList from "../../membersList.js";
import advisorsList from "../../advisorsList.js";

function createCard(member) {
  document.title = "BTCG – Meet The Team";

  return (
    <Card
      key={member.id}
      fullName={member.fullName}
      title={member.title}
      imageName={member.imageName}
      bio={member.bio}
    />
  );
}

function CardsSection() {
  return (
    <div>
      <h2>Undergraduate Team:</h2>
      <div className="card-holder">{membersList.map((member) => createCard(member))}</div>

      <h2>Advising Team:</h2>
      <div className="card-holder">{advisorsList.map((advisor) => createCard(advisor))}</div>
    </div>
  );
}

export default CardsSection;
