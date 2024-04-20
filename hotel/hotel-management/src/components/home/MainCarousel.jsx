import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/hotel-slide-1.jpg";
import img2 from "../../assets/hotel-slide-2.jpg";
import img3 from "../../assets/hotel-slide-3.jpg";
import "./home.css";


function MainCarousel() {
  return (
    <Carousel className="carousal-slide1">
      <Carousel.Item interval={1000}>
        <img
          src={img1}
          alt="image1"
          style={{ width: "100%", height: "50vh" }}
        />
        <Carousel.Caption>
          <h3 className="slide1-heading">First slide label</h3>
          <br />
          <p className="slide1-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={img2}
          alt="image2"
          style={{ width: "100%", height: "50vh" }}
        />
        <Carousel.Caption>
          <h3 className="slide2-heading">Second slide label</h3>
          <br />
          <p className="slide2-text">
            Lorem ipsum dolor sit amet, consectetur leprarior amio adipiscing
            elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img3}
          alt="image3"
          style={{ width: "100%", height: "50vh" }}
        />
        <Carousel.Caption>
          <h3 className="slide3-heading">Third slide label</h3>
          <br />
          <p className="slide3-text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
