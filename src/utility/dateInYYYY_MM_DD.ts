const dateInYYYY_MM_DD = (inputDate: string | Date, reverse?: boolean) => {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = reverse ? `${day}-${month}-${year}` : `${year}-${month}-${day}`;
    return formattedDate;
}

export default dateInYYYY_MM_DD