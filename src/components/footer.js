import React from "react";
import { Container, Segment, Grid, GridColumn } from "semantic-ui-react";

export class Footer extends React.Component {
  render() {
    const background = {
      backgroundColor: "#dedede ",
      marginTop: "30px",
      padding: "20px"
    };
    // const display ={
    //   display:"flex",
    //   flexDirection:
    // }

    const fontSize = {
      color: "Black",
      fontSize: "15px"
    };
    return (
      <Container>
        <Segment vertical style={background}>
          <Grid columns={2}>
            <GridColumn style={fontSize}>
              &copy; 2019 Cimz.Corp. · <a href="#root">Privacy</a> ·{" "}
              <a href="#root">Terms</a>
            </GridColumn>
            <GridColumn textAlign="right">
              <a href="#root">Back to top</a>
            </GridColumn>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
