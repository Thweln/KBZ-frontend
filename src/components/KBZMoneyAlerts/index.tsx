import { SwiperSlide } from "swiper/react";
import CardCarousel from "../CardCarousel";
import GridCard from "../GridCard";
import { mockData } from "../../data/mock";
import ActionButton from "../ActionButton";

const breakpoints = {
  520: {
    slidesPerView: 2,
  },
  750: {
    slidesPerView: 2,
  },
  1300: { slidesPerView: 3 },
};

const KBZMoneyAlerts = () => {
  return (
    <div className="py-12 m-auto w-full">
      <h2 className="text-3xl mb-6 mt-10 font-semibold color-[#082A36] text-center">
        KBZ Money Alerts
      </h2>
      <CardCarousel breakpoints={breakpoints} maxWidth="100%">
        {mockData?.map((data: any) => (
          <SwiperSlide key={data.title}>
            <GridCard data={data} />
          </SwiperSlide>
        ))}
      </CardCarousel>
      <div className="flex justify-center">
        <ActionButton title="Load More" route="/" />
      </div>
    </div>
  );
};

export default KBZMoneyAlerts;
