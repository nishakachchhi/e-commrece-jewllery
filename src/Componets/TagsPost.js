function TagsPost() {
  const tagbtn = [
    {
      id: 1,
      name: "Anklets",
    },
    {
      id: 2,
      name: "Backpacks",
    },
    {
      id: 3,
      name: "Belly Chains",
    },
    {
      id: 4,
      name: "Brooches",
    },
    {
      id: 5,
      name: "Charms",
    },
    {
      id: 6,
      name: "Earrings",
    },
    {
      id: 6,
      name: "Fine Watches",
    },
    {
      id: 7,
      name: "Jewelry",
    },
    {
      id: 8,
      name: "Necklaces",
    },
    {
      id: 9,
      name: "Purse & Wallets",
    },
    {
      id: 10,
      name: "Rings",
    },
    {
      id: 11,
      name: "Shoulder Bags",
    },
  ];

  return (
    <div>
      <h3 className="fs-4 fw-bold category-title mb-4">Tags Post</h3>
      {tagbtn.map((btn) => {
        const { id, name } = btn;
        return (
          <button className="btn rounded-pill btn-post" key={id}>
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default TagsPost;
