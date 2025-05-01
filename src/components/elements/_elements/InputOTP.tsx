"use client";

import { useEffect, useRef, useState, ChangeEvent, KeyboardEvent } from "react";
import cn from "@/utility/cn";
import theme from "@/theme";

type Props = {
  onOtpSubmit: (otp: string) => void;
  length: number;
  disable?: boolean;
};

const OtpInput = ({ length = 4, onOtpSubmit = () => {}, disable }: Props) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    // If inputs disable
    if (disable) return;

    const value = e.target.value;
    // @ts-ignore
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index: number) => {
    // If inputs disable
    if (disable) return;

    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // If inputs disable
    if (disable) return;

    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="input-otp flex flex-wrap items-center justify-center w-full h-fit gap-[2rem]">
      {otp.map((value, index) => {
        return (
          <input
            disabled={disable}
            key={index}
            type="number"
            inputMode="numeric"
            ref={(input: HTMLInputElement | null) => {
              if (input) {
                inputRefs.current[index] = input;
              }
            }}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={cn(
              theme.inputCommonStyling,
              "aspect-[72/62] w-[6rem] bg-[#F7F8F9] focus:ring-[2px] focus:ring-primary text-center rounded-[0.7rem] border-[1.5px] border-[#E8ECF4]"
            )}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
