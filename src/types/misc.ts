export type TypeAction<D = undefined> = {
    status: boolean
    message: string
    data?: D
}

export type TypeSensor = {
    id: string,
    uniqueId: number,
    multipleIds?: (number | string)[];
    name: string,
    fullName: string,
    unit: string | null,
    sensorIconUrl: string,
    ranges: TypeSensorRange[]
}

export type TypeSensorRange =
    {
        id: "range1" | "range2" | "range3" | "range4" | "range5" | "range6" | "range7" | "range8" | "range9" | "range10",
        name: string,
        min: number,
        max: number,
        color: string,
        absoluteColors: string[]
        rangeImageUrl: string,
        lottieUrl?: string,
        message?: string,
    } & (
        { isMaxInfinity: true, maxInfinityText: string } |
        { isMaxInfinity?: false, maxInfinityText?: never }
    )

// AqiWebsiteSupportedLanguages
export type AqiWebsiteSupportedLanguages = "en" | "ar" | "cn" | "au" | "ca" | "in" | "uk" | "us" | "fr" | "de" | "hi" | "id" | "ja" | "pt" | "ko" | "ru" | "es" | "th" | "vi"


// PublicLocation
export type PublicLocation = Partial<{
    location: string;
    locationId: string;
    searchType: string;
    city: string;
    state: string;
    country: string;
    flag: string;
    slug: string
    airquality: {
        sensorName?: string;
        sensorData?: number;
        senDevId?: string;
        sensorUnit?: string;
    }[];
}>

export type TypeAdminInfo = {
    id?: number
    name?: string
    email?: string
    ip?: string
    token?: string
}