import { UserDevice } from "@/fetch-data/Types"
import getDeviceLicenseDetails from "@/utility/getDeviceLicenseDetails"
import getAllPlans from '@/fetch-data/misc/getAllPlans';
import getAllSensors from "../misc/getAllSensors";

type Args = {
    onFetching?: () => void
    onError?: (error: string) => void
    onSuccess?: (data: UserDevice[]) => void
    onFinally?: () => void
    options: {
        token: string
    }
}

type API = {
    request: {
        headers: {
            authorization: `bearer ${string}`
        }
    }
    response: {
        status: number
        message: string
        msg?: string
        data?: UserDevice[]
    }
}

const getAllDevices = async (args: Args): Promise<UserDevice[] | undefined> => {
    try {
        // Run onFetching FN
        args?.onFetching?.();

        // Prepare header
        const headers: API["request"]["headers"] = {
            authorization: `bearer ${args.options?.token ?? ""}`,
        }

        // Calls
        const [response, sensors, plans] = await Promise.all([
            // Fetch Devices
            fetch("https://airquality.aqi.in/api/v1/admin/GetAllClientDevices", {
                headers,
                cache: "no-store"
            }).then(res => res.json() as Promise<API["response"]>),
            // Fetch All Sensors
            getAllSensors({}),
            // Fetch all plan,
            getAllPlans({ onError: (er) => { throw new Error(er) } })
        ]);

        // If error received
        if (response.status == 0 || !response.data) {
            throw new Error(response.message ?? response.msg)
        }

        // Devices
        let devices = response.data.reverse().map(d => ({
            ...d,
            license_info:
                getDeviceLicenseDetails(d, plans),
            realtime: (d.realtime || []).map(sensor => ({
                ...sensor,
                sensorname: sensors?.find?.(s => s?.SensorId == sensor?.sensorid)?.SensorName || sensor.sensorname
            }))
        }))

        // If data received
        args?.onSuccess?.(devices)
        return devices

    } catch (error: any) {
        args?.onError?.("a_" + error.message)
    } finally {
        // Run onFetching FN
        args?.onFinally?.();
    }
}

export default getAllDevices