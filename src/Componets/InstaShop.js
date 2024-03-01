function InstaShop() {
  const instaShop = [
    {
      id: 1,
      img: "asset/img/insta-1.jpg",
    },
    {
      id: 2,
      img: "asset/img/insta-2.jpg",
    },
    {
      id: 3,
      img: "asset/img/insta-3.jpg",
    },
    {
      id: 4,
      img: "asset/img/insta-4.jpg",
    },
    {
      id: 5,
      img: "asset/img/insta-5.jpg",
    },
    {
      id: 6,
      img: "asset/img/insta-7.jpg",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row insta-box">
          {instaShop.map((int) => {
            const { id, img } = int;
            return (
              <div className="col-lg-2 col-md-4 col-sm-12 col-12 position-relative ">
                <div className="margin pt-4" key={id}>
                  <img src={img} className="w-100" alt="" />
                  <div className="overlay-insta"> </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InstaShop;
