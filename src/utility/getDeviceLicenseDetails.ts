import { Plan, UserDevice } from "@/fetch-data/Types"

type Data = Partial<{
    isPremium: boolean
    remainingDays: number
    totalDays: number
    licenseStatusColor: string
    remainingDaysPercentage: number
    remainingDaysPercentageColor: string
    licenseKey: string
    licenseStatus: "active" | "expired" | "inactive" | "non-licensed" | "other"
    planInfo?: Plan
    startData?: string
    endData?: string
}>

export const licenseStatusTranslations = {
    active: "活跃",
    expired: "已过期",
    inactive: "未激活",
    "non-licensed": "无许可证",
    other: "其他",
};


const getDeviceLicenseDetails = (device: UserDevice, plans: Plan[] = []): Data => {
    try {

        // Device's plan remaining days
        const remainingDays = device.licenceData?.remaining_days ?? 0;

        // Calculate the total days
        const totalDays =
            device.licenceData?.StartDate && device.licenceData?.EndDate
                ? Math.floor(
                    (new Date(device.licenceData.EndDate).getTime() -
                        new Date(device.licenceData.StartDate).getTime()) /
                    (1000 * 60 * 60 * 24)
                )
                : 1;

        // Calculate the percentage
        const percentage = Math.floor((100 * remainingDays) / totalDays);

        // Get Plan Expiration Color
        const expirationColor =
            percentage > 50 ? "#63C367" : percentage > 20 ? "#E59D00" : "#C92033";

        // return data
        return {
            remainingDays,
            totalDays,
            isPremium: !!device.is_devicehavelicense,
            remainingDaysPercentage: percentage,
            remainingDaysPercentageColor: expirationColor,
            licenseKey: device.licenceData?.licenceKey,
            startData: device.licenceData?.StartDate,
            endData: device.licenceData?.EndDate,
            licenseStatus: !device.is_devicehavelicense ? "non-licensed" : device.licenceData?.Status == 2 ? "expired" : device.licenceData?.Status == 0 ? "inactive" : device.licenceData?.Status == 1 ? "active" : "other",
            planInfo: plans.find((plan) => plan.id == device.licenceData?.plan_id),
            licenseStatusColor: device?.licenceData?.Status == 0
                ? "#EEC732"
                : device?.licenceData?.Status == 1
                    ? "#63C367"
                    : device?.licenceData?.Status == 2
                        ? "#C92033"
                        : "#C92033"
        }

        //
    } catch (error) {
        return {}
    }
}

export default getDeviceLicenseDetails