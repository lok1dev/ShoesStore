import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function CarouselCpn({ imgs }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {imgs.map((img, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={img} alt="img" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

export default CarouselCpn;
