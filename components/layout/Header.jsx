import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const onShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <header>
      <div className="header w-full h-[60px] bg-white shadow-lg fixed top-0 z-50 hidden md:block">
        <div className="header__wrapper flex justify-between py-[10px] px-[50px]">
          <div className="header__logo h-full w-[30%]">
            <div className="header__logo__img flex">
              <Link href="/">
                <picture>
                  <img
                    className="h-10"
                    src="/images/Logo.png"
                    alt="Get Fisio Homepage"
                  />
                </picture>
              </Link>
            </div>
          </div>
          <div className="header__nav w-[70%] text-xs  ">
            <div className="header__nav__wrapper w-full h-full flex items-center justify-end">
              <nav className="flex text-get_text justify-end gap-[20px] items-center">
                <div className="header__nav__item ">
                  <Link href="/">About Us</Link>
                </div>
                <div className="header__nav__item">
                  <Link href="/">Services</Link>
                </div>
                <div className="header__nav__item">
                  <Link href="/">News</Link>
                </div>
                <div className="header__nav__item">
                  <Link
                    href="https://blog.getfitwithphysio.com"
                    target="_blank"
                  >
                    Blogs
                  </Link>
                </div>
                <div className="header__nav__item flex gap-[10px] pl-[20px] border-solid border-l-[1px] border-l-get_light_desc">
                  <Link
                    href="https://patient.getfitwithphysio.com"
                    target="_blank"
                    type="button"
                    className=" text-get_text py-[10px] rounded-md font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    href="https://patient.getfitwithphysio.com/auth/register"
                    target="_blank"
                    type="button"
                    className="bg-get_pink text-white px-[20px] py-[10px] rounded-md font-bold"
                  >
                    Daftar
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="header__mobile h-[60px] w-full bg-white shadow-lg fixed top-0 z-50 md:hidden">
        <div className="header__mobile__wrapper flex px-[20px] py-[10px] h-full items-center justify-between">
          <div className="header__mobile__logo">
            <picture>
              <img
                className="w-[30px] aspect-square"
                src="/images/logoonly.png"
                alt="Get Fisio Homepage"
              />
            </picture>
          </div>
          <div
            className="header__mobile__icon flex "
            onClick={() => onShowMobileNav()}
          >
            <picture>
              <img
                className="w-[30px] aspect-square"
                src="/images/hamburger.png"
                alt="hamburger menu"
              />
            </picture>
          </div>
          <div
            className={`header__nav fixed top-[60px] h-screen w-[60vw] right-0 bg-white shadow-lg animation-popup ${
              showMobileNav ? "" : "hidden"
            }`}
          >
            <div className="header__nav__wrapper w-full h-full flex justify-end">
              <nav className="flex text-get_text gap-[40px] flex-col items-end p-[20px] w-full">
                <div className="header__nav__item flex gap-[30px] w-full justify-end pl-[10px] pb-[10px] border-solid border-b-[1px] border-l-get_light_desc">
                  <Link
                    href="https://patient.getfitwithphysio.com"
                    target="_blank"
                    type="button"
                    className=" text-get_text py-[10px] rounded-md font-bold"
                  >
                    Login
                  </Link>
                  <Link
                    href="https://patient.getfitwithphysio.com/auth/register"
                    target="_blank"
                    type="button"
                    className="bg-get_pink text-white px-[20px] py-[10px] rounded-md font-bold"
                  >
                    Daftar
                  </Link>
                </div>
                <div className="header__nav__item ">
                  <Link href="/">About Us</Link>
                </div>
                <div className="header__nav__item">
                  <Link href="/">Services</Link>
                </div>
                <div className="header__nav__item">
                  <Link href="/">News</Link>
                </div>
                <div className="header__nav__item">
                  <Link
                    href="https://blog.getfitwithphysio.com"
                    target="_blank"
                  >
                    Blogs
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
