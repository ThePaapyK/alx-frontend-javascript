export default function cleanSet(set, startString) {
  if (
    !set || !startString || typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0
  ) {
    return '';
  }

  const list = [...set].filter((item) => typeof item === 'string' && item.startsWith(startString))
                       .map((item) => item.slice(startString.length));

  return list.join('-');
}
