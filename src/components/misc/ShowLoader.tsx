import IconLoader from "@/components/icons/IconLoader";
import cn from "@/utility/cn";

type Props = {
  className?: string;
  fullScreen?: boolean;
  theme?: "light" | "dark";
};

const ShowLoader = (props: Props) => {
  return (
    <div
      className={cn(
        "default-loader h-full w-full flex items-center justify-center aspect pointer-events-none text-para",
        props.className,
        props.fullScreen &&
          `bg-[#0404048F] fixed z-[999999999] top-0 left-0 backdrop-blur-[3px] text-white`,
        props.theme == "light" && "bg-[rgba(255,255,255,0.5)]"
      )}
    >
      <IconLoader className="text-[4rem] text-current" />
    </div>
  );
};

export default ShowLoader;
