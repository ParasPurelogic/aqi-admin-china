"use client";

import { Divider } from "@/components/elements";
import Logo from "@/components/misc/Logo";
import { routes } from "@/config/routes";
import cn from "@/utility/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, Fragment } from "react";
import Tab from "./Tab";
import { useAdminInfo } from "@/contexts/AdminInfo";
import LogoutButton from "./LogoutButton";

type Props = {
  className?: string;
};

const Index = (props: Props) => {
  // Admin Info
  const adminInfo = useAdminInfo();

  // Pathname
  const pathname = usePathname();

  // Is sidebar opened
  const [isOpen, setIsOpen] = useState(false);

  // Return JSX
  return (
    <>
      {/* Sidebar */}
      <div
        className={cn(
          "sidebar w-fit lg:max-w-[250px] h-full flex flex-col bg-title border-t-[3rem] border-title transition-all z-[998]",
          props.className,
          "max-lg:fixed max-lg:top-0 max-lg:-left-[500vw]",
          isOpen && "max-lg:left-0"
        )}
      >
        {/* Branding */}
        <div className="branding w-full h-fit flex flex-col items-center justify-center">
          {/* Logo */}
          <Link className="w-[8rem]" href={routes.clientDevices.url}>
            <Logo className="w-full" />
          </Link>

          {/* Divider */}
          <Divider
            orientation="hr"
            className="mt-[3rem] text-white opacity-20"
          />
        </div>

        {/* Routes */}
        <div className="routes mt-[3rem] h-[10rem] grow overflow-y-auto [--scrollbarWidth:0]">
          <div className="wrapper h-fit text-white">
            {Object.entries(routes).map(([key, route]) => {
              // Return if auth
              if (route.id == "auth") {
                return null;
              }
              // Return JSX
              return (
                <Fragment key={key}>
                  {/* Option */}
                  {!!route?.children?.length ? (
                    <details
                      className="[&_summary_.tab]:open:bg-primary/10 [&_summary_.expander]:open:rotate-[180deg] [&_*]:select-none"
                      open={pathname.startsWith(route.pathname)}
                    >
                      {/* Summary */}
                      <summary>
                        <Tab
                          name={route.name}
                          isSelected={route.pathname == pathname}
                          iconURL={route.icon}
                          isExpandable
                        />
                      </summary>

                      {/* Content */}
                      <div className="flex flex-col gap-[0.7rem] pt-[0.7rem] pl-[6rem] overflow-hidden">
                        {route.children.map((c, i) => (
                          <Link
                            href={c.url}
                            key={i}
                            className={cn(
                              "bg-[#454A4B] p-[1.5rem_2rem] border-l-[6px] border-transparent hover:border-primary relative",
                              "after:content-[''] after:bg-[#454A4B] after:absolute after:h-[1px] after:w-[3rem] after:left-[-6px] after:-translate-x-full after:top-1/2 after:-translate-y-1/2",
                              "before:content-[''] before:bg-[#454A4B] before:absolute before:h-[200%] before:w-[1px] before:bottom-1/2 before:-left-[calc(6px_+_3rem)]",
                              pathname == c.pathname && "border-primary"
                            )}
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={route.url}>
                      <Tab
                        name={route.name}
                        iconURL={route.icon}
                        isSelected={route.pathname == pathname}
                      />
                    </Link>
                  )}

                  {/* Divider */}
                  <Divider
                    orientation="hr"
                    className="text-white opacity-20 last:hidden"
                  />
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Logout */}
        <LogoutButton />
      </div>

      {/* Hamburger Menu */}
      <div
        className="ham-sidebar lg:hidden fixed right-12 bottom-12 bg-title w-[6rem] aspect-square rounded-full cursor-pointer z-[999] border border-white/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="wrapper relative w-full h-full">
          <span
            className={cn(
              "absolute w-[50%] bg-white h-[2px] rounded-[1px] left-2/4 -translate-x-2/4 transition origin-bottom",
              "top-[35%]",
              isOpen && "top-2/4 -translate-y-2/4 rotate-45"
            )}
          ></span>
          <span
            className={cn(
              "absolute w-[50%] bg-white h-[2px] rounded-[1px] left-2/4 -translate-x-2/4 transition origin-bottom",
              "bottom-[35%]",
              isOpen && "top-2/4 -translate-y-2/4 -rotate-45"
            )}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Index;
