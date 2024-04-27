// import { hotels } from "../../data/hotelData";
import { destinations } from "../../data/destinationData";
import DestinationCard from "./DestinationCard";


function Destination() {
  return (
    <>
      
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.destination_id}
            name={destination.name}
            image={destination.img.src}
            alt={destination.img.alt}
          />
        ))}
      </div>

     
    </>
  );
}

export default Destination;
