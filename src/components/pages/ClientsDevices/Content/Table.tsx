import { Button } from "@/components/elements";
import ShowLoader from "@/components/misc/ShowLoader";
import { DataTable } from "@/components/ui";
import { useAdminInfo } from "@/contexts/AdminInfo";
import changeLicenseStatus from "@/fetch-data/client-devices/changeLicenseStatus";
import removeLicense from "@/fetch-data/client-devices/removeLicense";
import { Plan, UserDevice } from "@/fetch-data/Types";
import cn from "@/utility/cn";
import { licenseStatusTranslations } from "@/utility/getDeviceLicenseDetails";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { TableColumn } from "react-data-table-component/dist/DataTable/types";
import { toast } from "sonner";

type Props = {
  devices: UserDevice[];
  plans: Plan[];
};

// DeviceLicenseDetails Comp
const DeviceLicenseDetails = dynamic(() => import("./DeviceLicenseDetails"), {
  loading: () => <ShowLoader fullScreen />,
});

// AddLicenseForm Comp
const AddLicenseForm = dynamic(() => import("./AddLicenseForm"), {
  loading: () => <ShowLoader fullScreen />,
});

const Table = (props: Props) => {
  // Admin Info
  const adminInfo = useAdminInfo();

  // Handle Licence Add/Remove
  const handleLicenseRemove = async (device: UserDevice) => {
    const result = await removeLicense({
      options: {
        token: adminInfo?.token ?? "",
        licenseKey: device?.licenceData?.licenceKey ?? "",
        user_id: device?.user_id ?? 0,
      },
      onError: (err) => {
        throw new Error(err);
      },
    });

    // If success, reload
    if (result && typeof window != "undefined") {
      window?.location?.reload();
    }

    // return
    return result;
  };

  // Handle LicenseStatusChange
  const handleLicenseStatusChange = async (device: UserDevice) => {
    //  Update licence status
    const result = await changeLicenseStatus({
      options: {
        token: adminInfo?.token ?? "",
        licenseKey: device?.licenceData?.licenceKey ?? "",
        status: device?.licenceData?.Status == 0 ? 1 : 0,
        user_id: device?.user_id ?? 0,
      },
      onError: (err) => {
        throw new Error(err);
      },
    });

    // If success, reload
    if (result && typeof window != "undefined") {
      window?.location?.reload();
    }

    // return
    return result;
  };

  // Selected Order
  const [selectedDevice, setSelectedDevice] = useState<
    { for: "details" | "add_license"; device?: UserDevice } | undefined
  >(undefined);

  // Columns
  const columns: TableColumn<UserDevice>[] = useMemo(() => {
    // Columns
    let columns: TableColumn<UserDevice>[] = [
      // Online Status
      {
        name: "在线状态",
        selector: (row) => !!row?.isOnline,
        cell: (row) => (
          <div
            className={cn(
              "aspect-square rounded-full w-[1.7rem] bg-online mx-auto",
              !!!row?.isOnline && "bg-offline"
            )}
          ></div>
        ),
        maxWidth: "6ch",
        wrap: true,
        sortable: true,
        center: true,
      },
      // User Id
      {
        name: "用户ID",
        selector: (row) => row?.user_id ?? "N/A",
        wrap: true,
        center: true,
        sortable: true,
      },
      // User Email
      {
        name: "用户邮箱",
        selector: (row) => row?.email ?? "N/A",
        wrap: true,
        sortable: true,
        minWidth: "20ch",
      },
      // Serial No
      {
        name: "序列号",
        cell: (row) => (
          <div className="flex items-center flex-wrap gap-[1rem]">
            <span>{row.serialNo}</span>
            <svg
              className="aspect-square w-[1.9rem] cursor-pointer hover:opacity-70 transition"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setSelectedDevice({
                  for: "details",
                  device: props.devices.find(
                    (device) => device.serialNo == row.serialNo
                  ),
                })
              }
            >
              <path
                d="M8 11.5C8 9.99648 8 7.65 8 7.65M8 15C11.85 15 15 11.85 15 8C15 4.15 11.85 1 8 1C4.15 1 1 4.15 1 8C1 11.85 4.15 15 8 15Z"
                stroke="#667580"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 5.5481V5.1981"
                stroke="#667580"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ),
        wrap: true,
        minWidth: "20ch",
      },
      // License Type
      {
        name: "许可证类型",
        selector: (row) => row?.license_info?.licenseStatus ?? "N/A",
        cell: (row) => (
          <div className="flex flex-col text-center">
            <span className="capitalize">
              {
                licenseStatusTranslations[
                  row?.license_info
                    ?.licenseStatus as keyof typeof licenseStatusTranslations
                ]
              }
            </span>
            {row?.license_info?.planInfo && (
              <span>{`( ${row?.license_info?.planInfo.PlanName} )`}</span>
            )}
          </div>
        ),
        wrap: true,
        sortable: true,
        width: "16rem",
      },
      // License Status
      {
        name: "许可证状态",
        selector: (row) => row?.license_info?.licenseStatus ?? "N/A",
        cell: (row) => (
          <div className="flex flex-col text-center">
            <span
              className="capitalize"
              style={{
                color: row?.license_info?.licenseStatusColor,
              }}
            >
              {
                licenseStatusTranslations[
                  row?.license_info
                    ?.licenseStatus as keyof typeof licenseStatusTranslations
                ]
              }
            </span>
            {row?.licenceData?.remaining_days != null && (
              <span>
                (
                <span
                  style={{
                    color: row?.license_info?.remainingDaysPercentageColor,
                  }}
                >
                  {row?.license_info?.remainingDays}{" "}
                </span>
                剩余天数 )
              </span>
            )}
          </div>
        ),
        wrap: true,
        sortable: true,
        width: "20rem",
        center: true,
      },
    ];

    //  License Action
    columns.push({
      name: "许可证操作",
      selector: (row) => row?.license_info?.licenseStatus ?? "N/A",
      cell: (row) => (
        <div className="flex flex-col gap-[0.5rem] w-full">
          {/* Add or Remove */}
          <Button
            onClick={() => {
              !row.license_info?.licenseKey ||
              row?.license_info?.remainingDays == 0
                ? // For License Add
                  setSelectedDevice({ for: "add_license", device: row })
                : // For removing License
                  toast.promise(handleLicenseRemove(row), {
                    loading: "加载中...",
                    // @ts-ignore
                    success: (msg) => msg,
                    error: (err) => err?.message,
                  });
            }}
            className={cn(
              "py-[0.5em] w-full flex-1",
              !row.licenceData?.licenceKey ||
                row?.licenceData?.remaining_days == 0
                ? "bg-[#21c45d]"
                : "bg-[#f04343]"
            )}
          >
            {
              // If no license assigned or expired
              !row.licenceData?.licenceKey ||
              row?.licenceData?.remaining_days == 0
                ? "添加"
                : "移除"
            }
          </Button>

          {/* Change Status */}
          {row?.license_info?.licenseKey &&
            (row?.license_info?.remainingDays ?? 0) > 0 && (
              <Button
                onClick={() => {
                  toast.promise(handleLicenseStatusChange(row), {
                    loading: "加载中...",
                    success: (msg) => msg,
                    error: (err) => err?.message,
                  });
                }}
                className="py-[0.5em] w-full flex-1"
                style={{
                  backgroundColor: row.license_info?.licenseStatusColor,
                }}
              >
                {row.license_info?.licenseStatus == "inactive"
                  ? "激活"
                  : "停用"}
              </Button>
            )}
        </div>
      ),
      wrap: true,
      sortable: true,
      width: "23rem",
      maxWidth: "23rem",
    });

    // Insert last updated
    columns.push({
      name: "最后更新",
      selector: (row) => row.last_updated ?? "N/A",
      wrap: true,
      sortable: true,
      width: "15ch",
    });

    // Insert Sensor Columns
    const seen = new Set();
    const sensors = props?.devices
      .flatMap((obj) => obj.realtime)
      .filter((sensor) => {
        if (seen.has(sensor?.sensorid)) return false;
        seen.add(sensor?.sensorid);
        return true;
      });

    // Add Sensors in table
    sensors.forEach((sensor) => {
      columns.push({
        name: `${sensor?.sensorname} (${sensor?.sensorid})`,
        selector: (row) =>
          row?.realtime?.find((s) => s?.sensorid == sensor?.sensorid)
            ?.sensorvalue ?? "N/A",
        wrap: true,
        sortable: true,
        center: true,
      });
    });

    // Return columns
    return columns;

    // eslint-disable-next-line
  }, [props?.devices]);

  // Return JSX
  return (
    <div className="h-full flex flex-col gap-[2rem] overflow-y-auto px-[2rem]">
      {/* Table */}
      <DataTable columns={columns} data={props.devices} />

      {/* Device License Details Popup */}
      {selectedDevice?.for == "details" && selectedDevice.device && (
        <DeviceLicenseDetails
          device={selectedDevice.device}
          onClose={() => setSelectedDevice(undefined)}
        />
      )}

      {/* Add Device License For */}
      {selectedDevice?.for == "add_license" && selectedDevice.device && (
        <AddLicenseForm
          device={selectedDevice.device}
          onClose={() => setSelectedDevice(undefined)}
          plans={props.plans}
        />
      )}
    </div>
  );
};

export default Table;
