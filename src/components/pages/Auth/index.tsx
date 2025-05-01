"use client";

import Form from "./Form";
import Logo from "@/components/misc/Logo";

const Index = () => {
  // Return JSX
  return (
    <div className="login bg-white p-body-padding h-dvh w-full flex flex-col items-center justify-center">
      {/* Logo */}
      <Logo className="w-[10rem] md:w-[15rem] mb-[3rem] lg:mb-[6rem]" />

      {/* Form */}
      <div className="form w-full sm:w-[50rem]">
        <Form />
      </div>
    </div>
  );
};

export default Index;
