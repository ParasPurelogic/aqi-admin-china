import { AdminInfoProvider } from "@/contexts/AdminInfo";
import getAdminInfo from "@/utility/server/getAdminInfo";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  // adminInfo
  let adminInfo = await getAdminInfo();

  // Return JSX
  return (
    <AdminInfoProvider adminInfo={adminInfo}>{children}</AdminInfoProvider>
  );
};

export default Layout;
