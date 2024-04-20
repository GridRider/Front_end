// import { hotels } from "../../data/hotelData";
import { destinations } from "../../data/destinationData";
import DestinationCard from "./DestinationCard";


function Destination() {
  return (
    <>
      {/* <ul>
        {hotels.map((hotel) => (
          <li key={hotel.h_ID}>{hotel.name}</li>
        ))}
      </ul> 
      
        <ul>
          {hotels.filter(hotel=>(hotel.ac===false)).map(hotel1=>(<li key={hotel1.h_ID}>{hotel1.name}</li>))}
        </ul>
       */}
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

      <DestinationCard
        name="Kollam"
        image="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
        alt="Kollam image"
      />
    </>
  );
}

export default Destination;
