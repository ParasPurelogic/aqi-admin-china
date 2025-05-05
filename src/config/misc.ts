import { FNGetAllAdminPermissions } from "@/fetch-data/Types";
import { AqiWebsiteSupportedLanguages } from "@/types/misc"

// Domain name
export const domainName = process.env.NODE_ENV === "production" ? "https://admin.pranaair.top" : "http://localhost:3000";

// aqiWebsiteSupportedLanguages
export const aqiWebsiteSupportedLanguages: AqiWebsiteSupportedLanguages[] = ["en", "ar", "cn", "au", "ca", "in", "uk", "us", "fr", "de", "hi", "id", "ja", "pt", "ko", "ru", "es", "th", "vi"]

// Automation Bot Email
export const automationBotEmail = "admin-bot@aqi.in";

// Permissions List
export const permissionsList: FNGetAllAdminPermissions = {
    clientDevices: {
        page: {
            permission_id: 4
        },
        licenseAction: {
            permission_id: 5
        },
        sendLicenseReminder: {
            permission_id: 6
        },
    },
};

// Admin Colors
export const adminColors = [
    "#E37140",
    "#edad03",
    "#285943",
    "#373F51",
    "#0353A4",
    "#00944A",
];