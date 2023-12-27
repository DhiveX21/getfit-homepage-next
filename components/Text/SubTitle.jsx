import React from "react";

export default function SubTitle({ children, classText = "text-get_desc" }) {
  return <span className={`m-0 font-bold ${classText}`}>{children}</span>;
}
