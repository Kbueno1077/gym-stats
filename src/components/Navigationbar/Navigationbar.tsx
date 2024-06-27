"use client";

import React from "react";
import {
  Button,
  ButtonGroup,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import styles from "./navigationBar.module.css";
import SettingsDropDown from "@/components/SettingsDropDown/SettingsDropDown";

import { HiSearch } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { MdSort } from "react-icons/md";

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

      <NavbarContent justify="end">
        {/* <ButtonGroup>
          <Button
            isIconOnly
            color="primary"
            variant="faded"
            aria-label="Search"
          >
            <HiSearch />
          </Button>

          <Button
            isIconOnly
            color="primary"
            variant="faded"
            aria-label="Filter"
          >
            <CiFilter />
          </Button>

          <Button isIconOnly color="primary" variant="faded" aria-label="Sort">
            <MdSort />
          </Button>
        </ButtonGroup> */}

        <div className="ml-[5px]">
          <SettingsDropDown />
        </div>
      </NavbarContent>
    </Navbar>
  );
}
