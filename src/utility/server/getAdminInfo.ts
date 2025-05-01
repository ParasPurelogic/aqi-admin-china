import { conventions } from "@/config/conventions";
import { TypeAdminInfo } from "@/types/misc";
import { cookies } from "next/headers";
import log from "../log";

const getAdminInfo = async (): Promise<TypeAdminInfo | null> => {
    try {
        // Get payload
        const payload = cookies().get(conventions.auth.cookie.adminInfo)?.value ?? ""
        // Split the payload
        const splittedPayload = payload?.split(".");

        // If not a valid payload
        if (splittedPayload.length != 3) {
            return null
        }

        // Extract payload
        const adminInfoPayload = splittedPayload[1];
        // Decode the payload
        const decodedPayload = atob(adminInfoPayload);
        // Convert the decoded payload
        let adminInfo: TypeAdminInfo = JSON.parse(decodedPayload);

        // If necessary info is missing
        if (!adminInfo?.email || !adminInfo.id || !adminInfo.token) {
            return null
        }

        // Return
        return adminInfo

    } catch (error) {
        // Log
        log("error", "GET_USER_INFO_FN", error)
        return null
    }
}

export default getAdminInfo