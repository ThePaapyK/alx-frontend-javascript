export default function returnHowManyArguments(...args) {
  let num = 0;
  // eslint-disable-next-line
  for (const arg of args) {
    num += 1;
  }
  return num;
}
