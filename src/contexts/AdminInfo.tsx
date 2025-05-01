"use client";

import { TypeAdminInfo } from "@/types/misc";
import { ReactNode, createContext, useContext } from "react";

type ProviderProps = {
  children: ReactNode;
  adminInfo: TypeAdminInfo | null;
};

const AdminInfoContext = createContext<TypeAdminInfo | null>(null);

export function AdminInfoProvider(props: ProviderProps) {
  // Get admin Info;
  return (
    <AdminInfoContext.Provider value={props.adminInfo}>
      {props.children}
    </AdminInfoContext.Provider>
  );
}

export const useAdminInfo = () => {
  return useContext(AdminInfoContext);
};
