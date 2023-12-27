import React from "react";
import Button from "../Button/Button";

export default function BlockDescRight({
  thumbnail = "/images/cekskor.png",
  title = `Home Care Spesial Get Fisio`,
  desc = `  Layanan datang kerumah hanya dengan daftar dan pesan, Ayo buat
  appointment mu sekarang.`,
  point = ["point1", "point2", "point3", "point4"],
}) {
  return (
    <div className="block-desc-right py-[20px] md:py-[50px]">
      <div className="block-desc-right__wrapper flex  flex-col gap-[30px] md:flex-row md:gap-[10px]">
        <div className="block-desc-right__thumbnail flex justify-center items-center md:w-1/2">
          <picture>
            <img
              className="aspect-square max-h-[300px]"
              src={thumbnail}
              alt=" product detail"
            />
          </picture>
        </div>
        <div className="block-desc-right__content flex flex-col justify-center  text-center gap-[15px] md:w-1/2 md:gap-[10px]">
          <div className="block-desc-right__content__title font-bold text-get_navy text-3xl md:text-2xl">
            <h2>{title}</h2>
          </div>
          <div className="block-desc-right__content__subtitle text-get_desc leading-5 md:text-sm">
            <p>{desc}</p>
          </div>
          <div className="block-desc-right__content__point flex  flex-wrap justify-center gap-x-[20px] md:text-sm">
            {point.map((item) => {
              return (
                <div className="block-desc-right__content__point__item">
                  <span className="flex items-center gap-[10px] text-get_desc font-bold">
                    <img
                      className="w-[15px] aspect-square object-contain"
                      src="/images/check.png"
                      alt="Features"
                    />
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="block-desc-right__content__button flex justify-center">
            <div className="block-desc-right__content__button__wrapper w-1/3">
              <Button
                href="/services/home-care"
                title="Detail"
                classButton="bg-get_pink"
                classText="font-bold text-white md:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
