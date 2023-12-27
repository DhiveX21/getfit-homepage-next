import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#eeeeee]">
        <div className="footer w-full">
          <div className="footer__desktop w-full">
            <div className="footer__desktop__wrapper flex flex-col w-full px-[20px] md:px-[50px]">
              <div className="footer__desktop__map w-full  py-[20px] ">
                <iframe
                  className="w-full rounded-lg border-solid border-get_pink border-[2px] h-[220px]"
                  title="footer"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.304754248145!2d106.8327312!3d-6.1874272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7250225273d7d32b!2sSAMASTA%20INTEGRATED%20MEDICAL%20CENTER!5e0!3m2!1sid!2sid!4v1651912425781!5m2!1sid!2sid"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="footer__desktop__content flex justify-around text-center flex-col-reverse md:flex-row">
                <div className="footer__desktop__content__contact flex flex-col items-center w-full p-[20px] md:w-1/3">
                  <div className="footer__desktop__content__contact__title">
                    <h2 className="text-get_text text-sm font-bold">
                      Kontak Kami
                    </h2>
                  </div>
                  <div className="footer__desktop__content__contact__desc flex items-center h-full p-[30px]">
                    <p className="text-get_pink text-xs font-bold">
                      0895619258715
                    </p>
                  </div>
                </div>
                <div className="footer__desktop__content__address flex flex-col items-center p-[20px] border-y-2 border-x-0 border-get_pink w-full md:w-1/3 md:border-x-2 md:border-y-0">
                  <div className="footer__desktop__content__address__title">
                    <h2 className="text-get_text text-sm font-bold">Alamat</h2>
                  </div>
                  <div className="footer__desktop__content__address__desc flex items-center h-full p-[30px]">
                    <p className="text-get_pink text-xs font-bold">
                      Jl. Johar No.1A, RT.5/RW.3, Gondangdia, Kec. Menteng, Kota
                      Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
                    </p>
                  </div>
                </div>
                <div className="footer__desktop__content__social flex flex-col items-center p-[20px] w-full md:w-1/3">
                  <div className="footer__desktop__content__social__title">
                    <h2 className="text-get_text text-sm font-bold">social</h2>
                  </div>
                  <div className="footer__desktop__content__social__wrapper flex items-center h-full p-[30px] gap-[10px]">
                    {/* <div className="footer__desktop__content__social__item">
                      <a
                        href="https://www.instagram.com/getfitwithphysio/"
                        target="_blank"
                      >
                        <picture>
                          <img src="/images/youtube.png" alt="youtube" />
                        </picture>
                      </a>
                    </div> */}
                    <div className="footer__desktop__content__social__item">
                      <a
                        href="https://www.tiktok.com/@getfitwithphysio"
                        target="_blank"
                      >
                        <picture>
                          <img
                            className="w-[30px]"
                            src="/images/tiktok.png"
                            alt="tiktok"
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <a
                        href="https://www.linkedin.com/company/get-fit-with-physio/"
                        target="_blank"
                      >
                        <picture>
                          <img
                            className="w-[30px]"
                            src="/images/linkedin.png"
                            alt="linkedin"
                          />
                        </picture>
                      </a>
                    </div>
                    {/* <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/twitter.png" alt="twitter" />
                      </picture>
                    </div> */}
                    <div className="footer__desktop__content__social__item">
                      <a
                        href="https://www.facebook.com/getfitwithphysio/"
                        target="_blank"
                      >
                        <picture>
                          <img
                            className="w-[30px]"
                            src="/images/facebook.png"
                            alt="facebook"
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <a
                        href="https://www.instagram.com/getfitwithphysio/"
                        target="_blank"
                      >
                        <picture>
                          <img
                            className="w-[30px]"
                            src="/images/instagram.png"
                            alt="instagram"
                          />
                        </picture>
                      </a>
                    </div>
                    {/* <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/telegram.png" alt="telegram" />
                      </picture>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="footer__desktop__copyright w-full">
                <div className="footer__desktop__copyright__wrapper flex justify-center p-[20px]">
                  <div className="footer__desktop__copyright__text">
                    <h2 className="text-get_desc text-sm font-bold">
                      Copyright @ GetfitWithPhysio 2022
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
