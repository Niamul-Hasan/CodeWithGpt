import Carousel from 'react-bootstrap/Carousel';
import bus from '../Assets/Img/bus.png'
import bird from '../Assets/Img/bird.png'
import car from '../Assets/Img/car.png'


function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bus}
                    alt="First slide"
                    style={{ height: '75vh' }}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bird}
                    alt="Second slide"
                    style={{ height: '75vh' }}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car}
                    alt="Third slide"
                    style={{ height: '75vh' }}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;