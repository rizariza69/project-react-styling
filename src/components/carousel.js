import React from "react";
import Slider from "react-slick";
import { Header, Segment, Container, Button } from "semantic-ui-react";

export class Carousel extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const toBigger = {
      height: "300px",
      paddingTop: "50px"
    };

    const dataCarousel = [
      {
        title: `Example Headline`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Adipisci necessitatibus, ea sit praesentium, iure quaerat hic
        ullam nam impedit minima eum recusandae nobis exercitationem
        aspernatur assumenda doloribus nesciunt repudiandae? Inventore?`
      },
      {
        title: `Example Headline2`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Adipisci necessitatibus, ea sit praesentium, iure quaerat hic
        ullam nam impedit minima eum recusandae nobis exercitationem
        aspernatur assumenda doloribus nesciunt repudiandae? Inventore?`
      },
      {
        title: `Example Headline3`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Adipisci necessitatibus, ea sit praesentium, iure quaerat hic
        ullam nam impedit minima eum recusandae nobis exercitationem
        aspernatur assumenda doloribus nesciunt repudiandae? Inventore?`
      },
      {
        title: `Example Headline4`,
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Adipisci necessitatibus, ea sit praesentium, iure quaerat hic
        ullam nam impedit minima eum recusandae nobis exercitationem
        aspernatur assumenda doloribus nesciunt repudiandae? Inventore?`
      }
    ];
    return (
      <div>
        <Slider {...settings}>
          {dataCarousel.map((data, index) => {
            return (
              <div>
                <Segment inverted vertical textAlign="center">
                  <Container text className="active" style={toBigger}>
                    <Header inverted as="h1">
                      {data.title}
                    </Header>
                    <p>{data.description}</p>
                    <Button primary size="huge">
                      Sign up today
                    </Button>
                  </Container>
                </Segment>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
