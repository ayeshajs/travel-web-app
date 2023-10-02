import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import "@splidejs/splide/css/sea-green";

import {
  mImg,
  mImg1,
  mImg10,
  mImg2,
  mImg4,
  mImg5,
  mImg6,
  mImg7,
  mImg8,
  mImg9,
} from "../utils/asset";

const LiveAnyWhere = () => {
  const anyWhereAPI = [
    { mimgSrc: mImg, text: "Swimming Pools" },
    { mimgSrc: mImg1, text: "Western Resturents" },
    { mimgSrc: mImg2, text: "Unique Luxury Homes" },
    { mimgSrc: mImg4, text: "Outer Gateways" },
    { mimgSrc: mImg5, text: "Unique Living Rooms" },
    { mimgSrc: mImg6, text: "Top Hills Homes" },
    { mimgSrc: mImg7, text: "Luxury Living Rooms" },
    { mimgSrc: mImg8, text: "Cheap Living Rooms" },
    { mimgSrc: mImg9, text: "Sea Trips" },
    { mimgSrc: mImg10, text: "Cloniol Appartments" },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="app-container">
          <div className="flex items-center">
            <h1 className="text-4xl text-black font-bold">Live Any Where</h1>
          </div>
          <div>
            <Splide
              options={{
                perPage: 4,
                perMove: 1,
                pagination: false,
                rewind: true,
                autoplay: true,
                type: "loop",
                gap: "2rem",
                breakpoints: {
                  1200: {
                    gap: "1rem",
                  },
                  991: {
                    perPage: 2,
                    gap: "2rem",
                  },
                  550: {
                    perPage: 1,
                    gap: "1rem",
                  },
                },
              }}
            >
              {anyWhereAPI.map((v, i) => (
                <SplideSlide key={i}>
                  <div className="flex items-center overflow-hidden rounded-xl">
                    <img
                      src={v.mimgSrc}
                      alt="img/slide"
                      className="w-full h-[39vh] object-cover rounded-xl"
                    />
                  </div>
                  <div className="grid items-center mt-4 gap-5 justify-items-center text-center">
                    <h1 className="text-black font-medium text-xl">{v.text}</h1>
                    <button
                      type="button"
                      className="bg-slate-900 text-white px-7 py-1.5 rounded-lg active:scale-110 text-sm transition-all cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveAnyWhere;
