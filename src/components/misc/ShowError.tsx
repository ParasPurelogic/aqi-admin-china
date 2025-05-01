"use client";

import cn from "@/utility/cn";

type Props = {
  className?: string;
  message?: string;
  hideRefreshBtn?: boolean;
  refreshBtnText?: string;
  refreshCallback?: () => void;
};

const ShowError = (props: Props) => {
  // Return JSX
  return (
    <div
      className={cn(
        "data-fetching-error py-[1rem] px-[1.3rem] rounded-lg flex flex-col items-center justify-center gap-[0.5rem] text-center w-full border border-[rgba(249,109,109,0.3)] text-[rgb(249,109,109)] bg-[rgba(249,109,109,0.1)]",
        props.className
      )}
    >
      <span>{props.message ? props.message : "Unexpected Error Occurred"}</span>
      {!props.hideRefreshBtn && (
        <span
          onClick={() => {
            // if props.refreshCallback
            if (props.refreshCallback) {
              props.refreshCallback();
            } else if (typeof window != "undefined") {
              window?.location?.reload();
            }
          }}
          className="underline text-[1.4rem] cursor-pointer"
        >
          {props.refreshBtnText || "重新加载页面"}
        </span>
      )}
    </div>
  );
};

export default ShowError;
