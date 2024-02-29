module.exports = function calculateNumber(type, a, b) {
  const na = Math.round(a);
  const nb = Math.round(b);
  if (type === 'SUM') return na + nb;
  if (type === 'SUBTRACT') return na - nb;
  if (type === 'DIVIDE') {
    if (nb === 0) return 'Error';
    return na / nb;
  }
};
