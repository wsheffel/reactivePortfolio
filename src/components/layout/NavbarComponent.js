import React, { Component } from "react";
import { Link } from "react-router-dom";

class thinkBitch extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      menuBtn: "menu-btn blob yellow menu-btn__add",
      menu: "menu",
      menuNav: "menu-nav",
      menuBranding: "menu-branding",
      navItems: "nav-item"
    };
  }

  toggleMenu() {
    const { showMenu } = this.state;
    if (!showMenu) {
      this.setState({
        showMenu: true,
        menuBtn: "menu-btn close blob red",
        menu: "menu show",
        menuNav: "menu-nav show",
        menuBranding: "menu-branding show",
        navItems: "nav-item show"
      });
    } else {
      this.setState({
        showMenu: false,
        // Pulse effect & 'MENU' text is opnly going to be
        // present until the user finds/ clicks the MENU btn
        menuBtn: "menu-btn blob yellow"
      });
    }
  }

  render() {
    const {
      showMenu,
      menu,
      menuNav,
      menuBranding,
      navItems,
      menuBtn
    } = this.state;

    return (
      <div>
        <header>
          <div className={menuBtn} onClick={this.toggleMenu.bind(this)}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>

          {showMenu === true ? (
            <nav className={menu}>
              <div className={menuBranding}>
                <div className="portrait"></div>
              </div>
              <ul className={menuNav} onClick={this.toggleMenu.bind(this)}>
                <li className={navItems}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/work" className="nav-link">
                    Work
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          ) : null}
        </header>
      </div>
    );
  }
}

export default thinkBitch;
