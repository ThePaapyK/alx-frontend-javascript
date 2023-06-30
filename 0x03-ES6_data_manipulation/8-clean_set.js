export default function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));
  const cleanedString = filteredValues.join('-');
  return cleanedString;
}
