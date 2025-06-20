import { useRef, useState } from "react";
import { Star } from "react-feather";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="reviews-carousel relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {list.map((item, i) => (
          <SwiperSlide key={"feature-" + i}>
            <div className="review flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/30 p-5 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:border-slate-800 hover:bg-slate-900/80">
              <div>
                <div className="review-author-avatar-r">
                  <img src={item.avatar} alt="" className={item.classima} />
                </div>
                <h4 className="mb-2 text-white">{item.author}</h4>
                <p className="mb-4 text-white/70">{item.organization}</p>
                <p className="font-extralight">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          width="100%"
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
