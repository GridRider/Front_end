// import { hotels } from "../../data/hotelData";
import { destinations } from "../../data/destinationData";
import DestinationCard from "./DestinationCard";
import styles from './destination.module.css'

function Destination() {
  return (
    <>
      
      <div
       
        className={styles.destination_card_list_container}
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
