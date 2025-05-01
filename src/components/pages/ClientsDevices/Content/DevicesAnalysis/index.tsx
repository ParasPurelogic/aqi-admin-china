import Popup, { StickyHeader, CloseButton } from "@/components/ui/Popup";
import { Plan, UserDevice } from "@/fetch-data/Types";
import ChartView from "./ChartView";
import { useMemo } from "react";
import { TableColumn } from "react-data-table-component";
import cn from "@/utility/cn";
import { Button } from "@/components/elements";
import { DataTable, DropdownSelector } from "@/components/ui";
import { licenseStatusTranslations } from "@/utility/getDeviceLicenseDetails";

type Props = {
  onClose: () => void;
  devices: UserDevice[];
  plans: Plan[];
  onFilter: (filter: { id: string; name: string }) => void;
  selectedSortByDeviceLicenceExpiryOption?: { id: string; name: string };
};

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

const DevicesAnalysis = (props: Props) => {
  // Columns
  const columns: TableColumn<UserDevice>[] = useMemo(() => {
    // Initial Columns
    const initialColumns: TableColumn<UserDevice>[] = [
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
        selector: (row) => row?.user_id || "N/A",
        wrap: true,
        center: true,
        sortable: true,
      },
      // Serial No
      {
        name: "序列号",
        selector: (row) => row?.serialNo || "",
        wrap: true,
        minWidth: "20ch",
      },
      // License Type
      {
        name: "许可证类型",
        selector: (row) => row?.license_info?.licenseStatus || "",
        cell: (row) => (
          <div className="flex flex-col text-center">
            <span>
              {licenseStatusTranslations[
                row?.license_info
                  ?.licenseStatus as keyof typeof licenseStatusTranslations
              ] || row?.license_info?.licenseStatus}
            </span>
            {row?.license_info?.planInfo?.PlanName && (
              <span>{row?.license_info?.planInfo?.PlanName}</span>
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
        selector: (row) => row?.license_info?.licenseStatus || "",
        cell: (row) => (
          <div className="flex flex-col text-center">
            <span
              style={{
                color: row?.license_info?.licenseStatusColor,
              }}
            >
              {licenseStatusTranslations[
                row?.license_info
                  ?.licenseStatus as keyof typeof licenseStatusTranslations
              ] || row?.license_info?.licenseStatus}
            </span>
            {row?.licenceData?.remaining_days != null && (
              <span>
                (
                <span
                  style={{
                    color: row?.license_info?.remainingDaysPercentageColor,
                  }}
                >
                  {row.license_info?.remainingDays}{" "}
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

    // Push Action Column
    initialColumns.push({
      name: "操作",
      selector: (row) =>
        row?.license_info?.licenseStatus == "inactive"
          ? "Activate"
          : row?.license_info?.licenseStatus == "active"
          ? "Inactive"
          : "Send Email",
      cell: (row) => (
        <Button
          className={cn(
            "py-[0.5em] w-full",
            row?.license_info?.licenseStatus == "inactive"
              ? "bg-yellow-500"
              : row?.license_info?.licenseStatus == "active"
              ? "bg-red-500"
              : "bg-primary"
          )}
        >
          {row?.license_info?.licenseStatus == "inactive"
            ? "激活"
            : row?.license_info?.licenseStatus == "active"
            ? "未激活"
            : "发送电子邮件"}
        </Button>
      ),
      wrap: true,
      sortable: true,
      width: "23rem",
      maxWidth: "23rem",
    });

    // Return
    return initialColumns;

    // eslint-disable-next-line
  }, [props?.devices]);

  // Return JSX
  return (
    <Popup>
      <div className="flex h-full flex-col w-full">
        {/* Header */}
        <StickyHeader>
          {/* Heading */}
          <span className="heading bg-white block grow w-fit font-extrabold text-[2.5rem] leading-[1]">
            设备分析
          </span>

          {/* Close Button */}
          <CloseButton
            className="w-[4.5rem] h-[4.5rem]"
            onClose={props.onClose}
          />
        </StickyHeader>

        {/* Content */}
        <div className="w-full h-2/4 grow grid lg:grid-cols-[1fr_auto] gap-[2rem]">
          {/* Table */}
          <div className="devices w-full h-auto min-h-[50rem] flex flex-col overflow-y-auto">
            {/* Filter */}
            <DropdownSelector
              className="ml-auto mb-[2rem]"
              pickerText="按许可证筛选"
              selectedOption={props.selectedSortByDeviceLicenceExpiryOption}
              options={licenceExpiryOptions}
              onSelect={props.onFilter}
            />

            {/* Table */}
            <DataTable columns={columns} data={props.devices} />
          </div>

          {/* Chart */}
          <ChartView
            devices={props.devices}
            plans={props.plans}
            className="min-h-full h-fit md:w-[30rem] lg:w-[40rem]"
          />
        </div>
      </div>
    </Popup>
  );
};

export default DevicesAnalysis;
