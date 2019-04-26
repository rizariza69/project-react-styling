import React from "react";
import { Card, Image } from "semantic-ui-react";

export class DataCard extends React.Component {
  render() {
    const center2 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    };
    const center = {
      diplay: "flex",
      alignContent: "center",
      flexDirection: "column",
      marginTop: "50px",
      marginRight: "0"
    };
    const cardStyle = {
      display: "flex",
      flexDirection: "column",
      width: "1000px",
      height: "450px"
      // paddingRight: "20px"
    };

    const cardContent = {
      display: "flex",
      flexDirection: "column",
      marginLeft: "20px"
    };

    const cardHeader = {
      marginBottom: "20px",
      marginTop: "20px",
      fontSize: "20px",
      fontWeight: "bold"
    };

    const cardDescription = {
      textAlign: "justify",
      paddingRight: "20px"
    };

    const date = {
      marginTop: "10px",
      justifyContent: "end"
    };

    const cardData = [
      {
        image: `http://placekitten.com/1000/200`,
        title: `Vacation Hongkong`,
        description: `Hong Kong is the first place abroad that I have traveled to; but
      in that particular trip, what I mainly did was just eating and
      shopping as I accompanied a friend of mine back in university. So
      when I was able to finally come back again this year to do a more
      proper ‘tour’ of the city, I did my best to cover as many
      activities and attractions possible! And today, I am sharing with
      you my 5-day itinerary to Hong Kong (which includes a day trip to
      the nearby city of Macau; it also includes an array of other
      must-dos that you can consider doing if in case you have more days
      to spare or if you have a different travel style). But before I go
      on, I think it’s best that I give you a bit of some background
      about the geographical area of Hong Kong because a lot of people
      actually have this misconception that there’s not much to do
      there, or that there’s not much green at all — two things that are
      absolutely NOT true. First things first, there’s more to the
      well-known urbanised center because 2/3 of the country is actually
      made up of the countryside which is full of countless small
      mountains and several islands.`,
        date: `June 2017`
      },
      {
        image: `http://placekitten.com/1000/200`,
        title: `Vacation Hongkong`,
        description: `Hong Kong is the first place abroad that I have traveled to; but
      in that particular trip, what I mainly did was just eating and
      shopping as I accompanied a friend of mine back in university. So
      when I was able to finally come back again this year to do a more
      proper ‘tour’ of the city, I did my best to cover as many
      activities and attractions possible! And today, I am sharing with
      you my 5-day itinerary to Hong Kong (which includes a day trip to
      the nearby city of Macau; it also includes an array of other
      must-dos that you can consider doing if in case you have more days
      to spare or if you have a different travel style). But before I go
      on, I think it’s best that I give you a bit of some background
      about the geographical area of Hong Kong because a lot of people
      actually have this misconception that there’s not much to do
      there, or that there’s not much green at all — two things that are
      absolutely NOT true. First things first, there’s more to the
      well-known urbanised center because 2/3 of the country is actually
      made up of the countryside which is full of countless small
      mountains and several islands.`,
        date: `June 2017`
      }
    ];

    return (
      <div style={center2}>
        {/* <Container> */}
        {cardData.map((data, index) => {
          return (
            <div style={center}>
              <Card style={cardStyle}>
                <Image src={data.image} />
                <div style={cardContent}>
                  <Card.Content>
                    <Card.Header style={cardHeader}>{data.title}</Card.Header>
                  </Card.Content>
                  <Card.Description style={cardDescription}>
                    {data.description}
                  </Card.Description>
                  <Card.Meta style={date}>
                    <span className="date">{data.date}</span>
                  </Card.Meta>
                </div>
              </Card>
            </div>
          );
        })}
        {/* </Container> */}
      </div>
    );
  }
}
