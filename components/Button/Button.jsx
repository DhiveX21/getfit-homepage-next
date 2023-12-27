import React from "react";
import Link from "next/link";

export default function Button({
  href = "#",
  title = "Button",
  classButton = "bg-get_pink",
  classText = "text-white",
}) {
  return (
    <button className={`w-full px-[20px] py-[5px] rounded-lg ${classButton}`}>
      <Link href={href}>
        <span className={`${classText}`}>{title}</span>
      </Link>
    </button>
  );
}
