import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
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

  toggleMenu = () => {
    const { showMenu } = this.state;
    if (!showMenu) {
      this.setState({
        showMenu: true,
        menuBtn: "menu-btn close blob red",
        menu: "menu show",
        menuNav: "menu-nav show",
        menuBranding: "menu-branding show",
        navItems: "nav-item show wrapper animated bounceInLeft"
      });
    } else {
      this.setState({
        showMenu: false,
        // Pulse effect & 'MENU' text is only going to be
        // present until the user finds/ clicks the MENU btn
        menuBtn: "menu-btn blob yellow"
      });
    }
  };

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
          <div className={menuBtn} onClick={this.toggleMenu}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
          {showMenu ? (
            <nav className={menu}>
              <div className={menuBranding}>
                <div className="portrait wrapper animated bounceInRight"></div>
              </div>

              <div className={menuNav} onClick={e => e.stopPropagation()}>
                <ul>
                  <li className={navItems}>
                    <Link to="/" className="nav-link" onClick={this.toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li className={navItems}>
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={this.toggleMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li className={navItems}>
                    <Link
                      to="/work"
                      className="nav-link"
                      onClick={this.toggleMenu}
                    >
                      Work
                    </Link>
                  </li>
                  <li className={navItems}>
                    <Link
                      to="/contact"
                      className="nav-link"
                      onClick={this.toggleMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          ) : null}
        </header>
      </div>
    );
  }
}

export default Menu;
