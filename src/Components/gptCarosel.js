import React from 'react';
import { Carousel } from 'react-bootstrap';
import bus from '../Assets/Img/bus.png'
import bird from '../Assets/Img/bird.png'
import car from '../Assets/Img/car.png'

const ExampleCarousel = () => {
    return (
        <Carousel className='d-block w-lg-75 w-sm-100 mx-auto'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bus}
                    alt='BUS'
                    style={{ height: '75vh' }}
                />
                <Carousel.Caption>
                    <h3>Image 1</h3>
                    <p>Description for Image 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bird}
                    alt="BIRD"
                    style={{ height: '75vh' }}
                />
                <Carousel.Caption>
                    <h3>Image 2</h3>
                    <p>Description for Image 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={car}
                    alt="CAR"
                    style={{ height: '75vh' }}
                />
                <Carousel.Caption>
                    <h3>Image 3</h3>
                    <p>Description for Image 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ExampleCarousel;
