import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import InventoryItem from "./components/InventoryItem/InventoryItem";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header name="BuyStuff" />
        <InventoryItem name="Shoe" price={5} />
        <InventoryItem name="Sock" price={3} />
      </div>
    );
  }
}

export default App;
