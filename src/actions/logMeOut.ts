"use server"

import { cookies } from "next/headers";
import { getCookieConfig } from "@/config/conventions";
import { TypeAction } from "@/types/misc";

const logMeOut = async (): Promise<TypeAction> => {
    try {

        // Cookie
        const cookieStore = cookies();

        // Remove all cookies starting with "aqi_ad_"
        const allCookies = cookieStore.getAll();
        for (const cookie of allCookies) {
            if (cookie.name.startsWith("aqi_ad_")) {
                cookieStore.set(cookie.name, "", {
                    ...getCookieConfig(),
                    maxAge: 0
                });


            }
        }

        // Return response
        return {
            status: true,
            message: "Logged out successfully"
        }

    } catch (error) {
        return {
            status: false,
            message: "Something went wrong"
        }
    }
}

export default logMeOut