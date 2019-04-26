import React from "react";
import "./App.css";
// import { Container } from "semantic-ui-react";
import Navbar from "./components/navbar";
import { DataCard } from "./components/card";
import { Carousel } from "./components/carousel";
import { Product } from "./components/productColumn";
import { Layout2 } from "./components/layout2";
import { Layout3 } from "./components/layout3";
import { Footer } from "./components/footer";

function App() {
  return (
    <div style={{ backgroundColor: "" }}>
      <Navbar />
      <Carousel />
      <Product />
      <Layout2 />
      <Layout3 />
      <DataCard />
      <Footer />
    </div>
  );
}

export default App;
