import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./hotelCard.css";
import img1 from "../../assets/hotel-slide-1.jpg";
import img2 from "../../assets/hotel-slide-2.jpg";
import img3 from "../../assets/hotel-slide-3.jpg";
function HotelCard() {
  return (
    <div className="card-main-container">
      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img1}
          alt="image1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title> GRAND HOTEL</Card.Title>
          <Card.Text> helloo </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img2}
          alt="image2"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>GOLDEN TEAK</Card.Title>
          <Card.Text>
         hello
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img3}
          alt="image3"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>VILLAGE VALLEY</Card.Title>
          <Card.Text>
            HJGJ
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img1}
          alt="image4"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img2}
          alt="image5"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img1}
          alt="image6"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img3}
          alt="image7"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className="card-1" style={{ width: "260px", height: "180px" }}>
        <Card.Img
          variant="top"
          src={img3}
          alt="image8"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HotelCard;
