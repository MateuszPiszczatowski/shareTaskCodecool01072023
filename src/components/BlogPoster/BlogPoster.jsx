import { Component } from "react";

class BlogPoster extends Component {
  state = {
    postText: "",
    counter: 0,
  };

  onTextInput = (e) => {
    this.setState({ postText: e.target.value, counter: e.target.textLength });
    console.log(this.state.postText, this.state.counter);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.counter < 100) {
      window.alert("Text too short, type moar");
      return;
    }
    window.alert("Text ready to send");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
        <label htmlFor="text1">
          <h3></h3>
          <p></p>
        </label>
        <textarea id="text1" onInput={this.onTextInput} />
        <input type="submit" value="Submit" disabled={this.state.counter < 100 ? true : false} />
      </form>
    );
  }
}

export default BlogPoster;
