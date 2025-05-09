"use client";

import cn from "@/utility/cn";
import Image, { StaticImageData } from "next/image";
import { routes } from "@/config/routes";
import { toast } from "sonner";
import logMeOut from "@/actions/logMeOut";
import adminNavOptionLogoutIcon from "@public/media/icons/logout.svg";
import ShowLoader from "@/components/misc/ShowLoader";
import { DropdownSelector } from "@/components/ui";
import { useAdminInfo } from "@/contexts/AdminInfo";
import { useState } from "react";

const AdminInfoDropdown = () => {
  // Admin Info
  const adminInfo = useAdminInfo();

  // Show Nav
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Nav options
  const navs: {
    id: string;
    name: string | JSX.Element;
    icon?: StaticImageData;
    className?: string;
    onClick?: () => void;
    disable?: boolean;
  }[] = [
    // Admin Info
    {
      id: "useDetails",
      name: (
        <div className="flex flex-col leading-[1] gap-[0.5rem] ">
          <span className="text-title text-[2rem] truncate">
            {adminInfo?.name}
          </span>
          <span className="text-[1.4rem] text-para truncate">
            {adminInfo?.email}
          </span>
        </div>
      ),
      onClick: () => {},
    },
    // Logout
    {
      id: "logout",
      name: "登出",
      className: "text-[#FF7D7D]",
      icon: adminNavOptionLogoutIcon,
      onClick: async () => {
        // Logging out
        setIsLoggingOut(true);

        // Logout
        const logoutStatus = await logMeOut();

        // If not logged out
        if (!logoutStatus.status) {
          toast.info(logoutStatus.message);
          setIsLoggingOut(false);

          return;
        }

        // Redirect
        if (typeof window != "undefined") {
          window.location.href = routes.auth.url;
        }
      },
    },
  ];

  // Return JSX
  return (
    <>
      <DropdownSelector
        pickerComp={() => (
          <div className="user flex items-center leading-0 gap-[1.5rem] cursor-pointer relative select-none">
            {/* Avatar */}
            <div className="avatar aspect-square w-[4rem] text-[#d6d6d9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 208 208"
                fill="none"
              >
                <path
                  d="M148 96C148 104.702 145.419 113.209 140.585 120.445C135.75 127.681 128.878 133.32 120.838 136.651C112.798 139.981 103.951 140.852 95.416 139.155C86.8808 137.457 79.0408 133.266 72.8873 127.113C66.7338 120.959 62.5432 113.119 60.8454 104.584C59.1477 96.0488 60.019 87.2019 63.3493 79.1619C66.6795 71.122 72.3191 64.2501 79.5549 59.4153C86.7907 54.5806 95.2976 52 104 52C115.665 52.0132 126.849 56.6532 135.098 64.9019C143.347 73.1507 147.987 84.3345 148 96ZM208 104C208 124.569 201.9 144.677 190.473 161.779C179.045 178.882 162.803 192.212 143.799 200.083C124.796 207.955 103.885 210.015 83.7106 206.002C63.5366 201.989 45.0055 192.084 30.4609 177.539C15.9162 162.994 6.01118 144.463 1.99832 124.289C-2.01455 104.115 0.0450006 83.2044 7.91651 64.2009C15.788 45.1974 29.118 28.9548 46.2207 17.5272C63.3234 6.09949 83.4307 0 104 0C131.574 0.0291182 158.009 10.9956 177.507 30.4931C197.004 49.9905 207.971 76.4264 208 104ZM192 104C191.987 92.1553 189.586 80.4349 184.939 69.5396C180.293 58.6443 173.497 48.7979 164.958 40.5893C156.419 32.3808 146.312 25.9786 135.242 21.7656C124.172 17.5527 112.366 15.6155 100.53 16.07C53.43 17.89 15.87 57.12 16 104.25C16.0451 125.705 23.9582 146.399 38.24 162.41C44.0562 153.974 51.4444 146.739 60 141.1C60.7294 140.618 61.5966 140.389 62.4689 140.446C63.3412 140.504 64.1705 140.846 64.83 141.42C75.7018 150.824 89.5956 155.999 103.97 155.999C118.344 155.999 132.238 150.824 143.11 141.42C143.769 140.846 144.599 140.504 145.471 140.446C146.343 140.389 147.211 140.618 147.94 141.1C156.506 146.736 163.905 153.971 169.73 162.41C184.082 146.34 192.011 125.546 192 104Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Toggler */}
            <div className="toggler aspect-[10/5] w-[2rem] transition">
              <svg
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14373 1L5.79164 4.15655C5.39576 4.52934 4.74797 4.52934 4.35209 4.15655L1 1"
                  stroke="#222D32"
                  strokeWidth="1.03031"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
        dropdownOptionsClassName="w-fit max-w-[40rem]"
        options={navs
          .filter((option) => !option.disable)
          .map((option) => ({
            ...option,
            name: option.id,
            customComp: (
              <div
                onClick={option?.onClick}
                className="flex gap-[1rem] p-[1.4rem]"
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={`icon ${option.name}`}
                    className="icon w-[2rem] h-[2rem] group-hover/nav-option:opacity-70 transition"
                  />
                )}
                <div className="nav-option-name line-clamp-1 flex flex-col group-hover/nav-option:opacity-70 transition">
                  <span className={cn("text-[1.4rem]", option.className)}>
                    {option.name}
                  </span>
                </div>
              </div>
            ),
          }))}
      />

      {/* Logout */}
      {isLoggingOut && (
        <ShowLoader fullScreen className="bg-[rgba(255,255,255,0.3)]" />
      )}
    </>
  );
};

export default AdminInfoDropdown;
