import cn from "@/utility/cn";
import theme from "@/theme";
import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      className={cn(
        `button relative flex items-center justify-center gap-[0.8em] select-none transition-colors outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden text-white rounded-[0.6em] bg-primary font-semibold after:content-[""] after:w-full after:h-full after:bg-[rgba(0,0,0,0.1)] after:absolute after:top-0 after:left-0 after:transition after:opacity-0 hover:after:opacity-[100%] p-[0.8em_1.8em] border border-current text-[1.7rem]`,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
