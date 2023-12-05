/**
 * Генератор чисел с шагом 1
 * Вариант с замыканием на начальное значение в самовызываемой функции.
 * @returns {Number}
 */
export const generateCode = (function (start = 0) {
  return () => ++start;
}());

export const formatCurrency = (amount) => {
  const roundedAmount = Math.floor(Number(amount));
  const formattedAmount = roundedAmount.toLocaleString();
  const formattedCurrency = formattedAmount;

  return formattedCurrency ;
}

export function morph(number, one, few, other) {
  number = Math.abs(number) % 100;
  const number2 = number % 10;

  if (number > 10 && number < 20) {
    return other;
  }
  if (number2 > 1 && number2 < 5) {
    return few;
  }
  if (number2 === 1) {
    return one;
  }
  return other;
}