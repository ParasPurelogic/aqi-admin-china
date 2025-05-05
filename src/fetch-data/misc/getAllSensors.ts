import { FNGetAllSensors } from "../Types"


type Args = {
    onFetching?: () => void
    onError?: (error: string) => void
    onSuccess?: (sensors: FNGetAllSensors) => void
    onFinally?: () => void
    options?: {}
}

type Response = {
    status: 0 | 1
    message: string
    data: FNGetAllSensors
}

const getAllSensors = async (args: Args): Promise<FNGetAllSensors | undefined> => {
    try {
        // Run onFetching FN
        args?.onFetching?.();

        // Make API call
        const request = await fetch("https://airquality.pranaair.top/api/v1/admin/GetAllSensorList");

        // Convert the data
        const response: Response = await request.json();

        // If data not received
        if (!response.data || response?.data?.length == 0) {
            throw new Error(response?.message ?? "Something went wrong while fetching sensors list");
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

export default getAllSensors