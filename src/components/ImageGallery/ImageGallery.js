import { GalleryItemImage } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageListStyled } from './ImageGallery.styled';

export const ImageGallery = ({ searchImage }) => {
  return (
    <div>
      <ImageListStyled>
        {searchImage.map(item => (
          <GalleryItemImage
            key={item.id}
            item={item}
            // modal={modal}
            // openModal={openModal}
            // closeModal={closeModal}
          />
        ))}
      </ImageListStyled>
    </div>
  );
};
