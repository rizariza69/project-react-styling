import React from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Image,
  GridColumn
} from "semantic-ui-react";

export class Layout2 extends React.Component {
  render() {
    const borderBottom = {
      borderBottom: "#dedede solid 0.1px"
    };
    const marginBotom = {
      marginBottom: "35px"
    };

    return (
      <Container>
        <Segment vertical style={borderBottom}>
          <Grid stackable style={marginBotom}>
            <GridColumn width={10}>
              <Header as="h1">
                First featurette heading. <span>It'll blow your mind</span>
              </Header>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti, exercitationem! Placeat eaque sit tempora sapiente
                voluptates dolores iure, similique ipsam nostrum id, quas iusto
                mollitia, libero accusamus. Dignissimos, obcaecati quo.
              </p>
            </GridColumn>
            <GridColumn width={6}>
              <Image src="https://placekitten.com/405/405" />
            </GridColumn>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
