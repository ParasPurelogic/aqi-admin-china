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

const InputRadio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, inputClassName, labelText, ...otherProps } = props;
  const radioId = generateRandomString({
    onlyEnglishLetters: true,
  });

  return (
    <div
      className={cn(
        "input-radio relative flex items-center gap-[0.8rem] cursor-pointer",
        className
      )}
    >
      {/* Input */}
      <input
        type="radio"
        id={radioId}
        ref={ref}
        className={cn(
          `${theme.inputCommonStyling}`,
          "w-fit cursor-pointer",
          inputClassName
        )}
        {...otherProps}
      />

      {/* Label */}
      {labelText && (
        <label
          className="font-semibold capitalize cursor-pointer truncate leading-[1]"
          htmlFor={radioId}
        >
          {labelText}
        </label>
      )}
    </div>
  );
});

InputRadio.displayName = "InputRadio";

export default InputRadio;
