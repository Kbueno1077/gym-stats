import React from "react";
import styles from "./footer.module.css";
import { Divider } from "@nextui-org/react";

function Footer() {
  return (
    <div className="w-full bg-secondary px-5">
      <div className="mx-auto max-w-[1080px] py-10">
        <div className=" flex flex-col gap-10 md:flex-row ">
          <div>
            <div className="w-full">
              <h1 className={styles.footerTitle}>FITNESS</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisl at suscipit aliquet, ipsum augue ornare magna, nec
                placerat tellus libero sit amet tortor. Suspendisse potenti.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-5">
            <h1 className={styles.footerSubtitle}>Company</h1>
            <ul className=" flex  flex-col gap-3">
              <li className="text-xl  text-gray-500">Home</li>
              <li className="text-xl  text-gray-500">About Us</li>
              <li className="text-xl  text-gray-500">Contact</li>
            </ul>
          </div>

          <div className="flex w-full flex-col gap-5">
            <h1 className={styles.footerSubtitle}>Legal</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-xl  text-gray-500">Terms and Conditions</li>
              <li className="text-xl  text-gray-500">Privacy Policy</li>
              <li className="text-xl  text-gray-500">Security and Managment</li>
            </ul>
          </div>

          <div className=" flex w-full flex-col gap-5">
            <h1 className={styles.footerSubtitle}>Follow Us</h1>
          </div>
        </div>
        <div className="my-10">
          <Divider />
          <Divider />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <span className="text-xl text-gray-500">Terms of Use </span>
            <span className="text-xl text-gray-500">Privacy Policy</span>
          </div>

          <div>
            <span className="text-xl text-gray-500">2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
