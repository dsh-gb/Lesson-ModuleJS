export const printError = (htmlId, errorText) => {
    const result = document.getElementById(htmlId);
    result.innerText = errorText;
}

export const printResult = (htmlId, { years, months, days }) => {
    const result = document.getElementById(htmlId);
    result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;
}