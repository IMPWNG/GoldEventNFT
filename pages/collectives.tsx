import CollectiveCard from "../components/collective/CollectiveCard";
import collectivesCardData from "../data/CollectivesCardData";

export default function Collectives() {

  return (
    <>
  
          {collectivesCardData.map((d) => (
            <CollectiveCard 
              key={d.collectiveCardTitle}
              collectiveCardTitle={d.collectiveCardTitle}
              collectiveCardDescription={d.collectiveCardDescription}
              collectiveCardImageSrc={d.collectiveCardImageSrc}
              collectiveCardHref={d.collectiveCardHref}
              />
          ))}

    </>
  )
}