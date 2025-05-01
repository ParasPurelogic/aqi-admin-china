"use client";

import { Plan, UserDevice } from "@/fetch-data/Types";
import Page from "../_comps/Page";
import Content from "./Content";
import formatNumber from "@/utility/formatNumber";
import { routes } from "@/config/routes";

type Props = {
  devices: UserDevice[];
  plans: Plan[];
};

const Index = (props: Props) => {
  // Online Devices
  const onlineDevices = (props?.devices ?? []).reduce(
    (acc, dev) => (dev?.isOnline ? acc + 1 : acc),
    0
  );

  // Return JSX
  return (
    <Page
      name={routes.clientDevices.pathname}
      headerComp={() => (
        <div className="devices-status flex items-center flex-wrap gap-y-[1rem] gap-x-[3rem] w-full md:justify-end leading-[1]">
          {/* All Devices */}
          <div className="flex gap-[1.5rem] items-center font-bold text-[2rem]">
            <span>所有设备:</span>
            <span className="text-title font-extrabold">
              {formatNumber((props?.devices ?? []).length)}
            </span>
          </div>

          {/* Online Devices */}
          <div className="flex gap-[1.5rem] items-center font-bold text-[2rem]">
            <span className="aspect-square rounded-full w-[1.7rem] bg-online"></span>
            <span>在线设备:</span>
            <span className="text-title font-extrabold">
              {formatNumber(onlineDevices)}
            </span>
          </div>

          {/* Offline Devices */}
          <div className="flex gap-[1.5rem] items-center font-bold text-[2rem]">
            <span className="aspect-square rounded-full w-[1.7rem] bg-offline"></span>
            <span>离线设备:</span>
            <span className="text-title font-extrabold">
              {formatNumber((props?.devices ?? []).length - onlineDevices)}
            </span>
          </div>
        </div>
      )}
    >
      <div className="content w-full grow flex flex-col gap-[2rem] min-h-[50vh] h-2/4 rounded-[2rem] bg-white overflow-hidden">
        <Content devices={props.devices} plans={props.plans} />
      </div>
    </Page>
  );
};

export default Index;
