import { useState } from 'react';

const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFC107"%3E%3Cpath d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/%3E%3C/svg%3E';

const ImageGallery = ({ images = [], alt }) => {
  const safeImages = images.length > 0 ? images : [fallbackImage];
  const [activeImage, setActiveImage] = useState(safeImages[0]);

  return (
    <div>
      <div className="mb-3 h-64 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={activeImage}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.src = fallbackImage;
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {safeImages.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`h-16 overflow-hidden rounded-md border-2 bg-gray-100 transition-colors ${
              activeImage === image ? 'border-secondary' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={alt}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = fallbackImage;
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
