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
    var slideName = images[index].name; // Get the name of the current slide
    var element = document.querySelector(".image-gallery-fullscreen-button");
    if (slideName === "VideoSlide") {
      if (element) {
        element.style.display = "none";
      }
    } else {
      if (element) {
        element.style.display = "block";
      }
    }
  };

  const images = [
    {
      original:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-nAL-oSEW/w:auto/h:auto/q:auto/id:daf453a9a08c2ec7ab324d9f2cbe0fab/https://p-goetz.de/BMW_MMR_1.jpg",
      thumbnail:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-nAL-oSEW/w:auto/h:auto/q:auto/id:daf453a9a08c2ec7ab324d9f2cbe0fab/https://p-goetz.de/BMW_MMR_1.jpg",
    },
    {
      embedUrl:
        "https://p-goetz.de/wp-content/uploads/2024/12/BMW_MMR_Video1.mp4",
      original:
        "https://mla8wgg4cper.i.optimole.com/co-ZpyQ-KOgCu6df/w:auto/h:auto/q:auto/id:2adbe1b1af04507831c09d16e38fc92c/directUpload/BMW_MMR_Video_Thumbnail.png",
      thumbnail:
        "https://mla8wgg4cper.i.optimole.com/co-ZpyQ-KOgCu6df/w:auto/h:auto/q:auto/id:2adbe1b1af04507831c09d16e38fc92c/directUpload/BMW_MMR_Video_Thumbnail.png",
      renderItem: renderVideo.bind(this),
      name: "VideoSlide",
    },
    {
      original:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-Z_bm9VIr/w:auto/h:auto/q:auto/id:436316c6c9829c0b4da53115f54d4c92/https://p-goetz.de/BMW_MMR_2.jpg",
      thumbnail:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-Z_bm9VIr/w:auto/h:auto/q:auto/id:436316c6c9829c0b4da53115f54d4c92/https://p-goetz.de/BMW_MMR_2.jpg",
    },
    {
      original:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-Jkkjkz9p/w:auto/h:auto/q:auto/id:19189ba1d3cf9b1645b0748eafccba1c/https://p-goetz.de/BMW_MMR_3.jpg",
      thumbnail:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-Jkkjkz9p/w:auto/h:auto/q:auto/id:19189ba1d3cf9b1645b0748eafccba1c/https://p-goetz.de/BMW_MMR_3.jpg",
    },
    {
      original:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-6EY8h-cM/w:auto/h:auto/q:auto/id:138db4e9ba37493992d97cd2f427c694/https://p-goetz.de/BMW_MMR_4.jpg",
      thumbnail:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-6EY8h-cM/w:auto/h:auto/q:auto/id:138db4e9ba37493992d97cd2f427c694/https://p-goetz.de/BMW_MMR_4.jpg",
    },
    {
      original:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-6EY8h-cM/w:auto/h:auto/q:auto/id:138db4e9ba37493992d97cd2f427c694/https://p-goetz.de/BMW_MMR_4.jpg",
      thumbnail:
        "https://mla8wgg4cper.i.optimole.com/AjjxPCk-6EY8h-cM/w:auto/h:auto/q:auto/id:138db4e9ba37493992d97cd2f427c694/https://p-goetz.de/BMW_MMR_4.jpg",
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
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2011 - present"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={<Bs0Circle />}
          >
            {/* Logo in top right Corner */}
            <img
              src="https://mla8wgg4cper.i.optimole.com/AjjxPCk-vuDi2bHE/w:auto/h:auto/q:auto/id:e188739792c80ef545ebff1f35e6ce76/https://p-goetz.de/BMW_MMR_Logo.png"
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

            <h4 className="vertical-timeline-element-subtitle">
              Instructor Side Job@BMW M, Munich
            </h4>
            <p>
              Developed together with BMW M the first Mixed Reality Experience
              for Driving Experience Customers.
            </p>

            {/* Gallery */}
            <ImageGallery
              items={images}
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
            icon=""
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
            icon=""
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
            icon=""
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
            icon=""
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
            icon=""
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
            icon=""
          />
        </VerticalTimeline>
      </div>
    </>
  );
}
