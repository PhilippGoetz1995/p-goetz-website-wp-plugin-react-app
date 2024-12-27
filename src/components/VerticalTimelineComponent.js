import { Bs0Circle } from "react-icons/bs";

import { useRef } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    //setGallery1Index(currentIndex);

    const newIndex = currentIndex + 1;
    galleryRef.current.slideToIndex(newIndex);

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

    const gallery_SAPGDP = [
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_01.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_01.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_02.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_02.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_03.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_03.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_04.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_04.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_05.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_05.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_06.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_06.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_07.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_07.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_08.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_08.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_09.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_09.jpg",
      },
      {
        original: "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_10.jpg",
        thumbnail:
          "https://p-goetz.de/wp-content/uploads/2024/12/SAPGDP_10.jpg",
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

  return (
    <>
      <div
        className="content"
        style={{ backgroundColor: "#2c3e50", width: "100%" }}
      >
        <VerticalTimeline>
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
            date="07.2022 - present"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<Bs0Circle />}
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
              alt="Test"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              SAP Garden Digital Ecosystem
            </h3>
            <div class="lableForJob" style={{ backgroundColor: "#130f40" }}>
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner @Red Bull Munich
            </h4>
            <p>
              The SAP Garden Arena is a cutting-edge, multifunctional sports
              venue located in Munich, Germany. Designed to host a variety of
              events, including Red Bull Munich ice Hockey, FC Bayern basketball
              games, and other sport events. The arena combines state-of-the-art
              architecture with advanced digital technologies.
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

            <div class="containerLablesForSkills">
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                AGILE WORK
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                LEADERSHIP
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                TEAM MANAGEMENT
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                CO-INNOVATION
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                DATA ANALYTICS
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                CI/CD
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_SAPGDP}
              ref={gallery3Ref}
              onSlide={() => handleSlideChange(gallery3Ref)}
              showPlayButton={false}
            />
          </VerticalTimelineElement>

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
            icon={<Bs0Circle />}
          >
            {/* Logo in top right Corner */}
            <img
              src="https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Logo.png"
              style={{
                width: "100px",
                right: "15px",
                position: "absolute",
              }}
              alt="Test"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Mixed Reality
            </h3>
            <div class="lableForJob" style={{ backgroundColor: "#2ecc71" }}>
              SIDE JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Project Manager & Instructor @BMW M
            </h4>
            <p>
              World's first Mixed Reality application for a real car driving in
              a virtual world. The goal was to create a unique, engaging
              experience that bridges the gap between physical and digital
              environments, offering drivers and enthusiasts a new way to
              connect with the BMW M4's performance features in both virtual and
              real-world settings.
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

            <div class="containerLablesForSkills">
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                MIXED REALITY
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                AUTOMOTIVE
              </div>
              <div class="lableForJob" style={{ backgroundColor: "#485460" }}>
                AI
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery
              items={gallery_BMW_MMR}
              ref={gallery1Ref}
              showVideo={renderVideo}
              showPlayButton={false}
              onSlide={() => handleSlideChange(gallery1Ref)}
            />
          </VerticalTimelineElement>

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
            date="04.2023 - present"
            iconStyle={{
              background: "rgb(255, 255, 255)",
              color: "rgb(0, 0, 0)",
            }}
            icon={<Bs0Circle />}
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
              alt="Test"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              Red Bull Basement - AI Edition
            </h3>
            <div class="lableForJob" style={{ backgroundColor: "#130f40" }}>
              MAIN JOB
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Digital Ecosystem Owner @Red Bull Munich
            </h4>
            <p>
              Red Bull Basement is a global initiative designed to empower
              students to develop innovative ideas and solutions that tackle
              pressing social, environmental, and technological challenges. It
              provides a platform for young change-makers to collaborate, refine
              their ideas, and bring them to life. The program culminates in a
              global meeting where teams present their concepts to a panel of
              experts, fostering a culture of innovation and forward-thinking
              among the next generation of leaders.
            </p>
            <ul>
              <li>
                🎯 <b>Project Management:</b> Part of the Organizational team
                for Red Bull Basement, ensuring seamless execution and success
                of the event.
              </li>
              <li>
                🛠 <b>Workshop Creation:</b> Designed workshops together with
                Market experts from Microsoft and AMD to inspire and guide
                participants in developing their innovative ideas.
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

            {/* Gallery */}
            <ImageGallery
              items={gallery_RBBasement}
              ref={gallery2Ref}
              onSlide={() => handleSlideChange(gallery2Ref)}
              showVideo={renderVideo}
              showPlayButton={false}
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
