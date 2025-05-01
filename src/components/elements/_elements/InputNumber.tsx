import React, { forwardRef, InputHTMLAttributes } from "react";
import theme from "@/theme";
import cn from "@/utility/cn";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  errorMessage?: string;
  required?: boolean;
}

const InputNumber = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, inputClassName, errorMessage, required, ...otherProps } =
    props;
  return (
    <div className={cn("input-number relative", className)}>
      {/* Input */}
      <input
        type="number"
        inputMode="numeric"
        ref={ref}
        className={cn(
          theme.inputCommonStyling,
          inputClassName,
          errorMessage && "border-error"
        )}
        {...otherProps}
      />

      {/* Required Tag */}
      {required && (
        <span className="required absolute top-[1px] right-[0.5rem] text-error">
          *
        </span>
      )}

      {/* Errors  */}
      {errorMessage && (
        <div className="error text-error text-[1.1rem] mt-[0.5rem] ml-[0.8rem]">
          {errorMessage}
        </div>
      )}
    </div>
  );
});

InputNumber.displayName = "InputNumber";

export default InputNumber;
