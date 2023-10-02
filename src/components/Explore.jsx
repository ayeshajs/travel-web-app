import {
  img1,
  img10,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../utils/asset";

const Explore = () => {
  const exploreAPI = [
    { imgSrc: img1, location: "Lahore", distance: "30 hour dirve" },
    { imgSrc: img2, location: "Faisalabad", distance: "2.5 hour dirve" },
    { imgSrc: img3, location: "Multan", distance: "4.7 hour drive" },
    { imgSrc: img4, location: "Rawalpindi", distance: "4 hour drive" },
    { imgSrc: img5, location: "Islamabad", distance: "4.9 hour drive" },
    { imgSrc: img6, location: "Muree", distance: "4.5 hour drive" },
    { imgSrc: img7, location: "Nathia Gali", distance: "5.5 hour drive" },
    { imgSrc: img8, location: "Ayubia Gali", distance: "5.1 hour drive" },
    { imgSrc: img9, location: "Bhurban", distance: "5.1 hour drive" },
    { imgSrc: img10, location: "Gilgit", distance: "5.1 hour drive" },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="app-container grid items-center gap-11">
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl text-black font-bold">Explore Near By</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-7">
            {exploreAPI.map((v, i) => (
              <div className="flex items-center gap-5" key={i}>
                <div className="flex items-center">
                  <img
                    src={v.imgSrc}
                    alt={v.location}
                    className="w-20 h-20 sm:h-24 sm:w-24 rounded-2xl"
                  />
                </div>
                <div className="grid items-center gap-1">
                  <h1 className="text-black font-semibold text-lg sm:text-xl">
                    {v.location}
                  </h1>
                  <p className="text-black font-normal text-sm sm:text-base">{v.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
