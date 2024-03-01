import Slider from "react-slick";
import LogoImg from "./LogoApi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
        position: "absolute",
        right: "-1px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
        position: "absolute",
        left: "-1px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function LogoSilder() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-fluid padding-logo">
      <Slider {...settings}>
        {LogoImg.map((logo) => {
          const { id, name, image } = logo;
          return (
            <>
              <div className="text-center" key={id}>
                <img src={image} alt={name} />
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default LogoSilder;
