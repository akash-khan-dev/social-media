import { StoriesData } from "./StorieDat";
import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  return (
    <>
      <div className="mt-4 ">
        <div className="mb-5 pb-2 border-b border-line_color ">
          <h3 className="font-gilroyBold text-lg text-black">Stories</h3>
        </div>
        <div className="w-[300px]">
          <Swiper spaceBetween={10} slidesPerView={3}>
            {StoriesData.map((story, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-[95px] h-[150px] rounded-md pt-1 pl-1"
                  style={{
                    background: `url(${story.bgPicture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center ",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-[35px] h-[35px] rounded-full border-2 border-white_100 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={story.picture}
                      alt="storyman"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Stories;
