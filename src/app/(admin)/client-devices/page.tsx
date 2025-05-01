import ShowError from "@/components/misc/ShowError";
import PageClientsDevices from "@/components/pages/ClientsDevices";
import { routes } from "@/config/routes";
import getAllDevices from "@/fetch-data/client-devices/getAllDevices";
import getAllPlans from "@/fetch-data/misc/getAllPlans";
import getAdminInfo from "@/utility/server/getAdminInfo";
import { Metadata } from "next";

// Meta Data
export const metadata: Metadata = {
  title: routes.clientDevices.name,
};

const Page = async () => {
  // Admin Info
  let adminInfo = await getAdminInfo();

  // Let error
  let error = "";

  // Fetch all transactions
  const userDevices = await getAllDevices({
    options: {
      token: adminInfo?.token ?? "",
    },
    onError: (er) => (error = er),
  });

  // Fetch all plans
  const plans = await getAllPlans({ onError: (er) => (error = er) });

  // If error
  if (error || !userDevices || !plans) {
    return <ShowError message={error} />;
  }

  // Return JSX
  return <PageClientsDevices plans={plans} devices={userDevices} />;
};

export default Page;
