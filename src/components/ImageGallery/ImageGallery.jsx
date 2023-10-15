import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
    return (
        <ul>
            {images.map(item => (
                <ImageGalleryItem key={item.id} image={item} />
            ))}
        </ul>
    );
};