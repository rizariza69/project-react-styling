import React from "react";
import {
  Container,
  Grid,
  Segment,
  Header,
  Image,
  GridColumn
} from "semantic-ui-react";

export class Layout3 extends React.Component {
  render() {
    const borderBottom = {
      borderBottom: "#dedede solid 0.1px"
    };
    const margin = {
      marginBottom: "35px",
      marginTop: "35px"
    };
    return (
      <Container>
        <Segment vertical style={borderBottom}>
          <Grid stackable style={margin}>
            <GridColumn width={6}>
              <Image src="https://placekitten.com/405/405" />
            </GridColumn>
            <GridColumn width={10}>
              <Header as="h1">
                oh yeah, <span>it's that good.</span>
              </Header>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                ullam laboriosam explicabo! Sit aliquid deleniti alias
                repellendus, exercitationem aspernatur? Aliquam minus dicta
                earum excepturi non reprehenderit modi voluptas animi!
                Praesentium?
              </p>
            </GridColumn>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
