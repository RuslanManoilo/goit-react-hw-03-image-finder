export const ImageGalleryItem = ({image: {webformatURL, tags}}) => {
    return (
        <li>
            <img src={webformatURL} alt={tags} />
        </li>
    );
};