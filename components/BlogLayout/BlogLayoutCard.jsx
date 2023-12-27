import Link from "next/link";
import React from "react";

export default function BlogLayoutCard({
  title = "Blog Title",
  description = "Blog Description",
  date = "1 Januari 2023",
  url = "www.google.com",
}) {
  return (
    <Link href={url}>
      <div className="blog-layout-card flex flex-col justify-center p-[25px] gap-[10px] bg-white shadow-lg  rounded-lg mx-[10px] w-full">
        <div className="blog-layout-card__thumbnail h-[150px] flex justify-center">
          <picture>
            <img
              className="h-[150px] object-cover"
              src="/images/logoonly.png"
              alt="Blogs Featured Image"
            />
          </picture>
        </div>
        <div className="blog-layout-card__title font-bold text-get_pink ">
          <h3>{title}</h3>
        </div>
        <div className="blog-layout-card__subtitle text-sm text-get_desc">
          <p>{description}</p>
        </div>
        <div className="blog-layout-card__date text-sm font-bold text-get_navy">
          {date}
        </div>
      </div>
    </Link>
  );
}
