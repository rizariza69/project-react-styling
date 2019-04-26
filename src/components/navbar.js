import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const menu = {
      backgroundColor: "#dedede ",
      paddingRight: "30px",
      paddingLeft: "30px"
    };
    const font = {
      color: "black",
      textWeight: "bold",
      fontSize: "15px"
    };
    const center = {
      justifyContent: "center",
      width: "200px"
    };

    return (
      <Menu secondary className="navbar" style={menu}>
        <Menu.Item
          style={font}
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          style={font}
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          style={font}
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input style={center} icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            style={font}
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
