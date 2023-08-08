import React from "react";
import CardsSection from "./team-components/CardsSection";
import TeamTitle from "./team-components/TeamTitle";

function TeamPage() {
  return (
    <div className="TeamPage">
      <TeamTitle /> <CardsSection />
    </div>
  );
}

export default TeamPage;
