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

  render() {
    return (
      <form>
        <label htmlFor="text1">
          <h3></h3>
          <p></p>
        </label>
        <textarea id="text1" onInput={this.onTextInput} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BlogPoster;
