import { ItemModal } from "components/Modal/Modal";
import { Component } from "react";


class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { webformatURL, tags, largeImageURL } = this.props.image;
        const { isModalOpen } = this.state;
        
        return (
            <div>
                <li onClick={this.openModal}>
                    <img src={webformatURL} alt={tags}/>
                </li>
            
                <ItemModal
                    largeImage={largeImageURL}
                    isModalOpen={isModalOpen}
                    closeModal={this.closeModal}
                />
            </div>
        );
    };
};


export default ImageGalleryItem;