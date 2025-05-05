import { UserTransaction } from "../Types"

type Args = {
    onFetching?: () => void
    onError?: (error: string) => void
    onSuccess?: (done: string) => void
    onFinally?: () => void
    options: {
        token: string
        user_id: UserTransaction["user_id"]
        plan_id: number
        deviceslist: { name: string, serialno: string }[]
        transaction_amount: number
        billing_json: UserTransaction["billing_json"]
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

const addLicense = async (args: Args): Promise<string | undefined> => {
    try {
        // Run onFetching FN
        args?.onFetching?.();

        // Prepare request body
        const formData = new URLSearchParams();
        formData.append('user_id', String(args.options.user_id));
        formData.append('plan_id', String(args.options.plan_id));
        formData.append('deviceslist', JSON.stringify(args.options.deviceslist));
        formData.append('transaction_amount', String(args.options.transaction_amount));
        formData.append('transaction_currency', "INR");
        formData.append('transaction_currency_symbol', "Rs");
        formData.append('billing_json', JSON.stringify(args.options.billing_json || {}));

        // Make api call
        const request = await fetch("https://airquality.pranaair.top/api/v1/admin/AdminActivateDeviceLicence", {
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
        throw new Error(response.data?.error?.[0] ?? response.msg ?? response.message ?? "Error while adding license")

    } catch (error: any) {
        args?.onError?.("a_" + error.message)
    } finally {
        // Run onFinally FN
        args?.onFinally?.();
    }
}

export default addLicense