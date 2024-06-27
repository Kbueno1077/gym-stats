import AuthModal from "@/modules/Auth/AuthModal/AuthModal";
import {
  Avatar,
  Button,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import styles from "./settings.module.css";

import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import Spinner from "@/components/Loaders/Spinner";

export default function SettingsDropDown() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const [isOpen, setOpen] = React.useState(false);

  const { data: session, status } = useSession();
  //   const [selectedKeys, setSelectedKeys] = React.useState(new Set([locale]));

  const handleSelection = async (e) => {
    if (e.anchorKey === "logout") {
      handleClose();
      await signOut({ redirect: false });
    }
  };

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dropdown
      backdrop="blur"
      isOpen={isOpen}
      shouldCloseOnBlur={false}
      onClose={() => {
        setOpen(false);
      }}
      closeOnSelect={false}
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <DropdownTrigger onClick={toggleOpen}>
        <Avatar
          size={"md"}
          isBordered
          as="button"
          onClick={toggleOpen}
          className="transition-transform"
          src={session?.user?.image ?? "/noUser.png"}
        />
      </DropdownTrigger>

      <DropdownMenu
        selectionMode="single"
        // selectedKeys={selectedKeys}
        classNames={{ base: "w-[250px]" }}
        onSelectionChange={handleSelection}
        variant="faded"
        aria-label={"Settings"}
      >
        {!session?.user && status === "unauthenticated" && (
          <DropdownSection title={"Session"}>
            <DropdownItem
              classNames={{
                selectedIcon: styles.hiddenSvg,
              }}
              key="login"
            >
              <AuthModal mode="login" />
            </DropdownItem>

            {!session?.user && status === "loading" && (
              <DropdownItem
                classNames={{
                  selectedIcon: styles.hiddenSvg,
                }}
                key="login"
              >
                <Button
                  fullWidth={true}
                  disabled={true}
                  color="primary"
                  variant="flat"
                  aria-label={"Loading"}
                >
                  <Spinner />
                </Button>
              </DropdownItem>
            )}
          </DropdownSection>
        )}

        <DropdownSection title={"Navigation"}>
          <DropdownItem
            key="/"
            // shortcut="⌘N"
            description={"Dashboard"}
            startContent={
              <MdOutlineCollectionsBookmark className={iconClasses} />
            }
          >
            Dashboard
          </DropdownItem>
        </DropdownSection>

        {session?.user && status === "authenticated" && (
          <DropdownSection title={"Session"}>
            <DropdownItem
              key="logout"
              className="text-danger"
              color="danger"
              // shortcut="⌘⇧D"
              description={"logout"}
              startContent={
                <IoIosLogOut className={cn(iconClasses, "text-danger")} />
              }
            >
              {"logout"}
            </DropdownItem>
          </DropdownSection>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
