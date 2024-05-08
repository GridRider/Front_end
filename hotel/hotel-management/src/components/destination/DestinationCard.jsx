import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";

function DestinationCard({ name, image, alt }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={alt} width={286} height={189} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>
            Rating:
            <span>
              <ReactStars count={5} size={24} color2={"#ffd700"} />
            </span>
          </p>
        </Card.Text>
        <Button variant="primary">Show Hotels</Button>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;
