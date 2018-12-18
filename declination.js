/**
 * Склонение слов
 * @param  {number} qty  число
 * @param  {array} names массив слов
 * @return {string}       склонение
 *
 * declinationText(2, ['человек', 'человека', 'человек'])
 * => 'человека'
*/
function declinationText(qty, names) {
  var useQty = Math.round(qty);
  var useNames = names || ['товар', 'товара', 'товаров'];

  var cases = [2, 0, 1, 1, 1, 2];
  return useNames[ (useQty % 100 > 4 && useQty % 100 < 20) ? 2 : cases[(useQty % 10 < 5) ? useQty % 10 : 5]];
};
