import cn from "@/utility/cn";

type DividerProps = {
  className?: string;
  orientation: "hr" | "vr";
};

const Divider = (props: DividerProps) => {
  if (props.orientation == "hr") {
    return (
      <svg
        className={cn(
          "aspect-[219/1] w-full h-[1px] text-title opacity-70",
          props.className
        )}
        viewBox="0 0 219 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="1"
          x="219"
          y="1"
          width="219"
          height="0.999983"
          transform="rotate(-180 219 1)"
          fill="url(#paint0_linear_458_22)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_458_22"
            x1="436.424"
            y1="2.00018"
            x2="221.757"
            y2="1.99877"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.461458" stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        className={cn(
          "aspect-[1/219] w-[1px] h-full text-title opacity-70",
          props.className
        )}
        viewBox="0 0 1 219"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="1"
          y="219"
          width="219"
          height="0.999983"
          transform="rotate(-90 0 219)"
          fill="url(#paint0_linear_479_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_479_4"
            x1="217.424"
            y1="220"
            x2="2.7572"
            y2="219.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.461458" stopColor="currentColor" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
};

Divider.displayName = "Divider";

export default Divider;
