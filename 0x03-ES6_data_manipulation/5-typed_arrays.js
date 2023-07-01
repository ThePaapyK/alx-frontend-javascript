export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const val = new Int8Array(arr);

  try {
    val[position] = value;
  } catch (e) {
    throw new Error('Position outside range');
  }
  return val;
}
