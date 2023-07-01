export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new Error('Invalid argument: set must be a Set');
  }

  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
}
