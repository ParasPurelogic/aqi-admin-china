"use server"

import { jwtVerify } from 'jose';
import { TypeAction, TypeAdminInfo } from '@/types/misc';

interface Args {
    authCookiePayload: string
}

const authAdmin = async (args?: Args): Promise<TypeAction<TypeAdminInfo>> => {
    try {

        // Auth cookie payload
        const authCookiePayload = args?.authCookiePayload

        // If no authCookiePayload provided
        if (!authCookiePayload) {
            return {
                status: false,
                message: "authCookiePayload not provided"
            }
        };

        // Verify token - It will throw error if not verified
        const data: { payload: TypeAdminInfo } = await jwtVerify(authCookiePayload, new TextEncoder().encode(process.env.JWT_SECRET))

        // Extract Payload
        const payload: TypeAdminInfo = data.payload;

        // return payload
        return {
            status: true,
            message: "success",
            data: payload
        }

    } catch (error: any) {
        // on verification failed
        return {
            status: false,
            message: "failed"
        };
    }
};

export default authAdmin;
