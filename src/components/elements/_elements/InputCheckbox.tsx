"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import theme from "@/theme";
import generateRandomString from "@/utility/generateRandomStrings";
import cn from "@/utility/cn";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  labelText?: string;
}

const InputCheckbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, inputClassName, labelText, ...otherProps } = props;
  const checkboxId = generateRandomString({
    onlyEnglishLetters: true,
  });

  // Return JSX
  return (
    <div
      title={props.labelText || ""}
      className={cn(
        "input-checkbox relative flex items-baseline gap-[0.8rem] cursor-pointer font-semibold select-none",
        className
      )}
    >
      {/* Input */}
      <input
        type="checkbox"
        id={checkboxId}
        ref={ref}
        className={cn(
          theme.inputCommonStyling,
          "w-fit cursor-pointer",
          inputClassName
        )}
        {...otherProps}
      />

      {/* Label */}
      {labelText && (
        <label className="-translate-y-[0.1em]" htmlFor={checkboxId}>
          {labelText}
        </label>
      )}
    </div>
  );
});

InputCheckbox.displayName = "InputCheckbox";

export default InputCheckbox;
