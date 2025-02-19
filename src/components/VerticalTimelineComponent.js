import {
  BsFillRocketTakeoffFill,
  BsCarFrontFill,
  BsFillMortarboardFill,
  BsGlobeAsiaAustralia,
} from "react-icons/bs";

import { PiPlantLight } from "react-icons/pi";

import { TbAugmentedReality2, TbBasketHeart } from "react-icons/tb";

import { MdOutlineDesignServices } from "react-icons/md";

import { IoAnalyticsSharp } from "react-icons/io5";

import { AiOutlineExpand } from "react-icons/ai";

import { useRef, useState, useEffect } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Individual Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

// CSS for the Gallery
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function VerticalTimelineComponent() {
  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <video
          width="100%"
          height="100%"
          controls
          controlsList="nodownload nofullscreen noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={item.original} type="video/mp4" />
        </video>
      </div>
    );
  };

  //Create an array of gallery references
  const galleryRefs = useRef([]);

  //Creating an array of states
  const [lightboxState, setLightboxState] = useState({});
  const [galleryIndexes, setGalleryIndexes] = useState({});
  const [lightboxIndexes, setLightboxIndexes] = useState({});

  const handleGallery = (galleryRef, showLightbox) => {
    /* This function is handling the slide control but also the lighbox control
    1. It gets the current slide index and store it in LightboxIndex which will be used in the Lightbox as Start Image
    2. I set the Indexes for the gallery and for the lightbox
    3. It will be checked if Lightbox should be shown or not
    4. I check if it is a Video slide and hide or show the Fullscreen button
    */

    const currentIndex = galleryRefs.current[galleryRef]?.getCurrentIndex();

    setLightboxIndexes((prev) => ({
      ...prev,
      [galleryRef]: currentIndex, // Store the index of the clicked image
    }));

    setGalleryIndexes((prev) => ({
      ...prev,
      [galleryRef]: currentIndex, // Update the index for the specific gallery
    }));

    //If lightbox is open hide the header
    const headerElement = document.getElementById("header-section");
    if (showLightbox) {
      headerElement.style.display = "none";
    } else {
      headerElement.style.display = "block";
    }

    // The prev contains the previous state of the LightboxState
    setLightboxState((prev) => {
      // Create a copy of the previous state to ensure immutability
      const newState = { ...prev };

      // Option to print an array in a readable way
      //console.table(newState);

      // If openState is explicitly provided (true or false), use that value
      if (showLightbox !== undefined) {
        newState[galleryRef] = showLightbox;
      } else {
        // If openState is not provided, determine the new state value
        // Check if the galleryRefIndex exists in the previous state
        if (prev.hasOwnProperty(galleryRef)) {
          // If it exists, toggle the current state value
          newState[galleryRef] = showLightbox;
        } else {
          // If the key does not exist in the previous state, set it to true by default
          newState[galleryRef] = true;
        }
      }

      // Return the updated state so that it will be saved in "setLightboxState"
      return newState;
    });

    //Here i get the current slide and if it is a video i insert a video player
    var imageGallerySlide = galleryRefs.current[
      galleryRef
    ].imageGallerySlideWrapper.current.querySelector(".image-gallery-slides")
      .children[currentIndex];

    //Execute only if there is a next slide
    if (imageGallerySlide) {
      // Check if there is a video wrapper inside
      var videoBoolean = imageGallerySlide.querySelector(".video-wrapper");
      var fullScreenButton = galleryRefs.current[
        galleryRef
      ].imageGallerySlideWrapper.current.querySelector(
        ".galleryFullScreenIcon"
      );
      if (videoBoolean) {
        fullScreenButton.style.marginTop = "-65px";
        fullScreenButton.style.marginRight = "-3px";
      } else {
        fullScreenButton.style.marginTop = "-45px";
        fullScreenButton.style.right = "10px";
      }
    }
  };

  // Disable the key left and right because it is interferring with other gallerys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.stopPropagation();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const gallery_SAPGDP = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_01.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_01.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/SAPGDP_02.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/SAPGDP_02.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_05.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_05.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_06.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_06.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_07.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_07.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_08.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_08.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_09.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_09.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_10.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_10.jpg",
      loading: "lazy",
    },
  ];

  const gallery_BMW_MMR = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_01.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_01.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_02.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_02.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_03.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_03.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video1.mp4",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video_Thumbnail_PlayButton.jpg",
      type: "video",
      renderItem: renderVideo.bind(this),
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_04.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_04.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_05.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_05.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_06.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_06.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_07.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_07.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_08.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_08.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_09.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_09.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_10.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_10.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_11.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_11.jpg",
      loading: "lazy",
    },
  ];

  const gallery_RBBasement = [
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_01.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_01.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RBBasement_02.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RBBasement_02.jpg",
      loading: "lazy",
    },

    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Video.mp4",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Video_Thubnail.jpg",
      type: "video",
      renderItem: renderVideo.bind(this),
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RBBasement_03.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RBBasement_03.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RBBasement_04.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RBBasement_04.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_05.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_05.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_06.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_06.jpg",
      loading: "lazy",
    },
  ];

  const gallery_RBMixedReality = [
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_1.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_1.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_2.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_2.jpg",
      loading: "lazy",
    },

    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_Video.mp4",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_Video_Thumbnail.jpg",
      type: "video",
      renderItem: renderVideo.bind(this),
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_3.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_3.jpg",
      loading: "lazy",
    },
  ];

  const gallery_BMW_RN = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_1.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_1.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_2.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_2.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_3.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_3.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_4.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_4.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_5.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_5.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_6.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_6.jpg",
      loading: "lazy",
    },
  ];
  const gallery_BMW_Visualizer = [
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_1.png",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_1.png",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_2.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_2.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_3.png",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_3.png",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_4.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_4.jpg",
      loading: "lazy",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_5.png",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/BMWM_Visualizer_5.png",
      loading: "lazy",
    },
  ];

  const gallery_Myfarmbox = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_2.png",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_2.png",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_1.png",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_1.png",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_3.png",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_3.png",
      loading: "lazy",
    },
  ];

  const gallery_DDX = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_1.png",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_1.png",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_2.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_2.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_5.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_5.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_3.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_3.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_4.jpeg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/DDX_4.jpeg",
      loading: "lazy",
    },
  ];

  const gallery_PACINO = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_1.png",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_1.png",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_2.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_2.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_3.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_3.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_4.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_4.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_5.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_5.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_6.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/PACINO_6.jpg",
      loading: "lazy",
    },
  ];

  const gallery_SXD = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/SXD_1.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/SXD_1.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/SXD_2.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/SXD_2.jpg",
      loading: "lazy",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2025/02/SXD_3.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2025/02/SXD_3.jpg",
      loading: "lazy",
    },
  ];

  return (
    <>
      <div
        className="content"
        style={{ backgroundColor: "#2c3e50", width: "100%" }}
      >
        <VerticalTimeline>
          {/* SAP Garden Digital Eco System */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element SAPGardenDigitalEcosystem"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="06.2021 - present"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<BsFillRocketTakeoffFill />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/RedBull_Logo.jpg"
                className="vertical-timeline-element-logo"
                style={{
                  width: "70px",
                }}
                alt="Red Bull Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              SAP Garden Digital Ecosystem
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#130f40" }}
            >
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner
            </h4>
            <p>
              As the Senior Digital Ecosystem Owner for the SAP Garden Project,
              I was responsible for shaping the digital fan experience of this
              cutting-edge, multifunctional sports venue in Munich. The arena
              hosts a variety of events, including Red Bull Munich ice hockey
              and FC Bayern basketball games, integrating state-of-the-art
              architecture with advanced digital technologies to enhance
              engagement and connectivity.
            </p>
            <ul>
              <li>
                🚀 <b>End-to-End Digital Fan Journey:</b> Designed and delivered
                a cohesive fan experience across all digital touchpoints.
              </li>
              <li>
                🤝 <b>Co-Development initiative:</b> Partnered with FC Bayern
                Basketball and SAP to maximize efficiency and learn from each
                other.
              </li>
              <li>
                🎨 <b>Scalable Design System:</b> Created a unified core for
                rapid frontend adaptation across multiple platforms.
              </li>
              <li>
                📊 <b>Data-Driven Insights:</b> Built advanced analytics
                dashboards for informed decision-making.
              </li>
              <li>
                🔄 <b>CI/CD Automation:</b> Streamlined workflows to support
                fast and reliable development across multiple brands and
                touchpoints.
              </li>
              <li>
                🌱 <b>Sustainability Focus:</b> Embedded eco-conscious
                principles throughout the project lifecycle.
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">TEAM MANAGEMENT</div>
              <div className="labelDesign lableForSkills">CO-INNOVATION</div>
              <div className="labelDesign lableForSkills">DATA ANALYTICS</div>
              <div className="labelDesign lableForSkills">CI/CD</div>
              <div className="labelDesign lableForSkills">REACT</div>
              <div className="labelDesign lableForSkills">IOS/ANDROID</div>
              <div className="labelDesign lableForSkills">AWS</div>
              <div className="labelDesign lableForSkills">CONTENTFUL</div>
            </div>
            {/* Gallery */}
            {/* I get via "el" the current element and save it then in the array of refferences/states */}

            <ImageGallery
              showPlayButton={false}
              items={gallery_SAPGDP}
              ref={(el) => (galleryRefs.current["gallery_SAPGDP"] = el)}
              startIndex={galleryIndexes["gallery_SAPGDP"] || 0}
              onClick={() => {
                handleGallery("gallery_SAPGDP", true);
              }}
              onSlide={() => handleGallery("gallery_SAPGDP", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_SAPGDP", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />

            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_SAPGDP"] || false}
              close={() => handleGallery("gallery_SAPGDP", false)}
              slides={gallery_SAPGDP.map((img) => ({ src: img.original }))}
              index={lightboxIndexes["gallery_SAPGDP"]}
            />
          </VerticalTimelineElement>

          {/* Red Bull Basement */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element-RBBasement"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="10.2024 - 12.2024"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<BsFillMortarboardFill />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Logo.png"
                className="vertical-timeline-element-logo"
                style={{
                  width: "70px",
                }}
                alt="Red Bull Basement Logo"
              ></img>
            </div>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Red Bull Basement - AI Edition - Tokyo, Japan
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#130f40" }}
            >
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner
            </h4>
            <p>
              As part of Red Bull Basement, I contributed to a global initiative
              that empowers students to develop innovative ideas and solutions
              addressing pressing social, environmental, and technological
              challenges. The program provides a platform for young
              change-makers to collaborate, refine their ideas, and bring them
              to life. It all culminates in a global world final where teams
              present their concepts to a panel of experts, fostering a culture
              of innovation and forward-thinking among the next generation of
              leaders.
            </p>
            <ul>
              <li>
                🎯 <b>Project Management:</b> Part of the Organizational team
                for Red Bull Basement.
              </li>
              <li>
                🌟 <b>Onsite Operations:</b> Led communication with BMW,
                ensuring alignment on project goals and vision while managing
                expectations and deliverables.
              </li>
              <li>
                🤝 <b>Mentorship:</b> Supported young talents in refining their
                ideas, providing strategic advice to help turn concepts into
                actionable solutions.
              </li>
              <li>
                🌍 <b>Global Engagement:</b> Collaborated with a diverse group
                of innovators from 40 different countries, fostering creativity
                and impactful idea exchange.
              </li>
            </ul>

            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">ENTREPRENEURSHIP</div>
              <div className="labelDesign lableForSkills">SUSTAINABILITY</div>
              <div className="labelDesign lableForSkills">PROTOTYPING</div>
              <div className="labelDesign lableForSkills">STUDENT PROGRAM</div>
              <div className="labelDesign lableForSkills">COLLABORATION</div>
            </div>

            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_RBBasement}
              ref={(el) => (galleryRefs.current["gallery_RBBasement"] = el)}
              startIndex={galleryIndexes["gallery_RBBasement"] || 0}
              onClick={() => {
                handleGallery("gallery_RBBasement", true);
              }}
              onSlide={() => handleGallery("gallery_RBBasement", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_RBBasement", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />

            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_RBBasement"] || false}
              close={() => handleGallery("gallery_RBBasement", false)}
              index={lightboxIndexes["gallery_RBBasement"]}
              plugins={[Video]}
              slides={gallery_RBBasement.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* SXD */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--SAPGardenDigitalEcosystem"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="15.05.2024"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<PiPlantLight />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/RedBull_Logo.jpg"
                className="vertical-timeline-element-logo"
                style={{
                  width: "70px",
                }}
                alt="Red Bull Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Speaker @SXD - Sustainability x Digital
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#130f40" }}
            >
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner
            </h4>
            <p>
              I was invited as a speaker at the SXD (Sustainability x Digital)
              Conference, where sustainability leaders and digital innovators
              came together to explore how technology can drive environmental
              impact. My talk focused on leveraging digital solutions for
              sustainability, highlighting how businesses can integrate
              tech-driven approaches to create measurable environmental change.
            </p>
            <ul>
              <li>
                💡 <b>Explored tech-driven sustainability strategies:</b>
                sharing insights at the intersection of sustainability & digital
                transformation
              </li>
              <li>
                📊 <b>showcased real-world case studies:</b> demonstrating the
                impact of digital tools in sustainability efforts
              </li>
              <li>
                🔗{" "}
                <b>
                  Discussed the role of AI, automation & digital infrastructure:
                </b>
                optimizing sustainable business practices
              </li>
              <li>
                🌍 <b>Global Engagement:</b> Collaborated with a diverse group
                of innovators from 40 different countries, fostering creativity
                and impactful idea exchange.
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">CONFERENCE</div>
              <div className="labelDesign lableForSkills">DIGITAL</div>
              <div className="labelDesign lableForSkills">SUSTAINABILITY</div>
              <div className="labelDesign lableForSkills">AI</div>
              <div className="labelDesign lableForSkills">SUSTAINABILITY</div>
              <div className="labelDesign lableForSkills">GREEN TECH</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_SXD}
              ref={(el) => (galleryRefs.current["gallery_SXD"] = el)}
              startIndex={galleryIndexes["gallery_SXD"] || 0}
              onClick={() => {
                handleGallery("gallery_SXD", true);
              }}
              onSlide={() => handleGallery("gallery_SXD", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_SXD", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_SXD"] || false}
              close={() => handleGallery("gallery_SXD", false)}
              index={lightboxIndexes["gallery_SXD"]}
              plugins={[Video]}
              slides={gallery_SXD.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* DDX */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--SAPGardenDigitalEcosystem"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="15.05.2024"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<MdOutlineDesignServices />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/RedBull_Logo.jpg"
                className="vertical-timeline-element-logo"
                style={{
                  width: "70px",
                }}
                alt="Red Bull Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Speaker @DDX - Innovation & UX Conference
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#130f40" }}
            >
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner
            </h4>
            <p>
              I had the honor of speaking at the "DDX | Innovation & UX"
              conference in Munich, organized in collaboration with
              UnternehmerTUM. The event’s goal was to bring together designers,
              tech experts, and digital leaders to foster networking and fresh
              perspectives on crucial industry topics. Through my talk, I
              contributed insights on the intersection of design, technology,
              and innovation, helping to shape discussions on the future of
              digital product development.
            </p>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">CONFERENCE</div>
              <div className="labelDesign lableForSkills">DESIGN</div>
              <div className="labelDesign lableForSkills">UX</div>
              <div className="labelDesign lableForSkills">AI</div>
              <div className="labelDesign lableForSkills">SUSTAINABILITY</div>
              <div className="labelDesign lableForSkills">DIGITAL</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_DDX}
              ref={(el) => (galleryRefs.current["gallery_DDX"] = el)}
              startIndex={galleryIndexes["gallery_DDX"] || 0}
              onClick={() => {
                handleGallery("gallery_DDX", true);
              }}
              onSlide={() => handleGallery("gallery_DDX", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_DDX", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_DDX"] || false}
              close={() => handleGallery("gallery_DDX", false)}
              index={lightboxIndexes["gallery_DDX"]}
              plugins={[Video]}
              slides={gallery_DDX.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* SAP Garden Mixed Reality */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--RBMixedReality"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="04.2024 - 09.2024"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<TbAugmentedReality2 />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/RedBull_Logo.jpg"
                className="vertical-timeline-element-logo"
                style={{
                  width: "70px",
                }}
                alt="Red Bull Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Mixed Reality Fan Experience
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#130f40" }}
            >
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner
            </h4>
            <p>
              As a Project Manager, I led the development of the world's first
              Mixed Reality fan game in a stadium. Our goal was to create an
              immersive and interactive experience, connecting fans in the arena
              with players on the ice in real-time competition. This innovative
              project redefined fan engagement, bringing stadium audiences and
              stadium closer together than ever before.
            </p>
            <ul>
              <li>
                🔬 <b>Innovated fan engagement:</b> Merging digital
                interactivity with in stadium Experience.
              </li>
              <li>
                🤝 <b>Collaborated with cross-functional teams:</b> including
                developers from different agencies, designers, and sports event
                organizers.
              </li>
              <li>
                📈 <b>Ensured a seamless user experience:</b> Integrating
                cutting-edge Mixed Reality technologies.
              </li>
              <li>
                🚀 <b>Successfully launched the project:</b> Setting a new
                benchmark for stadium entertainment.
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">MIXED REALITY</div>
              <div className="labelDesign lableForSkills">META QUEST</div>
              <div className="labelDesign lableForSkills">
                INTERACTIVE STADIUM
              </div>
              <div className="labelDesign lableForSkills">UNREAL</div>
              <div className="labelDesign lableForSkills">REACT</div>
              <div className="labelDesign lableForSkills">STAGE PRECISION</div>
              <div className="labelDesign lableForSkills">AWS</div>
              <div className="labelDesign lableForSkills">AI</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_RBMixedReality}
              ref={(el) => (galleryRefs.current["gallery_RBMixedReality"] = el)}
              startIndex={galleryIndexes["gallery_RBMixedReality"] || 0}
              onClick={() => {
                handleGallery("gallery_RBMixedReality", true);
              }}
              onSlide={() => handleGallery("gallery_RBMixedReality", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_RBMixedReality", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_RBMixedReality"] || false}
              close={() => handleGallery("gallery_RBMixedReality", false)}
              index={lightboxIndexes["gallery_RBMixedReality"]}
              plugins={[Video]}
              slides={gallery_RBMixedReality.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* BMW M Mixed Reality */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--BMW-MMR"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="04.2023 - present"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<BsCarFrontFill />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Logo.png"
                className="vertical-timeline-element-logo"
                style={{
                  width: "100px",
                }}
                alt="BMW M Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Mixed Reality
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#2ecc71" }}
            >
              SIDE JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Project Manager & Instructor
            </h4>
            <p>
              Together with BMW M I developed the world's first Mixed Reality
              Experience for a real car driving in a virtual world. My goal was
              to create a unique, engaging experience that bridges the gap
              between physical and digital environments, allowing drivers and
              enthusiasts to connect with the BMW M4's performance features in
              both virtual and real-world settings.
            </p>
            <ul>
              <li>
                🎯 <b>Project Management:</b> Development of the world’s first
                Mixed Reality application for Driving Experience Customers
                together with BMW M. Successful GoLive of the project in
                September 2023
              </li>
              <li>
                🏆 <b>Successful GoLive:</b> September 2023 with worldwide
                communication.
              </li>
              <li>
                🚗 <b>Client Relationship Management:</b> Led communication with
                BMW, ensuring alignment on project goals and vision while
                managing expectations and deliverables.
              </li>
              <li>
                🔧 <b>Tech Innovation:</b> Integration of cutting edge hardware
                and software to create a realistic and engaging virtual
                environment.
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">MIXED REALITY</div>
              <div className="labelDesign lableForSkills">AUTOMOTIVE</div>
              <div className="labelDesign lableForSkills">AI</div>
              <div className="labelDesign lableForSkills">INNOVATION</div>
              <div className="labelDesign lableForSkills">UNITY</div>
              <div className="labelDesign lableForSkills">VARJO</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_BMW_MMR}
              ref={(el) => (galleryRefs.current["gallery_BMW_MMR"] = el)}
              startIndex={galleryIndexes["gallery_BMW_MMR"] || 0}
              onClick={() => {
                handleGallery("gallery_BMW_MMR", true);
              }}
              onSlide={() => handleGallery("gallery_BMW_MMR", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_BMW_MMR", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_BMW_MMR"] || false}
              close={() => handleGallery("gallery_BMW_MMR", false)}
              index={lightboxIndexes["gallery_BMW_MMR"]}
              plugins={[Video]}
              slides={gallery_BMW_MMR.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* BMW M Race Navigator */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--BMW-RN"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="06.2020 - 04.2022"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<IoAnalyticsSharp />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Logo.png"
                className="vertical-timeline-element-logo"
                style={{
                  width: "100px",
                }}
                alt="BMW M Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Race Track Data Analytics & Fan Experience
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#2ecc71" }}
            >
              SIDE JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Project Manager & Instructor
            </h4>
            <p>
              As a Project Manager, I collaborated with BMW M and Race Navigator
              to develop a cutting-edge data analytics tool for race track
              performance analysis. The solution provided real-time telemetry
              insights, performance recommendations, and an integrated video
              creation feature, allowing customers to relive their racing
              experience. I also secured a patent for the entire solution,
              marking a significant innovation in motorsport technology. This
              tool not only helped drivers improve their skills but also created
              an unforgettable memory for fans to share.
            </p>
            <ul>
              <li>
                🏁 <b>Enabled in-depth performance analysis:</b> with real-time
                telemetry & AI-driven recommendations.
              </li>
              <li>
                🚀 <b>Secured a patent:</b> underlining its innovative value.
              </li>
              <li>
                🛠️ <b>Designed a user-friendly interface :</b> visualize complex
                race data effortlessly
              </li>
              <li>
                🤝 <b>Worked closely with engineers & data scientists:</b> High
                accuracy & real-time processing environment.
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">MOTORSPORT</div>
              <div className="labelDesign lableForSkills">AUTOMOTIVE</div>
              <div className="labelDesign lableForSkills">AI</div>
              <div className="labelDesign lableForSkills">
                PATENTED TECHNOLOGY
              </div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_BMW_RN}
              ref={(el) => (galleryRefs.current["gallery_BMW_RN"] = el)}
              startIndex={galleryIndexes["gallery_BMW_RN"] || 0}
              onClick={() => {
                handleGallery("gallery_BMW_RN", true);
              }}
              onSlide={() => handleGallery("gallery_BMW_RN", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_BMW_RN", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_BMW_RN"] || false}
              close={() => handleGallery("gallery_BMW_RN", false)}
              index={lightboxIndexes["gallery_BMW_RN"]}
              plugins={[Video]}
              slides={gallery_BMW_RN.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* BMW M Visualizer*/}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--BMW-RN"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="03.2019 - 04.2021"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<BsGlobeAsiaAustralia />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Logo.png"
                className="vertical-timeline-element-logo"
                style={{
                  width: "100px",
                }}
                alt="BMW M Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Individual Visualizer
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#130f40" }}
            >
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Project Manager
            </h4>
            <p>
              As a Project Manager, I was responsible for the development and
              global rollout of the BMW M Individual Visualizer, an advanced
              customization tool that extended the traditional car configurator
              by offering 120+ special colors and personalized seat embroidery.
              I was responsible for launching the tool in 24 countries,
              coordinating with global factories and supply chain teams to
              streamline the ordering process for these exclusive accessories.
              By leveraging data-driven optimization, we enhanced the customer
              journey, making luxury car customization more intuitive and
              accessible worldwide.
            </p>
            <ul>
              <li>
                🌍 <b>Managed global rollout:</b> Across 24 countries, ensuring
                seamless integration into local markets
              </li>
              <li>
                🏭{" "}
                <b>Worked closely with BMW factories & supply chain teams:</b>{" "}
                optimize ordering process
              </li>
              <li>
                📈 <b>Leveraged data-driven insights:</b> enhance the customer
                journey & streamline operations.
              </li>
              <li>
                🚀
                <b>
                  Successfully transformed the premium customization experience:
                </b>
                Setting a new industry benchmark
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">GLOBAL ROLLOUT</div>
              <div className="labelDesign lableForSkills">AUTOMOTIVE</div>
              <div className="labelDesign lableForSkills">VISUALISATION</div>
              <div className="labelDesign lableForSkills">
                PROCESS OPTIMIZATION
              </div>
              <div className="labelDesign lableForSkills">E-COMMERCE</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_BMW_Visualizer}
              ref={(el) => (galleryRefs.current["gallery_BMW_Visualizer"] = el)}
              startIndex={galleryIndexes["gallery_BMW_Visualizer"] || 0}
              onClick={() => {
                handleGallery("gallery_BMW_Visualizer", true);
              }}
              onSlide={() => handleGallery("gallery_BMW_Visualizer", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_BMW_Visualizer", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_BMW_Visualizer"] || false}
              close={() => handleGallery("gallery_BMW_Visualizer", false)}
              index={lightboxIndexes["gallery_BMW_Visualizer"]}
              plugins={[Video]}
              slides={gallery_BMW_Visualizer.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* Myfarmbox */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--BMW-RN"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="04.2020 - 01.2021"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<TbBasketHeart />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2025/02/Myfarmbox_logo.png"
                className="vertical-timeline-element-logo"
                style={{
                  width: "100px",
                }}
                alt="Myfarmbox Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Myfarmbox.de Local Food E-Commerce
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#1e3799" }}
            >
              SIDE PROJECT
            </div>
            <h4 className="vertical-timeline-element-subtitle">Co-Founder</h4>
            <p>
              During the COVID-19 pandemic, I co-founded an online marketplace
              for local food, ensuring that people could still access
              high-quality weekend market products from the comfort of their
              homes. Together with two friends, I worked closely with local
              farmers to create a seamless farm-to-table experience. My role
              focused on all things digital, from developing the e-commerce
              platform to optimizing the supply chain, ensuring a smooth and
              efficient operation that connected local producers with customers.
            </p>
            <ul>
              <li>
                🌍 <b>Founded an online marketplace:</b> bringing local farm
                products directly to customers
              </li>
              <li>
                🛒<b> Developed e-commerce platform:</b> creating an intuitive
                shopping experience
              </li>
              <li>
                🚛 <b>Optimized the supply chain:</b> streamlining logistics and
                delivery for efficiency
              </li>
              <li>
                🚀
                <b>Successfully launched in 5 weeks: </b>
                Made local food accessible again
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">E-COMMERCE</div>
              <div className="labelDesign lableForSkills">SUSTAINABILITY</div>
              <div className="labelDesign lableForSkills">STARTUP</div>
              <div className="labelDesign lableForSkills">DEVELOPMENT</div>
              <div className="labelDesign lableForSkills">LOGISTICS</div>
              <div className="labelDesign lableForSkills">UNTERNEHMERTUM</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_Myfarmbox}
              ref={(el) => (galleryRefs.current["gallery_Myfarmbox"] = el)}
              startIndex={galleryIndexes["gallery_Myfarmbox"] || 0}
              onClick={() => {
                handleGallery("gallery_Myfarmbox", true);
              }}
              onSlide={() => handleGallery("gallery_Myfarmbox", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_Myfarmbox", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_Myfarmbox"] || false}
              close={() => handleGallery("gallery_Myfarmbox", false)}
              index={lightboxIndexes["gallery_Myfarmbox"]}
              plugins={[Video]}
              slides={gallery_Myfarmbox.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          {/* PACINO */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--BMW-RN"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="02.2019 - 10.2021"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<PiPlantLight />}
          >
            {/* Logo in top right Corner */}
            <div className="vertical-timeline-element-logo-container">
              <img
                src="https://p-goetz.de/wp-content/uploads/2025/02/PACINO_Logo.png"
                className="vertical-timeline-element-logo"
                style={{
                  width: "100px",
                }}
                alt="PACINO Logo"
              ></img>
            </div>
            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Sustainable Sunglasses
            </h3>
            <div
              className="labelDesign lableForJob"
              style={{ backgroundColor: "#1e3799" }}
            >
              SIDE PROJECT
            </div>
            <h4 className="vertical-timeline-element-subtitle">Co-Founder</h4>
            <p>
              I co-founded a sustainable startup that produced sunglasses made
              from recycled ocean plastic. Beyond just creating eco-friendly
              eyewear, our mission was to actively clean the ocean—for every
              pair sold, we removed 1 kg of plastic from the sea. I was
              responsible for our e-commerce shop, digital infrastructure, and
              supply chain automation, ensuring a seamless customer experience
              while maximizing our environmental impact.
            </p>
            <ul>
              <li>
                🌊 <b>Co-founded a sustainable startup:</b> turning ocean
                plastic into high-quality sunglasses
              </li>
              <li>
                ⚙️<b> Optimized the digital supply chain:</b> streamlining
                logistics and order fulfillment
              </li>
              <li>
                🚛 <b>Optimized the supply chain:</b> streamlining logistics and
                delivery for efficiency
              </li>
              <li>
                📢
                <b>Raised awareness for ocean pollution: </b>
                Integrating sustainability into branding & storytelling
              </li>
            </ul>
            <div className="containerLablesForSkills">
              <div className="labelDesign lableForSkills">E-COMMERCE</div>
              <div className="labelDesign lableForSkills">SUSTAINABILITY</div>
              <div className="labelDesign lableForSkills">STARTUP</div>
              <div className="labelDesign lableForSkills">SHOPIFY</div>
              <div className="labelDesign lableForSkills">REACT.js</div>
              <div className="labelDesign lableForSkills">UNTERNEHMERTUM</div>
            </div>
            {/* Gallery */}
            <ImageGallery
              showPlayButton={false}
              items={gallery_PACINO}
              ref={(el) => (galleryRefs.current["gallery_PACINO"] = el)}
              startIndex={galleryIndexes["gallery_PACINO"] || 0}
              onClick={() => {
                handleGallery("gallery_PACINO", true);
              }}
              onSlide={() => handleGallery("gallery_PACINO", false)}
              renderFullscreenButton={(onClick, isFullscreen) => (
                <AiOutlineExpand
                  size={35}
                  onClick={() => handleGallery("gallery_PACINO", true)}
                  className="galleryFullScreenIcon"
                />
              )}
            />
            {/* The lightboxState is initially not set therefore should be false if not already once open */}
            <Lightbox
              open={lightboxState["gallery_PACINO"] || false}
              close={() => handleGallery("gallery_PACINO", false)}
              index={lightboxIndexes["gallery_PACINO"]}
              plugins={[Video]}
              slides={gallery_PACINO.map((item) => {
                if (item.original.endsWith(".mp4")) {
                  return {
                    type: "video",
                    sources: [{ src: item.original, type: "video/mp4" }],
                    poster: item.thumbnail, // Thumbnail for video preview
                    width: 1280,
                  };
                }
                return { src: item.original }; // Default for images
              })}
              video={{
                controls: true,
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload nofullscreen noplaybackrate",
              }}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<BsFillMortarboardFill />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
}
