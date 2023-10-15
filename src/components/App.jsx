import { Component } from "react";
import { fetchImages } from "./Api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";

class App extends Component {
  state = {
    input: '',
    images: [],
    loading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.input !== this.state.input) {
        const newImages = await fetchImages(this.state.input);
        this.setState({images: newImages.hits})
      };
    } catch (error) {
      
    }
  }

  getInput = (value) => {
    this.setState({ input: value })
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar getInput={this.getInput} />
        <ImageGallery images={images} />

        <Loader />
      </div>
    );
  }
};


export default App;