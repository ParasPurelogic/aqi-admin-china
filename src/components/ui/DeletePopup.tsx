"use client";

import { Button } from "@/components/elements";
import { useState } from "react";
import { toast } from "sonner";
import Popup from "./Popup";
import IconLoader from "@/components/icons/IconLoader";
import IconDelete from "../icons/IconDelete";

type Props = {
  heading: string;
  subHeading: string;
  cancelBtnText?: string;
  okBtnText?: string;
  onClose: () => void;
  onDelete: () => Promise<void>;
};

const DeletePopup = (props: Props) => {
  // Is deleting
  const [isDeleting, setIsDeleting] = useState(false);

  // handle delete
  const handleDelete = async () => {
    try {
      // update deleting state
      setIsDeleting(true);

      // Run props.onDelete
      props.onDelete && (await props.onDelete());

      //
    } catch (error: any) {
      // Show toast
      toast.error(error.message ?? "Something went wrong");
      // update deleting state
      setIsDeleting(false);
    }
  };

  // Return JSX
  return (
    <Popup wrapperClassName="w-[90%] sm:w-[45rem]" fitWrapperHeight>
      <div className="flex flex-col">
        {/* Info */}
        <div className="info flex max-xs:flex-wrap max-xs:justify-center max-xs:text-center gap-[2rem]">
          {/* Icon */}
          <i className="aspect-square relative max-w-[6rem] min-h-[6rem] max-h-[6rem] rounded-full bg-error">
            <IconDelete className="absolute w-[70%] h-[70%] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white" />
          </i>
          {/* Text */}
          <div className="flex flex-col">
            <p className={`font-bold text-[2rem] text-para`}>{props.heading}</p>
            <span>{props.subHeading}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="actions flex flex-wrap gap-[1rem_2rem] mt-[4rem]">
          {/* Cancel Button */}
          <Button
            onClick={() => props.onClose && props.onClose()}
            disabled={isDeleting}
            className={`flex-1 min-w-fit bg-transparent border text-para border-[#66758054] hover:bg-transparent`}
          >
            {props.cancelBtnText ?? "Cancel"}
          </Button>
          {/* Delete Button */}
          <Button
            disabled={isDeleting}
            onClick={handleDelete}
            className="flex-1 min-w-fit bg-error hover:bg-error"
          >
            {isDeleting ? <IconLoader /> : props.okBtnText ?? "Delete"}
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default DeletePopup;
