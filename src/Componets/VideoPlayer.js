import React from "react";

function VideoPlayer() {
  return (
    <>
      <div className="position-relative video-box">
        <video autoPlay loop muted playsInline className="video">
          <source src="asset/img/Untitled.mp4" type="video/mp4" />
        </video>
        <div className=" position-absolute text-center video-1">
          <div className="text-white">
            <h1 className="display-5 fw-bold">Silver & Gold </h1>
            <h1 className="display-5 fw-bold">Hoop Earrings</h1>
            <p>
              With a range of designs to discover. Shop your favourites here
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
