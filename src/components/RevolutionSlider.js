import React, { useEffect, useState } from "react";

const RevolutionSlider = ({ shortcode }) => {
  const [sliderContent, setSliderContent] = useState("");

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await fetch(
          `https://p-goetz.de/wp-json/custom/v1/slider?shortcode=${encodeURIComponent(
            shortcode
          )}`
        );
        const data = await response.text();
        setSliderContent(data);
      } catch (error) {
        console.error("Error fetching slider content:", error);
      }
    };

    fetchSlider();
  }, [shortcode]);

  return <div dangerouslySetInnerHTML={{ __html: sliderContent }} />;
};

export default RevolutionSlider;
