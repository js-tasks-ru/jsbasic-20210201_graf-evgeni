/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let spam = str.toLowerCase();
  return spam == ('1xbet' || 'xxx');
}
