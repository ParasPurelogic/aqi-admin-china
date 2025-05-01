import { domainName } from "@/config/misc";
import cn from "@/utility/cn";
import Image from "next/image";

type Props = {
  className?: string;
  name: string;
  isSelected?: boolean;
  isExpandable?: boolean;
  iconURL?: string;
};

const Tab = (props: Props) => {
  // Return JSX
  return (
    <div
      title={props.name}
      className={cn(
        "tab cursor-pointer transition hover:bg-primary px-[3rem] py-[1.5rem] flex items-center gap-[2rem]",
        props.isSelected && "bg-primary",
        props.className
      )}
    >
      {/* Icon */}
      <i className="icon aspect-square min-w-[2.5rem] max-w-[2.5rem]">
        <Image
          src={props.iconURL || `${domainName}/media/icons/routes/default.svg`}
          width={50}
          height={50}
          alt=""
          className="w-full h-full"
        />
      </i>
      {/* Name */}
      <span className="text-[2rem] capitalize">{props.name}</span>
      {/* Expander */}
      {props.isExpandable && (
        <i className="expander aspect-[16/15] w-[2.3rem] ml-auto transition">
          <svg
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.99998" cy="7.20567" r="7.20567" fill="#F9FAFF" />
            <path
              d="M10.9279 6.30493L8.11286 9.00706L5.29787 6.30493"
              stroke="#31343D"
              strokeWidth="0.985741"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
      )}
    </div>
  );
};

export default Tab;
