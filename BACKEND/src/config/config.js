

export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSize: "Lax",
    maxAge: 1000 * 60 * 60 , // 1 hr
    // maxAge: 1000 * 60 * 5 , // 5 minutes
}