import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const MyImageGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_01.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_01.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_02.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_02.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_03.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_03.jpg",
    },
  ];

  const handleCustomFullscreen = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div>
      <ImageGallery
        items={images}
        onClick={() => handleCustomFullscreen(lightboxIndex)}
        showPlayButton={false}
        showFullscreenButton={false} // Disable default fullscreen button
        renderCustomControls={() => (
          <button
            onClick={() => handleCustomFullscreen(lightboxIndex)}
            className="custom-fullscreen-button"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1000,
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Fullscreen
          </button>
        )}
        onSlide={(currentIndex) => setLightboxIndex(currentIndex)}
      />
      {isLightboxOpen && (
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={images.map((img) => ({ src: img.original }))}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
};

export default MyImageGallery;
