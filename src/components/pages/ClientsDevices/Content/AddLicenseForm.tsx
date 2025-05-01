import { Button } from "@/components/elements";
import Popup from "@/components/ui/Popup";
import { useAdminInfo } from "@/contexts/AdminInfo";
import addLicense from "@/fetch-data/client-devices/addLicense";
import { Plan, UserDevice } from "@/fetch-data/Types";
import cn from "@/utility/cn";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  device: UserDevice;
  onClose: () => void;
  plans: Plan[];
};

const AddLicenseForm = (props: Props) => {
  // Admin Info
  const adminInfo = useAdminInfo();

  // Flags
  const [flags, setFlags] = useState({
    selectedPlan: props.plans[0],
    isAdding: false,
  });

  // Add device
  const handleAddDeviceLicense = async () => {
    // Update flags
    setFlags({ ...flags, isAdding: true });

    // Add License
    await addLicense({
      options: {
        token: adminInfo?.token ?? "",
        deviceslist: [
          {
            name: props.device.serialNo ?? "",
            serialno: props.device.serialNo ?? "",
          },
        ],
        plan_id: flags.selectedPlan.id ?? 0,
        transaction_amount: Number(flags?.selectedPlan?.PlanPrice ?? 0),
        user_id: props.device.user_id ?? 0,
        billing_json: {
          firstName: props.device.name,
          email: props.device.email,
        },
      },
      onError: (err) => {
        // show toast
        toast.error(err);
      },
      onSuccess: (msg) => {
        // show toast
        toast.success(msg);
        // If success, reload
        if (typeof window != "undefined") {
          window?.location?.reload();
        }
      },
    });
  };

  // Return JSX
  return (
    <Popup
      wrapperClassName="md:w-fit md:w-[70rem] md:max-w-[70rem]"
      fitWrapperHeight
    >
      <div className="flex flex-col w-full">
        {/* Header */}
        <Popup.StickyHeader>
          <p className="font-bold text-[3rem] leading-[1] grow">添加许可证</p>
          <Popup.CloseButton
            onClose={() =>
              !flags.isAdding && props?.onClose && props?.onClose()
            }
            className="w-[4rem] h-[4rem]"
          />
        </Popup.StickyHeader>

        {/* Plans */}
        <div className="plans w-full flex flex-col gap-[1rem] flex-wrap">
          {props.plans &&
            props.plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setFlags({ ...flags, selectedPlan: plan })}
                className={cn(
                  "plan flex-1 group/plan h-full flex gap-[2rem] items-center justify-between border leading-[1] px-[2rem] py-[1.5rem] bg-white rounded-[1.5rem] cursor-pointer transition hover:bg-primary/[10%] hover:border-primary",
                  flags?.selectedPlan?.id == plan.id &&
                    "bg-primary/[10%] border-primary"
                )}
              >
                {/* Plan Title */}
                <div className="plan-title flex items-baseline gap-[0.5rem] font-bold">
                  <span className="text-[2.5rem]">{plan.PlanTerm}</span>
                  <span>月份</span>
                </div>

                {/* Plan Pricing */}
                <div className="plan-pricing flex flex-col gap-[0.8rem] text-right">
                  <span className={cn("font-bold text-title text-[2.3rem]")}>
                    {Number(plan?.PlanPrice)?.toLocaleString("zh-CN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                    /-
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Add Button */}
        <Button
          disabled={flags?.isAdding}
          className="mt-[3rem]"
          onClick={handleAddDeviceLicense}
        >
          {flags.isAdding ? "请稍候..." : "添加许可证"}
        </Button>
      </div>
    </Popup>
  );
};

export default AddLicenseForm;
