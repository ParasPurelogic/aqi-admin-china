import { FNGetAllAdminPermissions } from "@/fetch-data/Types"
import { domainName } from "./misc"

export type TypeRoute = {
    id: string
    name: string
    pathname: string
    icon?: string
    url: string
    children?: TypeRoute[]
}

type RouteGroup = {
    [key in AvailableRouteGroups]: TypeRoute
}

// Available Route Groups
export type AvailableRouteGroups = keyof FNGetAllAdminPermissions | "auth"

// Routes
export const routes: RouteGroup = {
    // Client-devices
    clientDevices: {
        id: "client-devices",
        name: "客户设备",
        pathname: "/client-devices",
        url: `${domainName}/client-devices`,
        icon: `${domainName}/media/icons/routes/client-devices.svg`,
    },
    // Auth Page
    auth: {
        id: "auth",
        name: "认证",
        pathname: "/auth",
        url: `${domainName}/auth`,
    },
} as const;


