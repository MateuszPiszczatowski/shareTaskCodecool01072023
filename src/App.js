import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import BlogPoster from "./components/BlogPoster/BlogPoster";
import CommentSection from "./components/CommentSection/CommentSection";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CommentSection />
      </div>
    );
  }
}

export default App;
