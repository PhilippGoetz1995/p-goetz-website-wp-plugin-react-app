import "./App.css";
import VerticalTimelineComponent from "./components/VerticalTimelineComponent";

import RevolutionSlider from "./components/RevolutionSlider";

function App() {
  return (
    <div className="App">
      <VerticalTimelineComponent />

      <RevolutionSlider shortcode="[rev_slider alias='option-1']" />
    </div>
  );
}

export default App;
