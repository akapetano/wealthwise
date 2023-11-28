export function formatCurrency(number: number): string {
  const numString = number.toFixed(2);

  const [integerPart, decimalPart] = numString.split(".");

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ".",
  );

  const formattedNumber = `${formattedIntegerPart},${decimalPart}`;

  return formattedNumber;
}

export function calculateYearly(number: number): number {
  return number * 12;
}
