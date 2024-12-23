import { Bs0Circle } from "react-icons/bs";

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
  const handleSlideChange = (index) => {
    var fullScreenVideoButton = document.querySelector(
      ".image-gallery-fullscreen-button"
    );

    var element = document.querySelector(".image-gallery-slides").children[
      index
    ];

    // Check if there is a video wrapper inside
    var videoboolean = element.querySelector(".video-wrapper");

    if (videoboolean) {
      fullScreenVideoButton.style.display = "none";
    } else {
      fullScreenVideoButton.style.display = "block";
    }
  };

  const gallery_BMW_MMR = [
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_01.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_01.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_02.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_02.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_03.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_03.jpg",
    },
    {
      embedUrl:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video1.mp4",
      original:
        "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video_Thumbnail_PlayButton.jpg",
      thumbnail:
        "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video_Thumbnail_PlayButton.jpg",
      renderItem: renderVideo.bind(this),
      name: "VideoSlide",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_04.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_04.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_05.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_05.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_06.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_06.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_07.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_07.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_08.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_08.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_09.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_09.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_10.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_10.jpg",
    },
    {
      original: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_11.jpg",
      thumbnail: "http://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_11.jpg",
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
            className="vertical-timeline-element--work"
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
              src="https://mla8wgg4cper.i.optimole.com/AjjxPCk-vuDi2bHE/w:auto/h:auto/q:auto/id:e188739792c80ef545ebff1f35e6ce76/https://p-goetz.de/BMW_MMR_Logo.png"
              style={{
                width: "100px",
                right: "15px",
                top: "15px",
                position: "absolute",
              }}
              alt="Test"
            ></img>

            {/* Content Text */}
            <h3 className="vertical-timeline-element-title">
              BMW M Mixed Reality
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              SIDE JOB | Project Manager & Instructor @BMW M, Munich
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

            {/* Gallery */}
            <ImageGallery
              items={gallery_BMW_MMR}
              showVideo={renderVideo}
              showPlayButton={false}
              onBeforeSlide={handleSlideChange}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{
              background: "rgb(233, 30, 99)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{
              background: "rgb(233, 30, 99)",
              color: "#fff",
            }}
            icon=""
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            intersectionObserverProps={{
              rootMargin: "0px 0px -40px 0px",
              triggerOnce: false,
            }}
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{
              background: "rgb(233, 30, 99)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "red",
              }}
            >
              TEST
            </div>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
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
