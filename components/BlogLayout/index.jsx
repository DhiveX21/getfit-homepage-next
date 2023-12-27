import React from "react";
import BlogLayoutCard from "./BlogLayoutCard";

export default function BlogLayout({
  data = [
    {
      title: "Blog Title",
      description: "Blog Description",
      date: "1 Januari 2023",
      url: "www.google.com",
    },
  ],
}) {
  return (
    <div className="blog-layout w-full pt-[30px]">
      <div className="blog-layout__wrapper relative">
        <div className="blog-layout__list flex justify-center">
          {data.map((item) => (
            <div className="blog-layout__list__item w-1/3">
              <BlogLayoutCard
                title={item.title}
                description={item.description}
                date={item.date}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
