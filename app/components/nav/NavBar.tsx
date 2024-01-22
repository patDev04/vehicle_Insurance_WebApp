"use client";
import React, { useState } from "react";
import navStyle from "./page.module.css";
import "../../globals.css";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePathname } from "next/navigation";
import CustomButton from "../utils/CustomButton";

const navMenuLinks = [
  { page: "home", url: "/" },
  { page: "product", url: "/service" },
  { page: "features", url: "/about" },
  { page: "contact", url: "/projects" },
];

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.contactNav}>
        <div className={`${navStyle.container} container`}>
          <Link href={"/"}> 84576 68068</Link>
        </div>
      </div>
      <div className={`${navStyle.navMenuContainer} container`}>
        <div className={navStyle.navMenuRow}>
          <h2 className={navStyle.navlogo}>Car Insurance</h2>
          <ul className={navStyle.navMenu}>
            {navMenuLinks.map((menu: any, idx: number) => (
              <Link
                href={`${menu.url}`}
                className={`${navStyle.itemMenuLabel}, ${navStyle.navItem}`}
                key={idx}>
                <li
                  className={
                    menu.url === currentPath
                      ? `${navStyle.navLink} ${navStyle.active}`
                      : navStyle.navLink
                  }>
                  <p>{menu.page}</p>
                  <KeyboardArrowDownIcon />
                </li>
              </Link>
            ))}
          </ul>
          <CustomButton title="get a quote" href={"/"} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
