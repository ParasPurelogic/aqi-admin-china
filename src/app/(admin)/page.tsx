import { routes } from "@/config/routes";
import { redirect } from "next/navigation";

const Page = () => {
  return redirect(routes.clientDevices.url);
};

export default Page;
