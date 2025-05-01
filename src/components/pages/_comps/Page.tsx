"use client";

import cn from "@/utility/cn";
import AdminInfoDropdown from "./AdminInfoDropdown";
import { useAdminInfo } from "@/contexts/AdminInfo";

type Props = {
  children: React.ReactNode;
  headerComp?: React.FC;
  name: string;
  className?: string;
};

const Page = (props: Props) => {
  // Admin Info
  const adminInfo = useAdminInfo();

  // Return JSX
  return (
    <aside
      id={props.name}
      data-page={props.name}
      data-page-name={props.name}
      className={cn(
        "page w-full h-full max-h-full overflow-y-auto flex flex-col",
        props.className
      )}
    >
      {/* Header */}
      <div className="header bg-white sticky top-0 w-full px-[4rem] py-[1.5rem] flex items-center gap-[2rem] md:gap-x-[5rem] z-[100]">
        {/* Header Content */}
        <div className="header-content w-2/4 grow">
          {props.headerComp && <props.headerComp />}
        </div>

        {/*AdminInfoDropdown */}
        <AdminInfoDropdown />
      </div>

      {/* Content */}
      <div className="content h-2/4 grow w-full overflow-y-auto p-body-padding">
        <div className="wrapper w-full max-md:min-h-fit h-full md:max-h-full flex flex-col">
          {props.children}
        </div>
      </div>
    </aside>
  );
};

export default Page;
