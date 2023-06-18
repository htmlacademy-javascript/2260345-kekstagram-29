/*
Проверка длины строки
@param{string} string; проверяемая строка
@param{int} number; значение длины строки, которое нельзя превышать
@return {boolean}; результат true или false.
*/

const isValidStr = (string, number) => (string.length <= number);

isValidStr('123489', 8);

/*
Палиндром
@param {string} string
Убираем в введенной строке пробелы и переводим ее в верхний регистр.
Проверяем палиндром ли полученная строка методом попарного сравнения символов: 1-й символ с начала строки сравнивается с
1-ым символом с конца строки и т.д.
Количество итераций должно быть в два раза меньше длины строки. Если при какой-либо из итераций сработало условие в теле цикла,
то возвращаем false, если же нет, то true.
*/

function IsPalindrome (string) {
  const solidString = string.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < solidString.length / 2; i++) {
    if (solidString.at(i) !== solidString.at(-1 - i)) {
      return false;
    }
  }
  return true;
}

IsPalindrome('Лёша на полке клопа нашёл ');


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//  Если в строке нет ни одной цифры, функция должна вернуть NaN:
// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN

function extractNumber(string) {
  const validString = string.toString();
  let result = '';
  for (let i = 0; i < validString.length; i++) {
    if (!Number.isNaN(parseInt(validString[i], 10))) {
      result += Math.ceil(validString[i]);
    }
  }
  return parseInt(result, 10);
}

extractNumber(-1);

