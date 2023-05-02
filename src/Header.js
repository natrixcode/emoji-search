import React, { PureComponent } from "react";
import { CgArrowsExchange } from "react-icons/cg";

import "./Header.css";

export default class Header extends PureComponent {
  toggleTheme = () => {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-theme");
  };

  render() {
    return (
      <>
        <header className="component-header">Emoji Search</header>
        <button
          type="button"
          class="button icon-button theme-toggle-button btn-position"
          onClick={this.toggleTheme}
        >
          <CgArrowsExchange className="icon_change_btn" />
        </button>
      </>
    );
  }
}
