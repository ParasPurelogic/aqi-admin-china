const capitalizeString = (str: string) => {
    if (str?.length === 0) return str;
    try {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    } catch (error) {
        return str
    }
}

export default capitalizeString