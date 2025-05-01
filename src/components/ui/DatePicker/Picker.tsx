import TypeDatePicker from "@/types/TypeDatePicker";
import { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import { Button } from "@/components/elements";
//@ts-ignore
import duDatepicker from "@dmuy/datepicker";
import generateRandomString from "@/utility/generateRandomStrings";
import ShowError from "@/components/misc/ShowError";
import log from "@/utility/log";

type Props = {
  config: TypeDatePicker["config"];
  preSelectedDates?: string;
  onUnexpectedError?: () => void;
};

const Picker = (props: Props) => {
  // Picker ref
  const datePickerRef = useRef(null);

  // State for the unexpected error from the library
  const [error, setError] = useState("");

  // Generate unique id for the picker
  const compUniqueId = useMemo(
    () =>
      generateRandomString({
        prefix: "date-picker-picker_id",
        onlyEnglishLetters: true,
      }),
    []
  );

  // Expand the config
  const config: TypeDatePicker["config"] = useMemo(() => {
    return {
      ...props.config,
      root: `.picker-lightBox-wrapper.${compUniqueId}`,
      events: {
        ...props.config.events,
        // hidden: () => duDatepicker(`#${compUniqueId}`, "destroy"),
      },
    };
  }, [props.config, compUniqueId]);

  // Initialize the picker
  useEffect(() => {
    try {
      const runAfterDOMLoad = () => {
        duDatepicker.defaults({ ...config });

        // if props.preSelectedDates provided
        if (props.preSelectedDates) {
          duDatepicker(`#${compUniqueId}`, "setValue", props.preSelectedDates);
        }

        // Show the picker
        duDatepicker(`#${compUniqueId}`, "show");
      };

      if (document.readyState === "complete") {
        // If DOM is already loaded, run the code immediately
        runAfterDOMLoad();
      } else {
        // If DOM is not yet loaded, wait for the 'load' event
        window.addEventListener("load", runAfterDOMLoad);
      }

      // Cleanup function to remove the event listener if component unmounts
      return () => {
        window.removeEventListener("load", runAfterDOMLoad);
        duDatepicker(`#${compUniqueId}`, "destroy");
      };
    } catch (error: any) {
      setError(error?.message);
      log("error", "Error in DatePicker", error);
    }

    // eslint-disable-next-line
  }, []);

  // Return JSX
  return (
    <div className={`picker-lightBox-wrapper ${compUniqueId}`}>
      {error ? (
        <div className="flex bg-white h-full min-h-[20em] w-full flex-col items-center justify-center gap-[0.5em]">
          <ShowError
            className="bg-transparent text-deviceOffline"
            message={error}
          />
          <Button
            className="bg-deviceOffline hover:bg-deviceOffline hover:opacity-[80%]"
            onClick={() => props.onUnexpectedError && props.onUnexpectedError()}
          >
            关闭
          </Button>
        </div>
      ) : (
        <input
          ref={datePickerRef}
          type="hidden"
          id={`${compUniqueId}`}
          className="hidden"
          aria-hidden
        />
      )}
    </div>
  );
};

export default Picker;
