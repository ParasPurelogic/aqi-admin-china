type Args = {
    length?: number
    prefix?: string
    suffix?: string
    onlyEnglishLetters?: boolean
}

const generateRandomString = (args?: Args) => {
    const characters = args?.onlyEnglishLetters ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let randomString = '';

    const length = args?.length ?? 10;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    if (args?.prefix) return `${args?.prefix}-${randomString}`
    else if (args?.suffix) return `${randomString}-${args?.suffix}`
    else return randomString

}

export default generateRandomString