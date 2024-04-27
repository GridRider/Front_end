import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from './destination.module.css'
import placeholder from '../../assets/placeholder1.webp'

function DestinationCard({name,image,alt}) {
  return (<>
    {/* <Card style={{ width: "18rem"  }}>
      <Card.Img variant="top" src={image} alt={alt} width={286} height={189}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Rating:
        </Card.Text>
        <Button variant="primary">Show Hotels</Button>
      </Card.Body>
    </Card> */}
    <div className={styles.destination_main_card}>
      <img src={image?image:placeholder} alt={alt} width={286} height={189}/>
      <div className='destination-main-card-body'>
        <p>
          Rating:
        </p>
        <button className="btn-primary">Show Hotels</button>
      </div>

    </div>
    </>
  );
}

export default DestinationCard;
