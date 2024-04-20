import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DestinationCard({name,image,alt}) {
  return (
    <Card style={{ width: "18rem"  }}>
      <Card.Img variant="top" src={image} alt={alt} width={286} height={189}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Rating:
        </Card.Text>
        <Button variant="primary">Show Hotels</Button>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;
