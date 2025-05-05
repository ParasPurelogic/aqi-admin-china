"use client";

import logMeOut from "@/actions/logMeOut";
import { Button } from "@/components/elements";
import { routes } from "@/config/routes";
import { useState } from "react";
import { toast } from "sonner";

type Props = {};

const LogoutButton = (props: Props) => {
  // Show Nav
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Return JSX
  return (
    <Button
      disabled={isLoggingOut}
      className="m-[1rem] bg-error/10 text-error border-0"
      onClick={async () => {
        // Logging out
        setIsLoggingOut(true);

        // Logout
        const logoutStatus = await logMeOut();

        // If not logged out
        if (!logoutStatus.status) {
          toast.info(logoutStatus.message);
          setIsLoggingOut(false);

          return;
        }

        // Redirect
        if (typeof window != "undefined") {
          window.location.href = routes.auth.url;
        }
      }}
    >
      {isLoggingOut ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
