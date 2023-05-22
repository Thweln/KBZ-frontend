// import { Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

interface IProps {
  children: any;
  maxWidth?: any;
  breakpoints?: any;
}

const CardCarousel: FunctionComponent<IProps> = ({
  children,
  maxWidth,
  breakpoints,
}) => {
  return (
    <div>
      <div
        className="w-full px-40 py-4 "
        style={{ maxWidth : maxWidth || "100%"}}
      >
        <Swiper
          breakpoints={breakpoints}
          // slidesPerView={4}
          modules={[Pagination, Navigation]}
          navigation
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarousel;
