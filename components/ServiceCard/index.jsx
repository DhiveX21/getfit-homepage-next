import React from "react";

export default function ServiceCard({
  thumbnail = "/images/logoonly.png",
  items = [
    {
      icon: "/images/logoonly.png",
      title: "Home Care",
    },
    {
      icon: "/images/logoonly.png",
      title: "On Clinic",
    },
    {
      icon: "/images/logoonly.png",
      title: "TeleFisio",
    },
    {
      icon: "/images/logoonly.png",
      title: "Webinar",
    },
    {
      icon: "/images/logoonly.png",
      title: "Exercise Video",
    },
    {
      icon: "/images/logoonly.png",
      title: "Sports Tools",
    },
  ],
}) {
  return (
    <div className="service-card w-full py-[20px] md:py-[40px]">
      <div className="service-card__wrapper flex justify-between flex-col md:flex-row">
        <div
          className="service-card__thumbnail overflow-hidden rounded-xl bg-blue-400 bg-contain bg-no-repeat bg-center min-h-[300px] md:w-1/2"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <div className="service-card__list md:w-1/2">
          <div className="service-card__list__wrapper flex flex-wrap  p-[10px] md:p-[20px] lg:p-[50px] h-full">
            {items.map((item) => {
              return (
                <div className="service-card__list__item  flex flex-col gap-[3px] items-center w-1/3 md:w-1/4">
                  <div className="service-card__list__item__icon rounded-lg">
                    <picture>
                      <img
                        className="w-full aspect-square object-contain p-[20px] md:p-[10px]"
                        src={item.icon}
                        alt="List Service Item"
                      />
                    </picture>
                  </div>
                  <div className="service-card__list__item__title text-get_desc text-xs  font-bold">
                    <span>{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
