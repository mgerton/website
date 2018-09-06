import React from 'react';
import { Link } from 'gatsby';

import styles from './layout.module.css';

const NavLink = props => (
  <Link to={props.to} className={styles.NavLink}>{props.children}</Link>
);

export default ({ children }) => (
  <>
    <div className={styles.TopBar} />

    <div className={styles.Header}>
      <div className={styles.Logo}>
        {/* <img src="/static/header-logo.png" alt="logo" /> */}
        {/* <img src="/static/square.svg" alt="logo" /> */}
        <div></div>
      </div>

      <nav className={styles.MainNav}>
        <ul className={styles.Menu}>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/on-the-web">On the Web</NavLink></li>
        </ul>
      </nav>

      <nav className={styles.CompactNav}>
        <div className={styles.MenuTrigger}>
          <NavLink to="#">Menu</NavLink>
        </div>

        <div className={styles.NavOverlay}>
          <ul className={styles.CompactMenu}>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/on-the-web">On the Web</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>

    {children}
  </>
);
