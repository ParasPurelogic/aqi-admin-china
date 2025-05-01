export const conventions = {
    auth: {
        cookie: {
            adminInfo: "aqi_ad_u_yt09op",
        }
    },
    query: {
        loginToParam: "to",
        showTicketModal: "ticket",
    }
}

// Cookie Config
export const getCookieConfig = () => ({
    httpOnly: true,
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
});