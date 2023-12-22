import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react"; // import useCallback
import './CustomWebcam.css';
const CustomWebcam = () => {
  const webcamRef = useRef(null);

  // created a state variable named imgSrc that will store the image data after a screenshot has been taken:
  const [imgSrc, setImgSrc] = useState(null);

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  // This function will simply set the imgSrc state back to null, thus showing the webcam again:
  const retake = () => {
    setImgSrc(null);
  };
  return (
    <div className="container-cam">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" className="Web-cam" />
      ) : (
        <Webcam className="Webcam-prop" ref={webcamRef} />
      )}
      <div className="btn-container">
        {imgSrc ? (
          <button className="retake-button" onClick={retake}>Retake photo</button>
        ) : (
          <button className="capture-button" onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;