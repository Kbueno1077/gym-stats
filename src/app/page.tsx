import InfoSection from "@/components/InfoSection/InfoSection";
import ContactUs from "@/sections/Landing/ContactUs/ContactUs";
import Home from "@/sections/Landing/Home/Home";
import Membership from "@/sections/Landing/Membership/Membership";
import { Button } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <div className="w-full bg-secondary px-5">
        <div className="mx-auto max-w-[1024px] pb-5 md:pb-20">
          <Home />
        </div>
      </div>

      <div className="w-full bg-white px-5">
        <div className="mx-auto max-w-[1024px]">
          <InfoSection
            img="/bgsection1.png"
            title="YOUR BODY IS A WORK OF ART IN THE GYM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            background="light"
            ctaBtn={
              <Button radius="sm" size="lg" variant="solid" color="primary">
                Learn More
              </Button>
            }
          />
        </div>
      </div>

      <div className="w-full bg-primarylight px-5">
        <div className="mx-auto max-w-[1024px]">
          <InfoSection
            img="/bgsection2.png"
            title="BUILD TOGETHER OUR LEGENDARY FUTURE"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            inverted
            ctaBtn={
              <Button size="lg" variant="solid" color="primary" radius="sm">
                Get Started For Free
              </Button>
            }
          />
        </div>
      </div>

      <div className="w-full bg-white px-5">
        <div className="mx-auto max-w-[1080px]">
          <Membership />
        </div>
      </div>

      <div className="w-full bg-primarylight px-5">
        <div className="mx-auto max-w-[1080px]">
          <ContactUs />
        </div>
      </div>
    </main>
  );
}
