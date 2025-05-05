type Args = {
    onFetching?: () => void
    onError?: (error: string) => void
    onSuccess?: (done: string) => void
    onFinally?: () => void
    options: {
        token: string
        user_id: number
        licenseKey: string
        status: 0 | 1
    }
}

type API = {
    response: {
        status: 1 | 0,
        message: string,
        msg?: string
        data?: {
            error?: string[]
        }
    }
}

const changeLicenseStatus = async (args: Args): Promise<string | undefined> => {
    try {
        // Run onFetching FN
        args?.onFetching?.();

        // Prepare request body
        const formData = new URLSearchParams();
        formData.append('user_id', String(args.options.user_id));
        formData.append('licenceKey', String(args.options.licenseKey));
        formData.append('status', String(args.options.status));

        // Make api call
        const request = await fetch("https://airquality.pranaair.top/api/v1/admin/AdminChangeLicenceStatus", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                authorization: `bearer ${args.options.token}`
            },
            body: formData,
            cache: "no-store"
        });

        // Convert the response
        const response: API["response"] = await request.json();

        // If devices updated
        if (response.status == 1) {
            args?.onSuccess?.(response.message)
            return response.message
        }

        // If error
        throw new Error(response.data?.error?.[0] ?? response.msg ?? response.message ?? "Error while updating status")

    } catch (error: any) {
        args?.onError?.("a_" + error.message)
    } finally {
        // Run onFinally FN
        args?.onFinally?.();
    }
}

export default changeLicenseStatus