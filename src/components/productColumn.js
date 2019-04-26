import React from "react";
import {
  Container,
  Grid,
  Segment,
  Header,
  Button,
  Image,
  GridColumn
} from "semantic-ui-react";

export class Product extends React.Component {
  render() {
    const control = {
      marginTop: "40px",
      marginBottom: "40px",
      borderBottom: "#dedede solid 0.1px",
      paddingBottom: "50px",
      paddingTop: "30px"
    };

    const dataProducts = [
      {
        image: `http://placekitten.com/200/200`,
        heading: `Header1`,
        description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
      quia, sed voluptas architecto impedit perferendis dolor
      doloremque reprehenderit minima qui libero iusto itaque harum
      deserunt! Odio voluptas saepe a placeat.`
      },
      {
        image: `http://placekitten.com/200/200`,
        heading: `Header2`,
        description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
      quia, sed voluptas architecto impedit perferendis dolor
      doloremque reprehenderit minima qui libero iusto itaque harum
      deserunt! Odio voluptas saepe a placeat.`
      },
      {
        image: `http://placekitten.com/200/200`,
        heading: `Header3`,
        description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
      quia, sed voluptas architecto impedit perferendis dolor
      doloremque reprehenderit minima qui libero iusto itaque harum
      deserunt! Odio voluptas saepe a placeat.`
      }
    ];
    return (
      <div>
        <Container style={control}>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              {dataProducts.map((data, index) => {
                return (
                  <GridColumn>
                    <Image centered circular size="small" src={data.image} />
                    <Header>{data.heading}</Header>
                    <p>{data.description}</p>
                    <Button basic>View details &raquo;</Button>
                  </GridColumn>
                );
              })}
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
