import "./PolaroidStack.css";
import IMG1 from "/src/assets/images/us/IMG_1094.jpg";
import IMG2 from "/src/assets/images/us/IMG_1226.jpg";
import IMG3 from "/src/assets/images/us/IMG_1342.jpg";
import IMG4 from "/src/assets/images/us/IMG_1459.jpg";
import IMG5 from "/src/assets/images/us/IMG_1537.jpg";
import IMG6 from "/src/assets/images/us/IMG_3527.jpg";
import IMG7 from "/src/assets/images/us/IMG_3627.jpg";
import IMG8 from "/src/assets/images/us/IMG_3843.jpg";

const IMAGES = [
  IMG1,IMG2,IMG3,IMG4,
  IMG5, IMG6, IMG7, IMG8
];

export default function PolaroidGrid() {
  // split first 4 and last 4 for left/right columns
  const leftImages = IMAGES.slice(0, 4);
  const rightImages = IMAGES.slice(4);

  const renderPolaroid = (src) => {
    const rotation = Math.random() * 10 - 5; // random tilt
    const xOffset = Math.random() * 20 - 10; // horizontal random offset
    const yOffset = Math.random() * 20 - 10; // vertical random offset

    return (
      <div
        className="polaroid"
        style={{
          transform: `rotate(${rotation}deg) translate(${xOffset}px, ${yOffset}px)`
        }}
      >
        <div className="polaroid-image">
          <img src={src} alt="" />
        </div>
      </div>
    );
  };

  return (
    <div className="polaroid-container">
      <div className="polaroid-column">{leftImages.map(renderPolaroid)}</div>
      <div className="menu-space"></div> {/* empty center for menu */}
      <div className="polaroid-column">{rightImages.map(renderPolaroid)}</div>
    </div>
  );
}
