import { TypeAdminInfo } from "@/types/misc"

type Args = {
    onFetching?: () => void
    onError?: (error: string) => void
    onSuccess?: (adminInfo: TypeAdminInfo) => void
    onFinally?: () => void
    options: {
        email: string
        password: string
    }
}

type APIResponse = {
    error?: string
    msg?: string
    token: string
    user: {
        token?: string
        id?: number
        firstname?: string
        lastname?: string
        organization?: string
        phonenumber?: string
        email?: string
        profile_pic?: string
        account_type?: number
    }
}

const crossDomainLogin = async (args: Args): Promise<TypeAdminInfo | undefined> => {
    try {
        // Run onFetching FN
        args?.onFetching?.();

        // Payload for first server request
        const firstServerPayload = new URLSearchParams();
        firstServerPayload.append('email', args?.options.email || "");
        firstServerPayload.append('password', args?.options.password || "");

        // Make API call to server1
        const request1 = await fetch("https://airquality.aqi.in/api/v1/admin/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: firstServerPayload.toString(),
            cache: "no-store"
        });

        // Convert server1 response
        const response1: APIResponse = await request1.json();

        // If error received from server
        if (response1?.error || !response1?.token) {
            throw new Error(response1.error)
        }

        // Data
        const data: TypeAdminInfo = {
            id: response1.user.id,
            name: response1.user.firstname + " " + response1.user.lastname,
            email: response1.user.email,
            token: response1.token,
        }

        // Return response
        args?.onSuccess?.(data)
        return data

    } catch (error: any) {
        args?.onError?.("a_" + error.message)
    } finally {
        // Run onFinally FN
        args?.onFinally?.();
    }
}

export default crossDomainLogin