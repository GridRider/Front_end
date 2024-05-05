import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from './destination.module.css'
import placeholder from '../../assets/placeholder1.webp'
import { StarBorderOutlined } from "@mui/icons-material";
import ReactStars from "react-rating-stars-component";


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
      <img src={image?image:placeholder} className={styles.card_image} alt={alt} width={286} height={189}/>
      <div className='destination-main-card-body'>
      <p className={styles.card_text_main}>
          {name}
        </p>
        <p className={styles.card_text}>
          Rating:
          <ReactStars
    // onChange={ratingChanged}
    style={{display:'inline'}}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    count={5}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        </p>
        <div className={styles.card_button_container}>
        <button className="btn1">Show Hotels</button>
        </div>
        
      </div>

    </div>
    </>
  );
}

export default DestinationCard;
