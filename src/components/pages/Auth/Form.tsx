"use client";

import IconLoader from "@/components/icons/IconLoader";
import { Button, InputEmail, InputPassword } from "@/components/elements";
import cn from "@/utility/cn";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import logMeIn from "@/actions/logMeIn";
import { routes } from "@/config/routes";

type Props = {};

const LoginForm = (props: Props) => {
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
    clearErrors,
  } = useForm();

  // Logged in flag
  const [loggedInMsg, setLoggedInMsg] = useState("");

  // On form submit function
  const onSubmit = async (data: any) => {
    try {
      // Extract email and password from the fields
      const email = String(data.email) || "";
      const password = String(data.password) || "";

      // Update status
      setLoggedInMsg("正在登录...");

      // Login admin
      const loginStatus = await logMeIn({
        email,
        password,
      });

      // If failed login
      if (!loginStatus.status) {
        throw new Error(loginStatus.message);
      }

      // 显示成功提示
      toast.success("登录成功。");

      // 更新状态
      setLoggedInMsg("正在跳转...");

      // Redirect admin to home
      if (typeof window != "undefined") {
        window.location.href = routes.clientDevices.url;
      }

      //
    } catch (error: any) {
      // Update status
      setLoggedInMsg("");

      // Display error message
      toast.error(error.message);

      // If error for email/pass inputs
      if (error.message?.toLowerCase()?.includes("invalid")) {
        // Set errors for email and password fields
        setError("email", {
          type: "serverError",
          message: "请检查您的邮箱。",
        });
        setError("password", {
          type: "serverError",
          message: "请检查您的密码。",
        });
      }
    }
  };

  // Return JSX
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="login-form flex flex-col w-full"
    >
      {/* Input Fields  */}
      <div className="fields flex flex-col gap-[3.5rem]">
        {/* Email */}
        <div className="email space-y-[1rem]">
          <span className="text-title text-[1.8rem] font-extrabold">
            电子邮箱{" "}
          </span>
          <InputEmail
            required
            errorMessage={`${errors.email?.message || ""}`}
            placeholder="请输入您的电子邮箱"
            disabled={isSubmitting || !!loggedInMsg}
            {...register("email", {
              required: "电子邮箱是必填项",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "请输入有效的电子邮箱地址",
              },
              minLength: {
                value: 10,
                message: "电子邮箱长度至少为 10 个字符",
              },
            })}
            onChange={(e) => {
              setValue("email", e.target.value);
              if (errors.email) clearErrors("email");
            }}
          />
        </div>

        {/* Password */}
        <div className="password space-y-[1rem]">
          <span className="text-title text-[1.8rem] font-extrabold">密码</span>
          <InputPassword
            required
            errorMessage={`${errors.password?.message || ""}`}
            placeholder="请输入密码"
            disabled={isSubmitting || !!loggedInMsg}
            {...register("password", {
              required: "密码是必填项",
              minLength: {
                value: 6,
                message: "密码长度至少为 6 个字符。",
              },
            })}
            onChange={(e) => {
              setValue("password", e.target.value);
              if (errors.password) clearErrors("password");
            }}
          />
        </div>
      </div>

      {/* Submit button  */}
      <Button
        type="submit"
        disabled={isSubmitting || !!loggedInMsg}
        className="w-full py-[1.6rem] mt-[3rem]"
      >
        {isSubmitting || !!loggedInMsg ? (
          <>
            <span>{loggedInMsg}</span>
            <IconLoader />
          </>
        ) : (
          "登录"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
