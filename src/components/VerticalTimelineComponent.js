import {
  Bs0Circle,
  BsFillRocketTakeoffFill,
  BsCarFrontFill,
  BsFillMortarboardFill,
} from "react-icons/bs";

import { TbAugmentedReality2 } from "react-icons/tb";

import { IoAnalyticsSharp } from "react-icons/io5";

import { useRef, useState, useEffect } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Individual Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// CSS for the Gallery
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export default function VerticalTimelineComponent() {
  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={item.embedUrl}
          allowFullScreen
          title="ex"
        />
      </div>
    );
  };

  // Show and hide the Fullscreen Button for the gallery => Video Section
  const handleSlideChange = (galleryRef) => {
    var currentIndex = galleryRef.current.getCurrentIndex();

    // TODO Slide of the Lightbox is not aligned with the Gallery
    //setLightboxIndex1(currentIndex);

    //console.log(currentIndex);

    const newIndex = currentIndex + 1;
    galleryRef.current.slideToIndex(newIndex);

    //Here i get the current slide and if it is a video i insert a video player
    var imageGallerySlide =
      galleryRef.current.imageGallerySlideWrapper.current.querySelector(
        ".image-gallery-slides"
      ).children[currentIndex];

    //Execute only if there is a next slide
    if (imageGallerySlide) {
      // Check if there is a video wrapper inside
      var videoBoolean = imageGallerySlide.querySelector(".video-wrapper");
      var fullScreenButton =
        galleryRef.current.imageGallerySlideWrapper.current.querySelector(
          ".image-gallery-fullscreen-button"
        );
      if (videoBoolean) {
        fullScreenButton.style.display = "none";
      } else {
        fullScreenButton.style.display = "block";
      }
    }
  };

  const gallery1Ref = useRef();
  const gallery2Ref = useRef();
  const gallery3Ref = useRef();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [lightboxIndex1, setLightboxIndex1] = useState(0);
  const [lightboxIndex2, setLightboxIndex2] = useState(0);

  const handleCustomFullscreen1 = (index) => {
    setLightboxIndex1(index);
    setIsOpen1(true);
  };

  const handleCustomFullscreen2 = (index) => {
    setLightboxIndex2(index);
    setIsOpen2(true);
  };

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
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_02.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_02.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_05.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_05.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_06.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_06.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_07.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_07.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_08.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_08.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_09.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_09.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_10.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_10.jpg",
    },
  ];

  const gallery_BMW_MMR = [
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_01.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_01.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_02.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_02.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_03.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_03.jpg",
    },
    {
      embedUrl:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video1.mp4",
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video_Thumbnail_PlayButton.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video_Thumbnail_PlayButton.jpg",
      renderItem: renderVideo.bind(this),
      name: "VideoItem",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_04.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_04.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_05.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_05.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_06.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_06.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_07.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_07.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_08.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_08.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_09.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_09.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_10.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_10.jpg",
    },
    {
      original: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_11.jpg",
      thumbnail: "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_11.jpg",
    },
  ];

  const gallery_RBBasement = [
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_01.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_01.jpg",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_02.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_02.jpg",
    },

    {
      embedUrl:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Video.mp4",
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Video_Thubnail.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Video_Thubnail.jpg",
      renderItem: renderVideo.bind(this),
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_03.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_03.jpg",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_04.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_04.jpg",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_05.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_05.jpg",
    },
    {
      original:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_06.jpg",
      thumbnail:
        "https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_06.jpg",
    },
  ];

  const gallery_RBMixedReality = [
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_1.jpg",
      thumbnail:
        "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_1.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_2.jpg",
      thumbnail:
        "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_2.jpg",
    },

    {
      embedUrl:
        "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_Video.mp4",
      original:
        "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_Video_Thumbnail.jpg",
      thumbnail:
        "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_Video_Thumbnail.jpg",
      renderItem: renderVideo.bind(this),
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_3.jpg",
      thumbnail:
        "http://p-goetz.de/wp-content/uploads/2025/02/RB_MR_Game_3.jpg",
    },
  ];

  const gallery_BMW_RN = [
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_1.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_1.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_2.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_2.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_3.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_3.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_4.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_4.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_5.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_5.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_6.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2025/02/BMWM_RN_6.jpg",
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
            className="vertical-timeline-element--SAPGardenDigitalEcosystem"
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
            <img
              src="http://p-goetz.de/wp-content/uploads/2024/12/RedBull_Logo.jpg"
              style={{
                width: "70px",
                right: "15px",
                top: "15px",
                position: "absolute",
              }}
              alt="Red Bull Logo"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              SAP Garden Digital Ecosystem
            </h3>
            <div className="lableForJob" style={{ backgroundColor: "#130f40" }}>
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner @Red Bull Munich
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
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                AGILE WORK
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                LEADERSHIP
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                TEAM MANAGEMENT
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                CO-INNOVATION
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                DATA ANALYTICS
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                CI/CD
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_SAPGDP}
              ref={gallery3Ref}
              onSlide={() => handleSlideChange(gallery3Ref)}
              onClick={() => handleCustomFullscreen1(lightboxIndex1)}
              showPlayButton={false}
            />

            <Lightbox
              open={isOpen1}
              close={() => setIsOpen1(false)}
              slides={gallery_SAPGDP.map((img) => ({ src: img.original }))}
              index={lightboxIndex1}
              onIndexChange={setLightboxIndex1}
            />
          </VerticalTimelineElement>

          {/* Red Bull Basement */}
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--RBBasement"
            contentStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            contentArrowStyle={{
              borderRight: "12px solid  rgb(255, 255, 255)",
            }}
            date="10.2024 - 11.2024"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<BsFillMortarboardFill />}
          >
            {/* Logo in top right Corner */}
            <img
              src="https://p-goetz.de/wp-content/uploads/2024/12/RBBasement_Logo.png"
              style={{
                width: "70px",
                right: "15px",
                top: "15px",
                position: "absolute",
              }}
              alt="Red Bull Basement Logo"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Red Bull Basement - AI Edition - Tokyo, Japan
            </h3>
            <div className="lableForJob" style={{ backgroundColor: "#130f40" }}>
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner @Red Bull Munich
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
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                ENTREPRENEURSHIP
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                SUSTAINABILITY
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                PROTOTYPING
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                STUDENT PROGRAM
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                COLLABORATION
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_RBBasement}
              ref={gallery2Ref}
              onSlide={() => handleSlideChange(gallery2Ref)}
              showVideo={renderVideo}
              showPlayButton={false}
            />
          </VerticalTimelineElement>

          {/* RB Mixed Reality */}
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
            <img
              src="http://p-goetz.de/wp-content/uploads/2024/12/RedBull_Logo.jpg"
              style={{
                width: "70px",
                right: "15px",
                top: "15px",
                position: "absolute",
              }}
              alt="Red Bull Logo"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Mixed Reality Fan Experience
            </h3>
            <div className="lableForJob" style={{ backgroundColor: "#130f40" }}>
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner @Red Bull Munich
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
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                MIXED REALITY
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                FAN ENGAGEMENT
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                INTERACTIVE STADIUM
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                GAMEFICATION
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                AI
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_RBMixedReality}
              ref={gallery2Ref}
              onSlide={() => handleSlideChange(gallery2Ref)}
              showVideo={renderVideo}
              showPlayButton={false}
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
            <img
              src="https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Logo.png"
              style={{
                width: "100px",
                right: "15px",
                position: "absolute",
              }}
              alt="BMW M Logo"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Mixed Reality
            </h3>
            <div className="lableForJob" style={{ backgroundColor: "#2ecc71" }}>
              SIDE JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Project Manager & Instructor @BMW M
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
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                MIXED REALITY
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                AUTOMOTIVE
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                AI
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                INNOVATION
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_BMW_MMR}
              ref={gallery1Ref}
              showVideo={renderVideo}
              showPlayButton={false}
              onClick={() => handleCustomFullscreen2(lightboxIndex2)}
              onSlide={() => handleSlideChange(gallery1Ref)}
            />
            <Lightbox
              open={isOpen2}
              close={() => setIsOpen2(false)}
              slides={gallery_BMW_MMR.map((img) => ({ src: img.original }))}
              index={lightboxIndex2}
              onIndexChange={setLightboxIndex2}
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
            <img
              src="https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Logo.png"
              style={{
                width: "100px",
                right: "15px",
                position: "absolute",
              }}
              alt="BMW M Logo"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Race Track Data Analytics & Fan Experience
            </h3>
            <div className="lableForJob" style={{ backgroundColor: "#2ecc71" }}>
              SIDE JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Project Manager & Instructor @BMW M
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
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                MOTORSPORT
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                AUTOMOTIVE
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                AI
              </div>
              <div
                className="lableForJob"
                style={{ backgroundColor: "#485460" }}
              >
                PATENTED TECHNOLOGY
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_BMW_RN}
              ref={gallery1Ref}
              showVideo={renderVideo}
              showPlayButton={false}
              onClick={() => handleCustomFullscreen2(lightboxIndex2)}
              onSlide={() => handleSlideChange(gallery1Ref)}
            />
            <Lightbox
              open={isOpen2}
              close={() => setIsOpen2(false)}
              slides={gallery_BMW_MMR.map((img) => ({ src: img.original }))}
              index={lightboxIndex2}
              onIndexChange={setLightboxIndex2}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            iconStyle={{
              background: "rgb(16, 204, 82)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
}
