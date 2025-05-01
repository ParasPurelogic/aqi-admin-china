"use server"

import { cookies, headers } from "next/headers"
import * as jose from "jose"
import { conventions, getCookieConfig } from "@/config/conventions"
import { TypeAction, TypeAdminInfo } from "@/types/misc"
import login from '@/fetch-data/auth/login';

type Args = {
    email: string
    password: string
}

const logMeIn = async (args: Args): Promise<TypeAction<any>> => {
    try {
        // Validation
        const emailRegX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordRegX = /.{6,}/;

        // If invalid email
        if (!emailRegX.test(args.email) || !passwordRegX.test(args.password)) {
            return {
                status: false,
                message: "Invalid email or password found",
            }
        }

        // Login to server1 and server2
        const loginInfos = await login({
            options: {
                email: args.email,
                password: args.password,
            },
            onError: msg => {
                throw new Error(msg);
            },
        })

        // If token not received
        if (!loginInfos?.token) { throw new Error("Token not received") }

        // Get admin IP
        const ip = headers().get("x-real-ip") ?? headers().get('x-forwarded-for');

        // Prepare admin info payload
        const adminInfoPayload: TypeAdminInfo = {
            ip: ip ?? undefined,
            id: loginInfos.id,
            name: loginInfos.name,
            email: loginInfos.email,
            token: loginInfos.token,
        }

        // Generate JWT
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        // JWT Algo
        const alg = 'HS256'
        // Sign JWT
        const jwtToken = await new jose.SignJWT(adminInfoPayload)
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setIssuer('aqi-dksj__o9')
            .setExpirationTime('1d')
            .sign(secret)

        // Set the jwtToken in Cookie
        cookies().set(
            conventions.auth.cookie.adminInfo,
            jwtToken,
            {
                ...getCookieConfig()
            }
        )

        // Return
        return {
            status: true,
            message: "Login successfully",
        }

    } catch (error: any) {
        return {
            status: false,
            message: error.message ?? "Something went wrong",
        }
    }
}

export default logMeIn