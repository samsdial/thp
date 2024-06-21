import React, { useEffect, useRef } from "react";
// import videoSlow from "../assets/video/emd.webm";
import video from "../assets/video/vd.mp4";

function Videoloop() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <video ref={videoRef} autoplay muted loop className="top-video">
      <source src={video} type="video/mp4" />
    </video>
  );
}
export default Videoloop;
