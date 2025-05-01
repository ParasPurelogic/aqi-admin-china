"use client";

import TypeDatePicker from "@/types/TypeDatePicker";
import { useMemo, useRef, useState } from "react";
import cn from "@/utility/cn";
import dateInYYYY_MM_DD from "@/utility/dateInYYYY_MM_DD";
import dynamic from "next/dynamic";
import { useClickOutside } from "@/hooks";
import ShowLoader from "@/components/misc/ShowLoader";

type TypeSingle = {
  type: "single";
  /** Format: ["YYYY-MM-DD"] */
  preSelectedDates?: string[];
};

type TypeMultiple = {
  type: "multiple";
  /** Format: ["YYYY-MM-DD,YYYY-MM-DD,YYYY-MM-DD"........] */
  preSelectedDates?: string[];
};

type TypeRange = {
  type: "range";
  /** Format: "YYYY-MM-DD,YYYY-MM-DD"] */
  preSelectedDates?: string[];
};

type Props = {
  /** Dates will be in YYYY-MM-DD Format */
  onSelection: (dates: string[]) => void;
  className?: string;
  handlerClassName?: string;
  pickerClassName?: string;
  disabled?: boolean;
  title?: string;
  minDate?: string;
  maxDate?: string;
  minYear?: number;
  maxYear?: number;
  priorYears?: number;
  laterYears?: number;
  disabledDates?: string[];
  disabledWeekDays?: string[];
} & (TypeSingle | TypeMultiple | TypeRange);

const Picker = dynamic(() => import("./Picker"), {
  loading: () => <ShowLoader className="w-full h-[20em] bg-white" />,
  ssr: false,
});

const Index = (props: Props) => {
  // Extract props
  const {
    minDate,
    maxDate,
    minYear,
    maxYear,
    priorYears,
    laterYears,
    disabledDates,
    disabledWeekDays,
    type,
    onSelection,
  } = props;

  // Keep show/hide state for the Picker
  const [showPicker, setShowPicker] = useState(false);

  // Get the picker reference
  const datePickerRef = useRef(null);

  // Hide the picker if click outside the Date Picker comp
  useClickOutside([datePickerRef], () => setShowPicker(false));

  // Modify Preselected dates if passed
  const preSelectedDate = useMemo(() => {
    if (props.preSelectedDates) {
      const dates = [...props.preSelectedDates].map((date) =>
        dateInYYYY_MM_DD(date)
      );

      if (props.type === "single") return dates[0];
      else if (props.type === "range") return `${dates?.join("_")}`;
      else if (props.type === "multiple") return `${dates?.join(",")}`;
      else return undefined;
    } else {
      return undefined;
    }
  }, [props.type, props.preSelectedDates]);

  // Get the picker config
  const pickerConfig: TypeDatePicker["config"] = useMemo(() => {
    return {
      minDate: minDate || null,
      maxDate: maxDate || null,
      minYear: minYear || null,
      maxYear: maxYear || null,
      priorYears: priorYears || 5,
      laterYears: laterYears || 5,
      disabledDates: disabledDates || [],
      disabledDays: disabledWeekDays || [],
      range: type === "range" ? true : false,
      multiple: type === "multiple" ? true : false,
      format: "yyyy-mm-dd",
      overlayClose: false,
      rangeDelim: "_",
      i18n: {
        months: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        shortMonths: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        days: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
        shortDays: ["日", "一", "二", "三", "四", "五", "六"],
        shorterDays: ["日", "一", "二", "三", "四", "五", "六"],
        firstDay: 1,
        dict: {
          btnOk: "完成",
        },
      },
      events: {
        dateChanged: (data) => {
          let dates: string[] = [];

          if (type === "single" && data.date) {
            dates = [data.date];
          } else if (type === "multiple" && data.dates) {
            dates = data.dates;
          } else if (type === "range" && data.dateFrom && data.dateTo) {
            dates = [data.dateFrom, data.dateTo];
          } else {
          }

          // If preselectedDates provided and preselectedDates and receivedDates are not same
          if (
            props.preSelectedDates &&
            JSON.stringify(
              [...props.preSelectedDates].map((date) => dateInYYYY_MM_DD(date))
            ) !==
              JSON.stringify([...dates].map((date) => dateInYYYY_MM_DD(date)))
          ) {
            onSelection && onSelection(dates);
          }

          // If preselectedDates not provided
          if (!props.preSelectedDates) {
            onSelection && onSelection(dates);
          }

          return;
        },
        hidden: () => setShowPicker(false),
      },
    };
  }, [
    minDate,
    maxDate,
    minYear,
    maxYear,
    priorYears,
    laterYears,
    disabledDates,
    disabledWeekDays,
    type,
    props.preSelectedDates,
    onSelection,
  ]);

  // Return JSX
  return (
    <div
      ref={datePickerRef}
      className={cn(
        "date-picker h-fit text-[1.5rem] z-[1] text-title",
        props.className,
        props.disabled && "opacity-50 pointer-events-none cursor-not-allowed"
      )}
    >
      <div className="wrapper relative">
        {/* Heading */}
        <div
          className={cn(
            "header border border-current rounded-[0.7rem] flex items-center justify-between gap-[2.5rem] leading-[100%] px-[1rem] py-[0.8rem] cursor-pointer",
            props.handlerClassName
          )}
          onClick={() => !props.disabled && setShowPicker((prev) => !prev)}
        >
          {props.title && <span className="text-[1.4rem]">{props.title}</span>}
          <i className="icon aspect-square w-[1.4em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M5.44444 1V3.66667M12.5556 1V3.66667M1.44444 7.30222H16.5556M17 6.77778V14.3333C17 17 15.6667 18.7778 12.5556 18.7778H5.44444C2.33333 18.7778 1 17 1 14.3333V6.77778C1 4.11111 2.33333 2.33333 5.44444 2.33333H12.5556C15.6667 2.33333 17 4.11111 17 6.77778Z"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.2857 11.3984H12.2937M12.2857 14.0651H12.2937M8.99681 11.3984H9.0057M8.99681 14.0651H9.0057M5.70703 11.3984H5.71592M5.70703 14.0651H5.71592"
                stroke="currentColor"
                strokeWidth="1.77778"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>

        {/* Light box */}
        <div
          className={cn(
            "light-box-container z-[5] absolute -bottom-[1rem] translate-y-full left-0 w-[20em] rounded-[1.2em] overflow-hidden shadow-[2px_3px_24px_0px_#0000000F]",
            props.pickerClassName
          )}
        >
          {showPicker && (
            <Picker
              onUnexpectedError={() => setShowPicker(false)}
              preSelectedDates={preSelectedDate}
              config={pickerConfig}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
