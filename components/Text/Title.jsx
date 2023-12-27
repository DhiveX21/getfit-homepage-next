import React from "react";

export default function Title({ children, classText = "text-get_blue" }) {
  return <h2 className={`m-0 text-2xl font-bold ${classText}`}>{children}</h2>;
}
