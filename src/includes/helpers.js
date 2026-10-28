/**
 * Generates a unique Japan Rail like confirmation code for bookings.
 * @returns {string} A unique confirmation code.
 */
const generateConfirmationCode = () => {
    return 'JR' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Converts kilometers to miles.
 * @param {number} km - The distance in kilometers.
 * @returns {number} The equivalent distance in miles.
 */
const kmToMiles = (km) => {
    const conversionFactor = 0.621371;
    return km * conversionFactor;
};

/**
 * Converts Japanese Yen to US Dollars.
 * @param {number} yen - The amount in Japanese Yen.
 * @returns {number} The equivalent amount in US Dollars.
 */
const yenToUsd = (yen) => {
    const exchangeRate = 0.0066; // Example rate: 1 Yen = 0.0066 USD
    return yen * exchangeRate;
};

/**
 * Converts opeating months from a number to 3-letter months
 * @param {array} operatingMonths - The months in number form
 * @returns {array} The converted months in 3-letter form
 */
const numbersToMonths = (operatingMonths) => {
    const months = [
        'Jan','Feb','Mar',
        'Apr','May','Jun',
        'Jul','Aug','Sep',
        'Oct','Nov','Dec'
    ]

    let convertedMonths = [];
    operatingMonths.forEach(element => {
        const index = element;
        convertedMonths.push(months[index-1]);
    });

    return convertedMonths;
}


export { generateConfirmationCode, kmToMiles, yenToUsd, numbersToMonths };