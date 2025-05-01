// GET USER TRANSACTIONS
import { PublicLocation, AqiWebsiteSupportedLanguages } from '@/types/misc';
import getDeviceLicenseDetails from './../utility/getDeviceLicenseDetails';

// TRANSACTION
export type UserTransaction = Partial<{
    id: number
    user_id: number
    order_no: string
    invoice_no: string
    licenceKey: string
    transaction_id: string
    /** 1 = success, 2 = failed */
    transaction_status: 1 | 2
    transaction_amount: number
    transaction_currency: string
    deviceslist: { serialno: string, name: string }[]
    billing_json: Partial<{
        firstName: string
        lastName: string
        email: string
        phoneNumber: number | string
        organizationName: string
        houseNumber: string
        locality: String
        pincode: string
        city: string
        state: string
        country: string
        taxDetails: Partial<{
            taxNumber: string;
            companyName: string;
        }>
    }>
    payment_gateway_json: Partial<{
        order_id: string
        notes: {
            planId: string
        }
    }>
    created_at: string
    last_edited: string
    order_note: string
    issued_by: 1 | 2
}>

// PLAN
export type Plan = Partial<{
    id: number
    PlanName: string
    PlanType: string
    Days: number
    Currency: string
    PlanPrice: string
    PlanTerm: number
    Is_BestSeller: number
    created_at: string
}>

// DEVICE
export type UserDevice = Partial<{
    serialNo: string
    hwId: number
    isOnline: number
    user_id: number
    name: string
    email: string
    license_info: ReturnType<typeof getDeviceLicenseDetails>,
    is_devicehavelicense: number
    licenceData: Partial<{
        plan_id: number
        licenceKey: string
        transaction_currency: string
        StartDate: string
        EndDate: string
        remaining_days: number
        licenceType: number
        licensecreatedate: string
        Status: number
    }>
    realtime: Partial<{
        sensorid: number
        sensorvalue: number
        sensorname: string
    }>[]
    last_updated: string
}>

// FNGetAllSensors
export type FNGetAllSensors = Partial<{
    SensorId: number,
    SensorName: string,
    unit: string
}>[]

// LEADS
export type FNGetLeads = Partial<{
    id: number,
    name: string
    phone: string
    email: string
    organization: string
    message: string
    datetime: string
    contact_from_via: "contact_page" | "contact_widget" | "aqi_report_page" | "air_quality_monitor"
}>[]

// FNGetAllUserAccounts
export type FNGetAllUserAccounts = Partial<{
    id: number
    firstname: string
    lastname: string
    email: string
    account_status: number
    created_at: string
}>[]

// FNGetAllAQIStationList
export type FNGetAllAQIStationList = Partial<{
    /** 0 = unknown, 1 = AQI_CN, 2 = HW1 (Internal), 3 = User Device, 4 = Virtual Device */
    dev_type: 0 | 1 | 2 | 3 | 4
    locationName: string
    locationId: string
    stationname: string
    cityname: string
    cityid: string
    statename: string
    stateid: string
    country: string
    countryid: string
    country_slug: string
    state_slug: string
    city_slug: string
    location_slug: string
    lat: string
    lon: string
    last_updated: string
    Status: 1 | 2
    airquality: Partial<{
        sensorName: string
        sensorData: number
        senDevId: string
        sensorUnit: string
    }>[]
}>[]

// FNGetDpccRspcbData
export type FNGetDpccRspcbData = Partial<{
    dpcclist: FNGetDpccRspcbData_DPCC[]
    rspcblist: FNGetDpccRspcbData_RSPCB[]
    adddeviceslist: FNGetDpccRspcbData_adddeviceslist[]
}>

export type FNGetDpccRspcbData_DPCC = Partial<{
    id: number
    serialNo: string
    siteid: string
    token: string
    status: number
    created_at: string
    updated_at: string
    response: string
}>
export type FNGetDpccRspcbData_RSPCB = Partial<{
    id: number
    serialno: string
    site_id: string
    monitoring_id: string
    status: number
    created_at: string
    updated_at: string
    response: string
}>
export type FNGetDpccRspcbData_adddeviceslist = Partial<{
    id: number
    Hwid: string
    ProductName: string
    Product_image: string
    ProductDescription: string
    dev_type: number
    connection_type: number
    steps: number
    wifi_step1: string
    wifi_step2: string
    gsm_step1: string
    gsm_step2: string
    created_at: string
    updated_at: string
}>


// FNGetAllTickets
export type FNGetAllTickets = Partial<{
    _id: string,
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    orderId: string
    organization: string
    product: string
    issue: string
    description: string
    ticketId: string
    media: string[]
    isReadByUser: boolean
    isReadByAdmin: boolean
    status: "Active" | "Pending" | "Resolved" | "On Hold"
    portal: "AQI" | "Prana Air"
    /** Email of the admin assigned to this ticket */
    assignedTo: string
    /** Array of  admins who have been assigned to this ticket */
    assignmentHistory: Partial<{
        /** Email of the assigned admin */
        assignedTo: string
        /** Name of the admin who assigned this ticket */
        assignedBy: string
        assignedAt: string
    }>[]
    remarks: Partial<{
        note: string,
        addedBy: string,
        addedAt: string
    }>[]
    /** Created At Time in UTC */
    createdAt: string
    /** Updated At Time in UTC */
    updatedAt: string
    // userId: string
}>[]

// TicketChat
export type FNGetTicketChatHistory = Partial<{
    _id: string,
    ticketId: string
    /** Time in UTC */
    createdAt: string
    /** Time in UTC */
    updatedAt: string
    messages: Partial<{
        _id: string,
        message: string
        senderId: Partial<{
            _id: string
            firstName: string
            lastName: string
            profileImage: string
        }>
        senderRole: "admin" | "user"
        /** Time in UTC */
        timestamp: string
    }>[],
}>


// FNGetAllLocationStories
export type FNGetAllLocationStories = Partial<{
    _id: string
    sourceUrl: string
    title: Partial<{ [key in AqiWebsiteSupportedLanguages]: string }>
    description: Partial<{ [key in AqiWebsiteSupportedLanguages]: string }>
    media: string[]
    startTime: string
    endTime: string
    status: "Published" | "Draft"
    createdAt: string
    updatedAt: string
    slug: string
    views: number
    portal: "Aqi" | "Weather" | "Both"
}>[]


// FNSearchPublicLocation
export type FNSearchPublicLocation = Partial<{
    stations: PublicLocation[]
    cities: PublicLocation[]
    states: PublicLocation[]
    countries: PublicLocation[]
}>

// FNFetchAdminInfo
export type FNFetchAdminInfo = Partial<{
    id: number
    firstname: string
    lastname: string
    phonenumber: number
    email: string
    profile_pic: string
    account_type: number
    /** 1 for ys, 0 for no */
    is_superadmin: 0 | 1
    role_name: string
    role_id: number
    role_permissionlist: AdminPermission[]
}>

// FNGetAllAdminsWithTheirBasicInfo
export type FNGetAllAdminsWithTheirBasicInfo = Partial<{
    user_id: number
    email: string
    user_name: string
    role_id: number
    role_name: string
}>[]

// FnGetAllAdmins
export type FNGetAllAdmins = Partial<{
    /** Admin DB Id */
    id: number
    /** Admin Id */
    assign_user_id: number
    /** Admin Email */
    assign_user_email: string
    /** Admin Name */
    assign_user_name: string
    /** Admin Role Name */
    role_name: string
    /** Admin Role Id */
    role_id: number
    /** Admin Permission List */
    roles_permissionlist: AdminPermission[]
    created_at: string
    updated_at: string
}>[]

// FnGetAllAdminRoles
export type FNGetAllAdminRoles = {
    id: number
    name: string
    created_at: string
    updated_at: string
    roles_permissionlist: AdminPermission[]
}[]

// FnGetAllAdminPermissions
export type AdminPermission = {
    /** Permission Unique Id */
    /** 1 = Access User Accounts Page, 2 = Access Orders - License Page, 3 = Can Change Order Status, 4 = Access Client's Devices Page, 5 = Perform License Actions (Add, Remove, Edit), 6 = Send License Reminder, 7 = Access Device Hardware Settings Page, 8 = Modify Device Hardware Settings, 9 = Access Govt. Devices Page, 10 = Add DPCC Device, 11 = Remove DPCC Device, 12 = Edit DPCC Device, 13 = Add RSPCB Device, 14 = Remove RSPCB Device, 15 = Edit RSPCB Device, 16 = Access Organic Leads Page, 17 = Send Email to Leads, 18 = Access AQI Stations Page, 19 = Access Internal Devices, 20 = Access Third Party Devices, 21 = Access Virtual Devices, 22 = Access Support Desk Page, 23 = Create Ticket, 24 = Change Ticket Assignee, 25 = Change Ticket Status, 26 = View Ticket Chat, 27 = Send Message in Ticket Chat, 28 = Access AQI Location Stories Page, 29 = Add Story, 30 = Edit Story, 31 = Delete Story */
    permission_id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31,
    /** DB ID */
    id?: number
    /** Permission Name */
    display_name?: string;
};

// Permission by keys
export type PermissionByKey<ID> = Omit<AdminPermission, "permission_id"> & {
    permission_id: ID
}

export type FNGetAllAdminPermissions = {
    clientDevices: {
        page: PermissionByKey<4>;
        licenseAction: PermissionByKey<5>;
        sendLicenseReminder: PermissionByKey<6>;
    };
};
