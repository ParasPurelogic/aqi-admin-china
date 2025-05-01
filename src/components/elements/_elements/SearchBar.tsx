"use client";

import theme from "@/theme";
import cn from "@/utility/cn";
import debouncer from "@/utility/debouncer";
import InputText from "./InputText";

type Props = {
  className?: string;
  onSearch?: (term: string) => void;
  placeholder?: string;
  defaultText?: string;
  onClear?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  autofocus?: boolean;
  disable?: boolean;
};

const SearchBar = (props: Props) => {
  // Handle Search
  const handleSearch = (term: string) => {
    // Run props.onSearch
    if (props.onSearch) props.onSearch(term);
  };

  const debouncedSearch = debouncer((term: string) => handleSearch(term), 300);

  // Return JSX
  return (
    <div
      className={cn(
        `search-bar w-full p-[0.8em] flex gap-[0.6em] items-center border border-[#D9DDDF] focus-within:border-primary text-para bg-white max-w-[30rem] h-[5rem] text-[1.7rem] border-[#667580]/50 rounded-[1rem] `,
        props.className,
        theme.inputCommonStyling
      )}
    >
      <i className="icon aspect-square w-[1.2em]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none">
          <g opacity="0.7">
            <path
              d="M9.125 8.84375L11.8336 11.5262"
              stroke="currentColor"
              strokeWidth="1.21829"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 5.39535C1 7.93501 3.07889 9.99383 5.64334 9.99383C6.92776 9.99383 8.09046 9.47734 8.93106 8.64264C9.76879 7.81085 10.2867 6.663 10.2867 5.39535C10.2867 2.85568 8.20778 0.796875 5.64334 0.796875C3.07889 0.796875 1 2.85568 1 5.39535Z"
              stroke="currentColor"
              strokeWidth="1.21829"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </i>
      <InputText
        type="search"
        disabled={props.disable}
        autoFocus={props.autofocus}
        placeholder={props.placeholder ?? "搜索"}
        defaultValue={props.defaultText ?? ""}
        onChange={(e) => debouncedSearch(e.target.value)}
        ref={props.inputRef}
        className="w-full"
        inputClassName="w-full focus-within:!border-0 focus-within:!shadow-none !p-0 !border-0"
      />
    </div>
  );
};

export default SearchBar;
