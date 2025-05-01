import cn from "@/utility/cn";

type Props = {
  className?: string;
};

const IconEdit = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("aspect-[17/18]", props.className)}
      fill="none"
      viewBox="0 0 17 18"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.407"
        d="m9.69 2.35-7.702 8.153c-.29.31-.572.92-.628 1.342l-.348 3.04c-.122 1.097.667 1.848 1.755 1.66l3.02-.516c.423-.075 1.014-.384 1.305-.703l7.703-8.153c1.332-1.408 1.932-3.012-.141-4.973-2.064-1.942-3.63-1.257-4.963.15"
      ></path>
      <path fill="#fff" d="M8.4 3.713a5.75 5.75 0 0 0 5.113 4.832"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.407"
        d="M8.4 3.713a5.75 5.75 0 0 0 5.113 4.832"
      ></path>
    </svg>
  );
};

export default IconEdit;
