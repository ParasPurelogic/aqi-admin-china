"use client";

import { SearchBar } from "@/components/elements";
import { DropdownSelector } from "@/components/ui";
import { useState } from "react";
import Table from "./Table";
import { Plan, UserDevice } from "@/fetch-data/Types";
import dynamic from "next/dynamic";
import ShowLoader from "@/components/misc/ShowLoader";

type Props = {
  devices: UserDevice[];
  plans: Plan[];
};

// Filter by device online status options
const deviceOnlineOptions = [
  {
    id: "all",
    name: "在线状态：全部",
  },
  {
    id: "online",
    name: "在线状态：在线",
  },
  {
    id: "offline",
    name: "在线状态：离线",
  },
];

// DevicesAnalysis Comp
const DevicesAnalysis = dynamic(() => import("./DevicesAnalysis"), {
  loading: () => <ShowLoader fullScreen />,
});

// Filter by licence expiry Options
const licenceExpiryOptions = [
  {
    id: "all",
    name: "按许可证筛选 - 全部",
  },
  {
    id: "expired",
    name: "已过期",
  },
  {
    id: "7days",
    name: "7天内到期",
  },
  {
    id: "15days",
    name: "15天内到期",
  },
  {
    id: "30days",
    name: "30天内到期",
  },
];

const Index = (props: Props) => {
  // Flags
  const [flags, setFlags] = useState({
    searchTerm: "",
    sortByDeviceLicenceExpiryOption: licenceExpiryOptions[0],
    sortByDeviceOnlineStatusOption: deviceOnlineOptions[0],
    showAnalyzedDevices: false,
  });

  // Return JSC
  return (
    <div className="content h-[50vh] grow flex flex-col w-full">
      {/* Header */}
      <div className="header flex items-center flex-wrap gap-[1.5rem] p-[2.5rem_3rem] z-[2] border-b text-title">
        {/* Heading */}
        <span className="heading bg-white block grow w-fit font-extrabold text-[2.5rem] leading-[1]">
          客户端设备
        </span>

        {/* Search */}
        <SearchBar
          onSearch={(term) => setFlags({ ...flags, searchTerm: term })}
          onClear={() => setFlags({ ...flags, searchTerm: "" })}
        />

        {/* Filter By Device Online Status */}
        <DropdownSelector
          selectedOption={deviceOnlineOptions[0]}
          options={deviceOnlineOptions}
          onSelect={(option) => {
            setFlags({ ...flags, sortByDeviceOnlineStatusOption: option });
          }}
        />

        {/* Filter By Licence Expiry */}
        <DropdownSelector
          pickerText="按许可证筛选"
          selectedOption={licenceExpiryOptions[0]}
          options={licenceExpiryOptions}
          onSelect={(option) => {
            setFlags({ ...flags, sortByDeviceLicenceExpiryOption: option });
          }}
        />

        {/* Devices Analysis */}
        <div
          className="devices-analysis cursor-pointer text-primary underline sm:w-[11ch] text-center font-bold"
          onClick={() => setFlags({ ...flags, showAnalyzedDevices: true })}
        >
          查看设备分析
        </div>
      </div>

      {/* Content */}
      <div className="content w-full h-2/4 grow">
        <Table
          devices={(() => {
            // Devices
            let devices = props.devices;

            // Filter by device's online status
            if (flags.sortByDeviceOnlineStatusOption?.id) {
              // If filtered for online devices
              if (flags.sortByDeviceOnlineStatusOption.id == "online") {
                devices = devices.filter((device) => !!device.isOnline);
              }
              // If filtered for offline devices
              else if (flags.sortByDeviceOnlineStatusOption.id == "offline") {
                devices = devices.filter((device) => !!!device.isOnline);
              }
            }

            // Filter by device's licence expiry
            if (flags.sortByDeviceLicenceExpiryOption?.id != "all") {
              // If expired selected
              if (flags.sortByDeviceLicenceExpiryOption.id == "expired") {
                devices = devices.filter(
                  (device) => device?.license_info?.licenseStatus == "expired"
                );
              }

              // If expiring in 7 days selected
              else if (flags.sortByDeviceLicenceExpiryOption.id == "7days") {
                devices = devices.filter(
                  (device) =>
                    (device?.license_info?.remainingDays ?? Infinity) <= 7
                );
              }
              // If expiring in 15 days selected
              else if (flags.sortByDeviceLicenceExpiryOption.id == "15days") {
                devices = devices.filter(
                  (device) =>
                    (device?.license_info?.remainingDays ?? Infinity) <= 15
                );
              }
              // If expiring in 30 days selected
              else if (flags.sortByDeviceLicenceExpiryOption.id == "30days") {
                devices = devices.filter(
                  (device) =>
                    (device?.license_info?.remainingDays ?? Infinity) <= 30
                );
              }
            }

            // Filter by search term
            if (flags.searchTerm) {
              // Term
              const term = flags.searchTerm.toLowerCase();
              // Filter
              devices = devices.filter((device) =>
                `${device.user_id} ${device.email} ${device.serialNo} ${device.last_updated}`
                  ?.toLowerCase()
                  ?.includes(term)
              );
            }

            // Return devices
            return devices;
          })()}
          plans={props.plans}
        />
      </div>

      {/* Show Analyzed Devices Popup */}
      {flags.showAnalyzedDevices && (
        <DevicesAnalysis
          onClose={() => setFlags({ ...flags, showAnalyzedDevices: false })}
          onFilter={(option: (typeof licenceExpiryOptions)[0]) =>
            setFlags({ ...flags, sortByDeviceLicenceExpiryOption: option })
          }
          selectedSortByDeviceLicenceExpiryOption={
            flags.sortByDeviceLicenceExpiryOption
          }
          devices={(() => {
            // Devices
            let devices = props.devices;

            // Filter by device's online status
            if (flags.sortByDeviceOnlineStatusOption?.id) {
              // If filtered for online devices
              if (flags.sortByDeviceOnlineStatusOption.id == "online") {
                devices = devices.filter((device) => !!device.isOnline);
              }
              // If filtered for offline devices
              else if (flags.sortByDeviceOnlineStatusOption.id == "offline") {
                devices = devices.filter((device) => !!!device.isOnline);
              }
            }

            // Filter by device's licence expiry
            if (flags.sortByDeviceLicenceExpiryOption?.id != "all") {
              // If expired selected
              if (flags.sortByDeviceLicenceExpiryOption.id == "expired") {
                devices = devices.filter(
                  (device) => device?.license_info?.licenseStatus == "expired"
                );
              }

              // If expiring in 7 days selected
              else if (flags.sortByDeviceLicenceExpiryOption.id == "7days") {
                devices = devices.filter(
                  (device) =>
                    (device?.license_info?.remainingDays ?? Infinity) <= 7
                );
              }
              // If expiring in 15 days selected
              else if (flags.sortByDeviceLicenceExpiryOption.id == "15days") {
                devices = devices.filter(
                  (device) =>
                    (device?.license_info?.remainingDays ?? Infinity) <= 15
                );
              }
              // If expiring in 30 days selected
              else if (flags.sortByDeviceLicenceExpiryOption.id == "30days") {
                devices = devices.filter(
                  (device) =>
                    (device?.license_info?.remainingDays ?? Infinity) <= 30
                );
              }
            }

            // Filter by search term
            if (flags.searchTerm) {
              const term = flags.searchTerm.toLowerCase();

              // Filter
              devices = devices.filter((device) => {
                // Search by user id
                if (String(device?.user_id) == term) return true;
                // Search by user email
                else if (device?.email?.toLowerCase()?.includes(term))
                  return true;
                // Search by device id
                else if (device?.serialNo?.toLowerCase()?.includes(term))
                  return true;
              });
            }

            // Return devices
            return devices;
          })()}
          plans={props.plans}
        />
      )}
    </div>
  );
};

export default Index;
