import React, { useContext } from 'react';
import PixabayContext from '../context/PixabayContext';

const Images = () => {
    const { images } = useContext(PixabayContext);

    return (
        <div className="image-gallery">
            {images.map((image) => (
                <div className="item" key={image.id}>
                    <img src={image.largeImageURL} alt={image.tags} />
                </div>
            ))}
        </div>
    );
};

export default Images;
