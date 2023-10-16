import { Component } from "react";
import { fetchImages } from "./Api";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { LoadMoreBtn } from "./Button/Button";

class App extends Component {
  state = {
    input: '',
    images: [],
    page: 1,
    loadMore: false,
    loading: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      console.log('second');
      const { input, page } = this.state;

      this.setState({ loading: true, error: false });

      if (prevState.input !== input || prevState.page !== page) {

        const newImages = await fetchImages(input, page);
        const { hits, totalHits } = newImages;

        this.setState({
          images: [...prevState.images, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / 12 ),
        })

      }
    } catch (error) {

    } 
  }

  getInput = value => {
    console.log('first');
    if (value !== this.state.input) {
      this.setState({
        images: [],
        input: value,
        page: 1,
      })
    }
  }

  getNewPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }))
  };

  render() {
    const { images, loading, loadMore, error } = this.state;
    return (
      <div>
        <Searchbar getInput={this.getInput} />
        {loading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}

        {error && <b>No internet connection!</b>}
        {loadMore && <LoadMoreBtn onLoadMore={this.getNewPage} />}
      </div>
    );
  }
};


export default App;