import { Plan } from "../Types"


type Args = {
    onFetching?: () => void
    onError?: (error: string) => void
    onSuccess?: (plans: Plan[]) => void
    onFinally?: () => void
    options?: {}
}

type Response = {
    status: 0 | 1
    message: string
    msg: string
    data: Plan[]
}

const getSubscriptionPlans = async (args: Args): Promise<Plan[] | undefined> => {
    try {
        // Run onFetching FN
        args?.onFetching?.();

        // Make API call
        const request = await fetch("https://airquality.aqi.in/api/v1/PlanList", {
            next: { revalidate: 604800 } // Revalidate after 7 days
        });

        // Convert the data
        const response: Response = await request.json();

        // If data not received
        if (!response.data || response?.data?.length == 0) {
            throw new Error(response?.message ?? response?.msg ?? "Something went wrong while fetching plans data");
        }

        // Run onSuccess FN
        args?.onSuccess?.(response.data);
        return response.data

        //
    } catch (error: any) {
        args?.onError?.("a_" + error.message)
    } finally {
        // Run onFetching FN
        args?.onFinally?.();
    }
}

export default getSubscriptionPlans