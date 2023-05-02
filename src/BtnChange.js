import React from "react";
import { CgArrowsExchange } from "react-icons/cg";

import "./Header.css";

export default function BtnChange() {
  //==============================================================

  const prostoClick = () => {
    const bodyElement = document.body;
    const currentTheme = localStorage.getItem("lightTheme");

    if (currentTheme) {
      bodyElement.classList.toggle("light-theme");
    } else {
      localStorage.setItem("lightTheme");
      bodyElement.classList.toggle("light-theme");
    }
  };

  //==============================================================
  return (
    <button
      type="button"
      class="button icon-button theme-toggle-button btn-position"
      onClick={prostoClick}
    >
      <CgArrowsExchange className="icon_change_btn" />
    </button>
  );
}
