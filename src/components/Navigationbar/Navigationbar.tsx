"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import styles from "./navigationBar.module.css";

export default function Navigationbar() {
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-secondary"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className={styles.title}>FITNESS</p>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}
